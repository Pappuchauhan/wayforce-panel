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
    getValues
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true); 
      // const nameTranslates = await handlerTextTranslateHandler(
      //   data.name,
      //   language
      // );
      //console.log(data)
      const dob = new Date(data.dob); 
      data.age = calculateAge(dob); // calculate age 
      console.log(data.speakingLanguages)
      //const spLanguage = data.speakingLanguages; 
      const formData = new FormData(); 
      formData.append('profileImage', userImage);
      formData.append('panImage', panImage);
      formData.append('aadharImage', aadharImage);
     // let speakingLanguage = data.speakingLanguages;
      //formData.append(`speakingLanguage`, data.speakingLanguages);
      
      data.speakingLanguages.forEach((language, index) => {
        formData.append(`speakingLanguage[${index}]`, language);
      });
    

      formData.append(`address[addressLine1]`, data.addressLine1);
      formData.append(`address[addressLine2]`, data.addressLine2);
      formData.append(`address[block]`, data.block);
      formData.append(`address[pinCode]`, data.pinCode);
      formData.append(`address[state]`, data.state);
      formData.append(`address[city]`, data.city);
      formData.append(`address[country]`, data.country); 
      formData.append(`serviceLocation[address]`, data.slAddress); 
      
       
      Object.entries(data).forEach(([key, value]) => {
        if(key!='speakingLanguages' || key!='speakingLanguage' || key!='address' || key!='address'){
          if(value == undefined){
            formData.append(key, 0);
          }else{
            formData.append(key, value);
          }
          
        }
       
      });
      
      console.log(formData)
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
      if (res) {
        setResData(res); 
        setValue("aadharNumber", res.data.aadharNumber);
        setValue("age", res.data.age);
        setValue("bio", res.data.bio);  
        setValue("category", res.data.category);
        let setDob = res.data.dob 
        if(res.data.dob!=''){ 
          const originalDate = new Date(res.data.dob);          
          // Format the date to YYYY-MM-DD
           setDob = originalDate.toISOString().split('T')[0];
        } 
        console.log(res.data.speakingLanguage)
        setValue("dob", setDob);
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
        setValue("spkLanguage", res.data.speakingLanguage);
        setValue("userType", res.data.userType);
        setValue("status", res.data.status);  
        setValue("profileImage", res.data.profileImage);
        setValue("panImage", res.data.panImage);
        setValue("aadharImage", res.data.aadharImage);
        setValue("wallet", res.data.wallet);  
        setValue("isKyc", res.data.isKyc); 

        setValue(`addressLine1`, res.data.address.addressLine1);
        setValue(`addressLine2`, res.data.address.addressLine2);
        setValue(`block`, res.data.address.block);
        setValue(`pinCode`, res.data.address.pinCode);
        setValue(`state`, res.data.address.state);
        setValue(`city`, res.data.address.city);
        setValue(`country`, res.data.address.country);
        setValue(`slAddress`, res.data.serviceLocation.address);
        setValue(`lati`, res.data.serviceLocation.lati);
        setValue(`longi`, res.data.serviceLocation.longi);  

         
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
    formattedDate,
    getValues,
    setValue
  };
};

export default useUserSubmit;
