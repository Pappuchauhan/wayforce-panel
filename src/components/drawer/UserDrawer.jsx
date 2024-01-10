import React from "react";
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
    setSelectedDate,
    handleSelectLanguage,
  } = useUserSubmit(id);
  const { t } = useTranslation();

  const handleImageUpload = (imageData) => {
    // Handle the uploaded image data, e.g., send it to the server
    console.log('Uploaded image:', imageData);
  };


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
                      <ImageUpload onUpload={handleImageUpload} />
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
                      <LabelArea label="Age" />
                      <InputArea
                        register={register}
                        label="Age"
                        name="age"
                        type="text"
                      />
                      <Error errorName={errors.name} />
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
                      <InputArea
                        register={register}
                        label="DOB"
                        name="dob"
                        type="text"
                      />
                      <Error errorName={errors.dob} />
                    </div>

                    <div>
                      <LabelArea label="Speaking Language" />
                      <InputArea
                        register={register}
                        label="Price"
                        name="price"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.name} />
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
                        name="address[addressLine1]"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.address?.addressLine1} />
                    </div>
                    <div>
                      <LabelArea label="Address line 2" />
                      <InputArea
                        register={register}
                        label="Address line 2"
                        name="address[addressLine2]"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.address?.addressLine2} />
                    </div>

                    <div>
                      <LabelArea label="Block" />
                      <InputArea
                        register={register}
                        label="Block"
                        name="address[block]"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.address?.block} />
                    </div>

                    <div>
                      <LabelArea label="Pin Code" />
                      <InputArea
                        register={register}
                        label="Pin Code"
                        name="address[pinCode]"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.address?.pinCode} />
                    </div>

                    <div>
                      <LabelArea label="State" />
                      <InputArea
                        register={register}
                        label="State"
                        name="address[state]"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.address?.state} />
                    </div>

                    <div>
                      <LabelArea label="City" />
                      <InputArea
                        register={register}
                        label="City"
                        name="address[city]"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.address?.city} />
                    </div>

                    <div>
                      <LabelArea label="Country" />
                      <InputArea
                        register={register}
                        label="Country"
                        name="address[country]"
                        type="text"
                        defaultValue={"India"}
                      />
                      <Error errorName={errors.address?.country} />
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
                          required: true,
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
                        <Uploader
                          imageUrl={imageUrl}
                          setImageUrl={setImageUrl}
                          folder="admin"
                          required={true}
                        />
                      </div>
                    </div>

                    <div className="">
                      <LabelArea label="Upload Aadhar Card" />
                      <div className="col-span-8 sm:col-span-4">
                        <Uploader
                          imageUrl={imageUrl}
                          setImageUrl={setImageUrl}
                          folder="admin"
                          required={true}
                        />
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
