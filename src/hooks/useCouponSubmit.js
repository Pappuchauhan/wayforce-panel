import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import CouponServices from "@/services/CouponServices";
import { notifyError, notifySuccess } from "@/utils/toast";
// import useTranslationValue from "./useTranslationValue";
import useUtilsFunction from "./useUtilsFunction";

const useCouponSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [imageUrl, setImageUrl] = useState("");
  const [language, setLanguage] = useState(lang);
  const [resData, setResData] = useState({});
  const [published, setPublished] = useState(false);
  const [discountType, setDiscountType] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [couponImage, setCouponImage] = useState("")
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
    // console.log("coupon data", data);
    try {
      setIsSubmitting(true);
      // const titleTranslates = await handlerTextTranslateHandler(
      //   data.title,
      //   language
      // );
/*
      const couponData = {
        title: {
          [language]: data.title,
          // ...titleTranslates,
        },
        couponCode: data.couponCode,
        endTime: data.endTime,
        minimumAmount: data.minimumAmount,
        logo: imageUrl,
        lang: language,
        status: published ? "show" : "hide",
        discountType: {
          type: discountType ? "percentage" : "fixed",
          value: data.discountPercentage,
        },
        productType: data.productType,
      };
*/
      const formData = new FormData(); 
      formData.append('title', data.title);
      formData.append('couponCode', data.couponCode);
      formData.append('endTime', data.endTime);
      formData.append('minimumAmount', data.minimumAmount); 
      formData.append('status',  published ? "show" : "hide");
      formData.append('discountType[type]', discountType ? "percentage" : "fixed");
      formData.append('discountType[value]',  data.discountPercentage);
      formData.append('productType', data.productType); 
      formData.append('logo', couponImage);
      // console.log(
      //   "couponData",
      //   couponData,
      //   "titleTranslates",
      //   titleTranslates,
      //   "language",
      //   language
      // );
      // setIsSubmitting(false);
      // return;

      if (id) {
        const res = await CouponServices.updateCoupon(id, formData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await CouponServices.addCoupon(formData);
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
      setValue("productType");
      setValue("couponCode");
      setValue("endTime");
      setValue("discountPercentage");
      setValue("minimumAmount");
      setValue("logo");
      setImageUrl("");
      clearErrors("title");
      clearErrors("productType");
      clearErrors("couponCode");
      clearErrors("endTime");
      clearErrors("discountPercentage");
      clearErrors("minimumAmount");
      clearErrors("logo");
      setLanguage(lang);
      setValue("language", language);
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await CouponServices.getCouponById(id);
          if (res) {
            // console.log('res coupon', res);
            setResData(res);
            setValue("title", res.title);
            setValue("productType", res.productType);
            setValue("couponCode", res.couponCode);
            setValue("logo", res.logo);

            setValue("endTime", dayjs(res.endTime).format("YYYY-MM-DD HH:mm"));
            setValue("discountPercentage", res.discountType?.value);
            setValue("minimumAmount", res.minimumAmount);
            setPublished(res.status === "show" ? true : false);
            setDiscountType(
              res.discountType?.type === "percentage" ? true : false
            );
            setImageUrl(res.logo);
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
    couponImage, setCouponImage,
    getValues
  };
};

export default useCouponSubmit;
