import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Card, CardBody, Input, Select, Textarea } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

//internal import

import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import InputArea from "@/components/form/input/InputArea";
import useUserSubmit from "@/hooks/useUserSubmit";
import SelectRole from "@/components/form/selectOption/SelectRole";
import DrawerButton from "@/components/form/button/DrawerButton";
import LabelArea from "@/components/form/selectOption/LabelArea";
import Uploader from "@/components/image-uploader/Uploader";
import ImageUpload from "@/components/common/ImageUpload";
import Mulselect from "react-select";

const UserDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    isSubmitting,
    selectedDate,
    userImage,
    setUserImage,
    panImage,
    setPanImage,
    aadharImage,
    setAadharImage,
    setSelectedDate,
    handleSelectLanguage,
    Controller,
    control
  } = useUserSubmit(id);
  const { t } = useTranslation();
 
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null); 

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    // Add more language options as needed
  ];
 

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            register={register}
            title={"Update User"}
            description={"Updated your user necessary information from here"}
          />
        ) : (
          <Title
            register={register}
            title={"Add User"}
            description={"Add your user necessary information from here "}
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <Card className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
                <div className=" rounded-lg">
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <LabelArea label="User Image" />
                    <div className="col-span-8 sm:col-span-4">
                      <ImageUpload onUpload={setUserImage} image={image1} setImage={setImage1} />
                    </div>
                  </div>

                  <h2 className="text-sm font-semibold mb-2">
                    General Information
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <LabelArea label="User Type" />
                      <Select
                        className="bg-white"
                        name="userType"
                        {...register(`userType`, {
                          required: `User Type is required!`,
                        })}
                      >
                        <option value="" defaultValue hidden>
                          --Select--
                        </option>
                        <option value="Manpower">Manpower</option>
                        <option value="Agent">Agent</option>
                        <option value="Employer">Employer</option>
                      </Select>
                      <Error errorName={errors.userType} />
                    </div>
                    <div>
                      <LabelArea label="Full Name" />
                      <InputArea
                        register={register}
                        label="Full Name"
                        name="name"
                        type="text"
                      />
                      <Error errorName={errors.name} />
                    </div>
                    <div>
                      <LabelArea label="Mobile Number" />
                      <InputArea
                        register={register}
                        label="Mobile Number"
                        name="mobile"
                        type="text"
                      />
                      <Error errorName={errors.mobile} />
                    </div>

                    <div>
                      <LabelArea label="Email-id" />
                      <InputArea
                        register={register}
                        label="Email-id"
                        name="email"
                        type="text"
                      />
                      <Error errorName={errors.email} />
                    </div>

                    <div>
                      <LabelArea label="Gender" />
                      <Select
                        className=" bg-white"
                        name="gender"
                        {...register(`gender`, {
                          required: `Gender is required!`,
                        })}
                      >
                        <option value="" defaultValue hidden>
                          --Select--
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Select>
                      <Error errorName={errors.gender} />
                    </div>

                    <div>
                      <LabelArea label="DOB" />
                      <Input
                     
                        
                       {...register(`dob`, {
                        required: `DOB is required!`,
                        default: selectedDate
                      })}
                        label="DOB"
                        name="dob"
                        type="date"
                      />
                      <Error errorName={errors.dob} />
                    </div>

                    <div className="col-span-2">
                      <LabelArea label="Speaking Language" />
                      
                      <Controller
        name="speakingLanguages"
        control={control}
        render={({ field }) => (
          <Mulselect
            {...field}
            isMulti
            options={languageOptions}
          />
        )}
      />
         

                      <Error errorName={errors.speakingLanguages} />
                    </div>
                  </div>
                </div>

                <div className=" rounded-lg mt-5">
                  <h2 className="text-sm font-semibold mb-2">Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <LabelArea label="Address Line 1" />
                      <InputArea
                        register={register}
                        label="Address Line 1"
                        name="addressLine1"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.addressLine1} />
                    </div>
                    <div>
                      <LabelArea label="Address line 2" />
                      <InputArea
                        register={register}
                        label="Address line 2"
                        name="addressLine2"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.addressLine2} />
                    </div>

                    <div>
                      <LabelArea label="Block" />
                      <InputArea
                        register={register}
                        label="Block"
                        name="block"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.block} />
                    </div>

                    <div>
                      <LabelArea label="Pin Code" />
                      <InputArea
                        register={register}
                        label="Pin Code"
                        name="pinCode"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.pinCode} />
                    </div>

                    <div>
                      <LabelArea label="State" />
                      <InputArea
                        register={register}
                        label="State"
                        name="state"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.state} />
                    </div>

                    <div>
                      <LabelArea label="City" />
                      <InputArea
                        register={register}
                        label="City"
                        name="city"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.city} />
                    </div>

                    <div>
                      <LabelArea label="Country" />
                      <InputArea
                        register={register}
                        label="Country"
                        name="country"
                        type="text"
                        defaultValue={"India"}
                      />
                      <Error errorName={errors.country} />
                    </div>
                  </div>
                </div>

                <div className=" rounded-lg mt-5">
                  <h2 className="text-sm font-semibold mb-2">Work Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <LabelArea label="Service Location" />
                      <InputArea
                        register={register}
                        label="Service Location"
                        name="serviceLocation"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.serviceLocation} />
                    </div>
                    <div>
                      <LabelArea label="Select Category" />
                      <InputArea
                        register={register}
                        label="Category"
                        name="category"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.category} />
                    </div>

                    <div>
                      <LabelArea label="Experience" />
                      <InputArea
                        register={register}
                        label="Experience"
                        name="experience"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.experience} />
                    </div>

                    <div>
                      <LabelArea label="Min Salary" />
                      <InputArea
                        register={register}
                        label="Min Salary"
                        name="minSalary"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.minSalary} />
                    </div>

                    <div>
                      <LabelArea label="Max Salary" />
                      <InputArea
                        register={register}
                        label="Max Salary"
                        name="maxSalary"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.maxSalary} />
                    </div>

                    <div>
                      <LabelArea label="Job Type" />
                      <InputArea
                        register={register}
                        label="Job Type"
                        name="jobType"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.jobType} />
                    </div>

                    <div className="col-span-2">
                      <LabelArea label="Bio" />
                      <Textarea
                        className="border text-sm  block w-full bg-white  border-gray-200"
                        {...register("bio", {
                          required: false,
                        })}
                        name="bio"
                        rows="4"
                      />
                      <Error errorName={errors.bio} />
                    </div>
                  </div>
                </div>

                <div className=" rounded-lg mt-5">
                  <h2 className="text-sm font-semibold mb-2">Documents</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <LabelArea label="Pan Card No." />
                      <InputArea
                        register={register}
                        label="Pan Card No."
                        name="panCardNumber"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.panCardNumber} />
                    </div>

                    <div>
                      <LabelArea label="Aadhar No." />
                      <InputArea
                        register={register}
                        label="Aadhar No."
                        name="aadharNumber"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.aadharNumber} />
                    </div>

                    <div className="">
                      <LabelArea label="Upload Pan Card" />
                      <div className="col-span-8 sm:col-span-4">
                        <ImageUpload onUpload={setPanImage} image={image2} setImage={setImage2} />
                      </div>
                    </div>

                    <div className="">
                      <LabelArea label="Upload Aadhar Card" />
                      <div className="col-span-8 sm:col-span-4">
                        <ImageUpload onUpload={setAadharImage} image={image3} setImage={setImage3} />
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DrawerButton id={id} title="User" isSubmitting={isSubmitting} />
            </form>
          </CardBody>
        </Card>
      </Scrollbars>
    </>
  );
};

export default UserDrawer;
