import dayjs from "dayjs";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";

//internal import
import { AdminContext } from "@/context/AdminContext";
import { SidebarContext } from "@/context/SidebarContext";
import UserServices from "@/services/UserServices";
import { notifyError, notifySuccess } from "@/utils/toast";
// import useTranslationValue from "./useTranslationValue";

const useUserSubmit = (id) => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext); 
  
  const [language, setLanguage] = useState(lang || "en");
  const [resData, setResData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();
  // const { handlerTextTranslateHandler } = useTranslationValue();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // const nameTranslates = await handlerTextTranslateHandler(
      //   data.name,
      //   language
      // );
      //console.log(data)
      const categoryData = {
       ...data     
      };

      if (id) {
        // console.log('id is ',id)
        const res = await UserServices.updateUser(id, categoryData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await UserServices.addUser(categoryData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      }
    } catch (err) {
      notifyError(err ? err?.response?.data?.message : err?.message);
      setIsSubmitting(false);
      closeDrawer();
    }
  };

  const getCategoryData = async () => {
    try {
      const res = await UserServices.getUserById(id);
      if (res) {
        setResData(res);
        setValue("name", res.data.name);
        setValue("price", res.data.price);
        setValue("status", res.data.status);  
         
      }
    } catch (err) {
      notifyError(err ? err?.response?.data?.message : err?.message);
    }
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);

    if (Object.keys(resData).length > 0) {
      setValue("name", resData.name[lang ? lang : "en"]);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("name");
      setValue("price");
      setValue("status");
       
      clearErrors("name");
      clearErrors("price");
      clearErrors("status");
       
      setLanguage(lang);
      setValue("language", language);
      return;
    }
    if (id) {
      getCategoryData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen, adminInfo.email, clearErrors]);
 

  return {
    register,
    handleSubmit,
    onSubmit,
    language,
    errors,  
    isSubmitting,
    handleSelectLanguage,
  };
};

export default useUserSubmit;
