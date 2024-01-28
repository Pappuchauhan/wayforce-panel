import React, {useEffect, useState} from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Card, CardBody, Input, Select } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

//internal import

import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import InputArea from "@/components/form/input/InputArea";
import useMyCategorySubmit from "@/hooks/useMyCategorySubmit";
import SelectRole from "@/components/form/selectOption/SelectRole";
import DrawerButton from "@/components/form/button/DrawerButton";
import LabelArea from "@/components/form/selectOption/LabelArea";
import Uploader from "@/components/image-uploader/Uploader";
import ImageUpload from "@/components/common/ImageUpload";

const MyCategoryDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    isSubmitting,
    selectedDate,
    setSelectedDate,
    handleSelectLanguage,
    categoryImage, 
    setCategoryImage,
    getValues
  } = useMyCategorySubmit(id);
  const { t } = useTranslation();
 
  
  const handleFileUpload = (file) => {
    // Handle the uploaded file here
    console.log('Uploaded file:', file);
    // You can perform additional actions with the file, such as sending it to a server
  };
  useEffect(() => {
    console.log(categoryImage);
  }, [categoryImage]);
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            register={register}
            title={"Update Category"}
            description={t(
              "Updated your category necessary information from here"
            )}
          />
        ) : (
          <Title
            register={register}
            title={"Add Category"}
            description={"Add your category necessary information from here "}
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <Card className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Category Image" />
                  <div className="col-span-8 sm:col-span-4">
                    {/* First instance of ImageUpload */}
                    <ImageUpload
                      name="image1"
                      onUpload={(file) => setCategoryImage(file)}
                    />

                    {getValues('image') !== undefined && getValues('image')!='' &&  (
                      <img
                        src={getValues('image')}
                        alt="category"
                        style={{ height: `150px` }}
                      />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Name" />
                  <div className="col-span-8 sm:col-span-4">
                    <InputArea
                      register={register}
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Category name"
                    />
                    <Error errorName={errors.name} />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Price" />
                  <div className="col-span-8 sm:col-span-4">
                    <InputArea
                      register={register}
                      label="Price"
                      name="price"
                      type="text"
                      placeholder="Category price"
                    />
                    <Error errorName={errors.name} />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Status" />
                  <div className="col-span-8 sm:col-span-4">
                    <Select
                      name="status"
                      {...register(`status`, {
                        required: `status is required!`,
                      })}
                    >
                      <option value="" defaultValue hidden>
                        {" "}
                        Choose Status{" "}
                      </option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      {/* <option value="Checkbox">Checkbox</option> */}
                    </Select>
                    <Error errorName={errors.status} />
                  </div>
                </div>
              </div>

              <DrawerButton
                id={id}
                title="Category"
                isSubmitting={isSubmitting}
              />
            </form>
          </CardBody>
        </Card>
      </Scrollbars>
    </>
  );
};

export default MyCategoryDrawer;
