import { useTranslation } from "react-i18next";
import { Button, Select, Input, Textarea, File } from "@windmill/react-ui";
import {
  FiDownload,
  FiPlus,
  FiUpload,
  FiUploadCloud,
  FiXCircle,
} from "react-icons/fi";

//internal import

import Error from "@/components/form/others/Error";
import PageTitle from "@/components/Typography/PageTitle";
import useSettingSubmit from "@/hooks/useSettingSubmit";
import spinnerLoadingImage from "@/assets/img/spinner.gif";
import InputAreaTwo from "@/components/form/input/InputAreaTwo";
import SelectTimeZone from "@/components/form/selectOption/SelectTimeZone";
import SelectCurrency from "@/components/form/selectOption/SelectCurrency";
import SelectReceiptSize from "@/components/form/selectOption/SelectPrintSize";
import useFilter from "@/hooks/useFilter";
const SendBulkMessages = () => {
  const {
    userRef,
    dataTable,
    serviceData,
    filename,
    isDisabled,
    setSearchUser,
    totalResults,
    resultsPerPage,
    handleSubmitUser,
    handleSelectFile,
    handleChangePage,
    handleUploadMultiple,
    handleRemoveSelectFile,
  } = useFilter();
  const { errors, register, isSave, isSubmitting, onSubmitMessage, handleSubmit, fileInputRef, textInputRef,
    descInputRef } =
    useSettingSubmit();

  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{"Send Bulk Messages"}</PageTitle>
      <div className="sm:container md:p-6 p-4 w-full mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <form onSubmit={onSubmitMessage}>
          <div className="grid grid-cols-12 font-sans">
            <div className="col-span-12 md:col-span-12 lg:col-span-12 mr-3">
              <div className="lg:px-6 pt-4 lg:pl-40 lg:pr-40 md:pl-5 md:pr-5 flex-grow scrollbar-hide w-full max-h-full pb-0">
                <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                    {"Description"}
                  </label>
                  <div className="sm:col-span-3">
                    <Textarea
                      className="bg-white" 
                      name="description"
                      ref={descInputRef}
                      defaultValue="Hello, Thank you for testing Edumarc SMS Services"
                    ></Textarea>

                    <Error errorName={errors.commission} />
                  </div>
                </div>

                <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                    {"Single phone or multiple (separated by comma)"}
                  </label>
                  <div className="sm:col-span-3">  
                  <Textarea
                      className="bg-white" 
                      name="stextInputRef"
                      ref={textInputRef} 
                    ></Textarea>                   
                   
                  </div>
                </div>

                <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                    {"Choose File"}
                  </label>
                  <div className="sm:col-span-3">
                    <div className="h-10 border border-dashed border-emerald-500 rounded-md">
                      <label className="w-full rounded-lg h-10 flex justify-center items-center text-xs dark:text-gray-400 leading-none">
                        <Input
                          disabled={isDisabled}
                          type="file"
                          accept=".csv"
                          onChange={handleSelectFile}
                          name="csvFileContact"
                          ref={fileInputRef}
                           
                        />
                        {filename ? (
                          filename
                        ) : (
                          <>
                            <FiUploadCloud className="mx-2 text-emerald-500 text-lg dark:text-gray-400" />{" "}
                            {"Select Your .csv file"}
                          </>
                        )}
                        {filename && (
                          <span
                            onClick={handleRemoveSelectFile}
                            type="button"
                            className="text-red-500 focus:outline-none mx-4 text-lg"
                          >
                            <FiXCircle />
                          </span>
                        )}
                      </label>
                    </div>
                    <Error errorName={errors.commission} />
                  </div>
                </div>

                <div className="flex flex-row-reverse pb-6">
                  {isSubmitting ? (
                    <Button disabled={true} type="button" className="h-12">
                      <img
                        src={spinnerLoadingImage}
                        alt="Loading"
                        width={20}
                        height={10}
                      />{" "}
                      <span className="font-serif ml-2 font-light">
                        Processing
                      </span>
                    </Button>
                  ) : (
                    <Button type="submit" className="h-12 px-8">
                      {" "}
                      {"Send Message"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default SendBulkMessages;
