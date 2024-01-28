import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Card, CardBody, Input, Select, Textarea } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

//internal import
import useAsync from "@/hooks/useAsync";
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
import CategoryServices from "@/services/CategoryServices";
import StateServices from "@/services/StateServices";
import CityServices from "@/services/CityServices";
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
    control,
    getValues,
    setValue,
  } = useUserSubmit(id);
  const { t } = useTranslation();

  const {
    data: categories,
    loading: catLoading,
    error: catError,
  } = useAsync(() => CategoryServices.getAllCategory()); 

  const {
    data: states,
    loading: stateLoading,
    error: stateError,
  } = useAsync(() => StateServices.getAllState()); 
   
const [selectedState, setSelectedState] = useState(getValues('state')?getValues('state'):"Goa");
const [cities, setCities] = useState(null);
const [cityLoading, setCityLoading] = useState(false);
const [cityError, setCityError] = useState(null);

useEffect(() => {
  // Call CityServices.getCityByStateName when the component loads
  CityServices.getCityByStateName(selectedState?.trim())
    .then((result) => {
      // Reset the state variables and update with the new data
      setCities(result);
      setCityLoading(false);
      setCityError(null);
    })
    .catch((error) => {
      console.error('Error loading cities:', error);
      // Handle the error by updating the state variables
      setCities(null);
      setCityLoading(false);
      setCityError(error);
    });
}, [selectedState]); // R 
  
  const handleStateChange = (stateName) => {     
    setSelectedState(stateName);
  };
   
  
  const languageOptions = [
    "English",
    "Spanish",
    "French",
    // Add more language options as needed
  ];
  let selectedLans = getValues("spkLanguage");
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
                    <div className="col-span-4 sm:col-span-2">
                      <LabelArea label="User Image" />
                      {getValues("profileImage") !== undefined &&
                        getValues("profileImage") != "" && (
                          <img
                            src={getValues("profileImage")}
                            alt="profile image"
                            style={{ height: `100px` }}
                          />
                        )}
                    </div>

                    <div className="col-span-8 sm:col-span-4">
                      <ImageUpload
                        name="userImage"
                        onUpload={(file) => setUserImage(file)}
                      />
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
                        {...register("dpb", {
                          required: false,
                        })}
                        label="DOB"
                        name="dob"
                        type="date"
                        //defaultValue="2024-01-26"
                        defaultValue={getValues("dob")}
                        // value={getValues('dob')}
                        required={true}
                      />
                      <Error errorName={errors.dob} />
                    </div>

                    <div className="col-span-2">
                      <LabelArea label="Speaking Language" />
                      <Select
                        multiple
                        size="10"
                        style={{ height: "100px" }}
                        className="bg-white"
                        name="speakingLanguages" 
                        {...register(`speakingLanguages`, {
                          required: `Speaking Languages is required!`,
                        })}
                      >
                        <option value="" defaultValue hidden>
                          --Select--
                        </option>
                        {languageOptions.map((chlanguage, index) => (
                          <option
                            key={chlanguage}
                            value={chlanguage}
                            selected={selectedLans?.includes(chlanguage)}
                          >
                            {chlanguage}
                          </option>
                        ))}
                      </Select>

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
                      <Select
                        className="bg-white"
                        name="state"
                        {...register(`state`)} 
                        onChange={(e) => handleStateChange(e.target.value)}
                      >
                        {!stateLoading &&
                          Array.isArray(states?.data) &&
                          states?.data?.map((state, index) => (
                            <option
                              key={state._id}
                              value={state.state}
                              selected={(state.state == getValues("state")?true:false)}
                            >
                              {state.state}
                            </option>
                          ))}
                        {stateLoading && (
                          <option value="Loading...">Loading...</option>
                        )}
                        {stateError && (
                          <option value="Error loading categories">
                            Error loading categories
                          </option>
                        )}
                      </Select> 
                      <Error errorName={errors.state} />
                    </div>

                    <div>
                      <LabelArea label="City" />
                      <Select
                        className="bg-white"
                        name="city"
                        {...register(`city`)} 
                      >
                        {!cityLoading &&
                          Array.isArray(cities?.data) &&
                          cities?.data?.map((city, index) => (
                            <option
                              key={city._id}
                              value={city.selectcity}
                              selected={(city.selectcity == getValues("city")?true:false)}
                            >
                              {city.selectcity}
                            </option>
                          ))}
                        {cityLoading && (
                          <option value="Loading...">Loading...</option>
                        )}
                        {cityError && (
                          <option value="Error loading categories">
                            Error loading categories
                          </option>
                        )}
                      </Select>
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
                        name="slAddress"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.serviceLocation} />
                    </div>
                    <div>
                      <LabelArea label="Latitude" />
                      <InputArea
                        register={register}
                        label="Latitude"
                        name="lati"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.lati} />
                    </div>
                    <div>
                      <LabelArea label="Longitude" />
                      <InputArea
                        register={register}
                        label="Longitude"
                        name="longi"
                        type="text"
                        required={true}
                      />
                      <Error errorName={errors.longi} />
                    </div>
                    <div>
                      <LabelArea label="Select Category" />

                      <Select
                        className="bg-white"
                        name="category"
                        {...register(`category`)} 
                      >
                        {!catLoading &&
                          Array.isArray(categories?.data) &&
                          categories?.data?.map((category, index) => (
                            <option
                              key={category._id}
                              value={category._id}
                              selected={(category._id == getValues("category")?true:false)}
                            >
                              {category.name}
                            </option>
                          ))}
                        {catLoading && (
                          <option value="Loading...">Loading...</option>
                        )}
                        {catError && (
                          <option value="Error loading categories">
                            Error loading categories
                          </option>
                        )}
                      </Select>

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
                      <div className="col-span-4 sm:col-span-2">
                        <LabelArea label="Upload Pan Card" />
                        {getValues("panImage") !== undefined &&
                          getValues("panImage") != "" && (
                            <img
                              src={getValues("panImage")}
                              alt="profile image"
                              style={{ height: `100px` }}
                            />
                          )}
                      </div>
                      <div className="col-span-8 sm:col-span-4">
                        <ImageUpload
                          name="panImage"
                          onUpload={(file) => setPanImage(file)}
                        />
                      </div>
                    </div>

                    <div className="">
                      <div className="col-span-4 sm:col-span-2">
                        <LabelArea label="Upload Aadhar Card" />
                        {getValues("aadharImage") !== undefined &&
                          getValues("aadharImage") != "" && (
                            <img
                              src={getValues("aadharImage")}
                              alt="profile image"
                              style={{ height: `100px` }}
                            />
                          )}
                      </div>

                      <div className="col-span-8 sm:col-span-4">
                        <ImageUpload
                          name="aadharImage"
                          onUpload={(file) => setAadharImage(file)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" rounded-lg mt-5">
                  <h2 className="text-sm font-semibold mb-2">Other</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <LabelArea
                        label={`Wallet (Total Balance: ${getValues("wallet")})`}
                      />
                      <InputArea
                        register={register}
                        required="Wallet"
                        label="Wallet"
                        name="addWallet"
                        type="number"
                      />
                    </div>

                    <div>
                      <LabelArea label="is KYC Verified" />
                      <Select
                        className="bg-white"
                        name="isKyc"
                        {...register(`isKyc`, {
                          required: `User Type is required!`,
                        })}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </Select>
                      <Error errorName={errors.aadharNumber} />
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
