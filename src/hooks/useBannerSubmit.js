import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import CouponServices from "@/services/CouponServices";
import { notifyError, notifySuccess } from "@/utils/toast";
// import useTranslationValue from "./useTranslationValue";
import useUtilsFunction from "./useUtilsFunction";
import BannerServices from "@/services/BannerServices";

const useCouponSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [imageUrl, setImageUrl] = useState("");
  const [language, setLanguage] = useState(lang);
  const [resData, setResData] = useState({});
  const [published, setPublished] = useState(false);
  const [discountType, setDiscountType] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [bannerImage, setBannerImage] = useState("")
  // const { handlerTextTranslateHandler } = useTranslationValue();
  const { currency } = useUtilsFunction();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = async (data) => { 
    try {
      setIsSubmitting(true);
     
      const formData = new FormData(); 
      formData.append('title', data.title); 
      formData.append('other', data.other);
      formData.append('status',  published ? "Active" : "Inactive");       
      formData.append('image', bannerImage);
     

      if (id) {
        const res = await BannerServices.updateBanner(id, formData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await BannerServices.addBanner(formData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message);
      setIsSubmitting(false);
      closeDrawer();
    }
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue("title", resData.title[lang ? lang : "en"]);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("title");
      setValue("other"); 
      setValue("image");
      setValue("status");
      setImageUrl("");
      clearErrors("title");
      clearErrors("other");       
      clearErrors("image");
      clearErrors("status");
      setLanguage(lang);
      setValue("language", language);
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await BannerServices.getBannerById(id);
          if (res) {
            // console.log('res coupon', res);
            setResData(res);
            setValue("title", res.title);
            setValue("other", res.other);
            setValue("status", res.status);
            setValue("image", res.image);
 
            setPublished(res.status === "Active" ? true : false);
             
            setImageUrl(res.image);
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err?.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, clearErrors, language, lang]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
    published,
    setPublished,
    currency,
    discountType,
    isSubmitting,
    setDiscountType,
    handleSelectLanguage,
    bannerImage, setBannerImage,
    getValues
  };
};

export default useCouponSubmit;
