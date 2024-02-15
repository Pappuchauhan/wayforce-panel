import { useContext, useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";

//internal import
// import useNotification from "./useNotification";
import { SidebarContext } from "@/context/SidebarContext";
import SettingServices from "@/services/SettingServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import { useDispatch } from "react-redux";
import { removeSetting } from "@/reduxStore/slice/settingSlice";
import { sendSMS } from "@/utils/sms";
import useFilter from "@/hooks/useFilter"; 
const useSettingSubmit = (id) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const descInputRef = useRef(null);
  const textInputRef = useRef(null);
  const { setIsUpdate } = useContext(SidebarContext);
  const [isSave, setIsSave] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // const { socket } = useNotification();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { 
    handleRemoveSelectFile,
  } = useFilter();

   
  const onSubmitMessage = async (e) => {
    e.preventDefault();
     
    try {
      setIsSubmitting(true);
      const description = descInputRef.current.value; 
      const inputPhones = textInputRef.current.value; 
      const file = fileInputRef.current.files[0];
      const reader = new FileReader();
      if(file){
      reader.onload = () => {
        const csvData = reader.result;
        // Split CSV data into rows
        const rows = csvData.split("\n"); 
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          if (row.trim() === "") {
            continue;
          }
          const columns = row.split(",");
           /*
          sendSMS(columns[0], description, "1707161719949940074")
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error.message);
            });
           */
        }
      };

      reader.readAsText(file);
    }
    if(inputPhones!==''){

      const multiplePhone = inputPhones.split(",");
       
      for (let i = 0; i < multiplePhone.length; i++) {
       /*  
        sendSMS(multiplePhone[i].trim(), description, "1707161719949940074")
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error.message);
            });
          */
      }

    }

      // console.log("global setting", settingData, "data", data);
      // return;
     // fileInputRef.current.handleRemoveSelectFile();
     notifySuccess("Message sent to all users");
      setIsSubmitting(false);
    } catch (err) {
      // console.log("err", err);
      notifyError(err?.response?.data?.message || err?.message);
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data) => {
    // console.log("data", data);
    // return notifyError("This feature is disabled for demo!");
    try {
      setIsSubmitting(true);
      const settingData = {
        name: "globalSetting",
        setting: {
          //for common setting
          commission: data.commission,
          shop_name: data.shop_name,
          address: data.address,
          company_name: data.company_name,
          vat_number: data.vat_number,
          post_code: data.post_code,
          contact: data.contact,
          email: data.email,
          website: data.website
        },
      };

      // console.log("global setting", settingData, "data", data);
      // return;

      if (!isSave) {
        const res = await SettingServices.updateGlobalSetting(settingData);
        // await socket.emit("notification", {
        //   message: `Global setting updated`,
        //   option: "globalSetting",
        // });
        setIsUpdate(true);
        setIsSubmitting(false);
        dispatch(removeSetting("globalSetting"));

       // window.location.reload();
        notifySuccess(res.message);
      } else {
        const res = await SettingServices.addGlobalSetting(settingData);
        // await socket.emit("notification", {
        //   message: `Global setting added`,
        //   option: "globalSetting",
        // });
        setIsUpdate(true);
        setIsSubmitting(false);

       // window.location.reload();
        notifySuccess(res.message);
      }
    } catch (err) {
      // console.log("err", err);
      notifyError(err?.response?.data?.message || err?.message);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await SettingServices.getGlobalSetting();
        // console.log("res>>>", res);
        if (res) {
          setIsSave(false);
           
          setValue("shop_name", res.shop_name);
          setValue("address", res.address);
          setValue("company_name", res.company_name);
          setValue("vat_number", res.vat_number);
          setValue("post_code", res.post_code);
          setValue("contact", res.contact);
          setValue("email", res.email);
          setValue("website", res.website);
          setValue("commission", res.commission); 
        }
      } catch (err) {
        notifyError(err?.response?.data?.message || err?.message);
      }
    })();
  }, []);

  return {
    errors,
    register,
    isSave,
    isSubmitting,
    onSubmit,
    onSubmitMessage,
    handleSubmit,
    fileInputRef,
    descInputRef,
    textInputRef
  };
};

export default useSettingSubmit;
