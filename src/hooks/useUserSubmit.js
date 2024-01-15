import dayjs from "dayjs";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
    const [selectedDate, setSelectedDate] = useState(
      dayjs().subtract(15, 'year').format("YYYY-MM-DD")
    );
  const [language, setLanguage] = useState(lang || "en");
  const [resData, setResData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [userImage, setUserImage] = useState("");
  const [panImage, setPanImage] = useState("");
  const [aadharImage, setAadharImage] = useState("");

  const location = useLocation();
  // const { handlerTextTranslateHandler } = useTranslationValue();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      //setIsSubmitting(true);

      // const nameTranslates = await handlerTextTranslateHandler(
      //   data.name,
      //   language
      // );
      //console.log(data)
      const dob = new Date(data.dob); 
      data.age = calculateAge(dob); // calculate age 
      const spLanguage = data.speakingLanguages.map((option) => option.label); 
      const formData = new FormData(); 
      formData.append('profileImage', userImage);
      formData.append('panImage', panImage);
      formData.append('aadharImage', aadharImage);
        
      spLanguage.forEach((language, index) => {
        formData.append(`speakingLanguage[${index}]`, language);
      });

      formData.append(`address[addressLine1]`, data.addressLine1);
      formData.append(`address[addressLine2]`, data.addressLine2);
      formData.append(`address[block]`, data.block);
      formData.append(`address[pinCode]`, data.pinCode);
      formData.append(`address[state]`, data.state);
      formData.append(`address[city]`, data.city);
      formData.append(`address[country]`, data.country); 


      Object.entries(data).forEach(([key, value]) => {
        if(key!='speakingLanguages'){
          if(value == undefined){
            formData.append(key, 0);
          }else{
            formData.append(key, value);
          }
          
        }
       
      });
      
    /*
      const categoryData = {
       ...data     
      };
      */ 
      if (id) {
        // console.log('id is ',id)
        const res = await UserServices.updateUser(id, formData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await UserServices.addUser(formData);
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

  const getUserData = async () => {
    try {
      const res = await UserServices.getUserById(id);
      console.log(res)
      if (res) {
        setResData(res);
        setValue("aadharNumber", res.data.aadharNumber);
        setValue("age", res.data.age);
        setValue("bio", res.data.bio);  
        setValue("category", res.data.category);
        setValue("dob", res.data.dob);
        setValue("email", res.data.email);  
        setValue("experience", res.data.experience);
        setValue("gender", res.data.gender);
        setValue("jobType", res.data.jobType);  
        setValue("maxSalary", res.data.maxSalary);
        setValue("minSalary", res.data.minSalary);
        setValue("mobile", res.data.mobile);  
        setValue("name", res.data.name);
        setValue("panCardNumber", res.data.panCardNumber);
        setValue("serviceLocation", res.data.serviceLocation);  
        setValue("speakingLanguage", res.data.speakingLanguage);
        setValue("userType", res.data.userType);
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
      console.log(id)
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen, adminInfo.email, clearErrors]);
 
  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

  function formattedDate(dob) {
    const inputDate = new Date(dob);
    const formattedDate = `${("0" + inputDate.getDate()).slice(-2)}-${(
      "0" +
      (inputDate.getMonth() + 1)
    ).slice(-2)}-${inputDate.getFullYear()}`;
    return formattedDate;
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    language,
    errors,  
    isSubmitting,
    handleSelectLanguage,
    selectedDate, 
    setSelectedDate,
    userImage,
    setUserImage,
    panImage,
    setPanImage,
    aadharImage,
    setAadharImage,
    Controller,
    control,
    formattedDate
  };
};

export default useUserSubmit;
