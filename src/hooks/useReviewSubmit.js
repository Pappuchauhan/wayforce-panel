import dayjs from "dayjs";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router";

//internal import
import { AdminContext } from "@/context/AdminContext";
import { SidebarContext } from "@/context/SidebarContext";
import ReviewServices from "@/services/ReviewServices";
import { notifyError, notifySuccess } from "@/utils/toast";
// import useTranslationValue from "./useTranslationValue";

const usePageSubmit = (id) => {
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
    control,
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

      const ReviewData = {
        rating: data.rating,
        comments: data.comments,
        status: data.status       
      };

      if (id) {
        // console.log('id is ',id)
        const res = await ReviewServices.updateReview(id, ReviewData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await ReviewServices.addPage(ReviewData);
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

  const getPageData = async () => {
    try {
      const res = await ReviewServices.getReviewById(id);
      if (res) {
        setResData(res);
        setValue("rating", res.data.rating);
        setValue("comments", res.data.comments);
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
      setValue("rating");
      setValue("comments");
      setValue("status");
       
      clearErrors("rating");
      clearErrors("comments");
      clearErrors("status");
       
      setLanguage(lang);
      setValue("language", language);
      return;
    }
    if (id) {
      getPageData();
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
    Controller,
    control
  };
};

export default usePageSubmit;
