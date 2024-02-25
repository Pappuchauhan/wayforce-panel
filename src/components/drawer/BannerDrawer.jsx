import { Input } from "@windmill/react-ui";
import { t } from "i18next";
import { Scrollbars } from "react-custom-scrollbars-2";

//internal import
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import InputArea from "@/components/form/input/InputArea";
import InputValue from "@/components/form/input/InputValue";
import LabelArea from "@/components/form/selectOption/LabelArea";
import Uploader from "@/components/image-uploader/Uploader";
import useBannerSubmit from "@/hooks/useBannerSubmit";
import DrawerButton from "@/components/form/button/DrawerButton";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import SwitchToggleFour from "@/components/form/switch/SwitchToggleFour";
import ImageUpload from "../common/ImageUpload";

const BannerDrawer = ({ id }) => {
  const {
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
    setDiscountType,
    isSubmitting,
    bannerImage, 
    setBannerImage,
    handleSelectLanguage,
    getValues
  } = useBannerSubmit(id);

  return (
    <>
      <div className="w-full relative  p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ">
        {id ? (
          <Title
            register={register}
            title={"Update Banner"}
            description={"Update your banner and necessary information from here"}
          />
        ) : (
          <Title
            register={register}
            title={"Add Banner"}
            description={"Add your banner and necessary information from here"}
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Banner Image" />
              <div className="col-span-8 sm:col-span-4">
                {/* First instance of ImageUpload */} 
                <ImageUpload
                  name="image"
                  onUpload={(file) => setBannerImage(file)}
                />

                {getValues("image") !== undefined &&
                  getValues("image") != "" && (
                    <img
                      src={getValues("image")}
                      alt="image"
                      style={{ height: `150px` }}
                    />
                  )}
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Title"} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Title"
                  name="title"
                  type="text"
                  placeholder={"Title"}
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Other"} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Other"
                  name="other"
                  type="text"
                  placeholder={"Other"}
                />
                <Error errorName={errors.other} />
              </div>
            </div>
   

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Status"} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setPublished}
                  processOption={published}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Banner" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default BannerDrawer;
