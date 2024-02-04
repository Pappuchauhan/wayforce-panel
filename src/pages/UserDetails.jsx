import dayjs from "dayjs";
import { useParams } from "react-router";
import ReactToPrint from "react-to-print";
import React, { useContext, useRef } from "react";
import { FiPrinter } from "react-icons/fi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import {
  TableCell,
  TableHeader,
  Table,
  TableContainer,
  WindmillContext,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { PDFDownloadLink } from "@react-pdf/renderer";

//internal import
import useAsync from "@/hooks/useAsync";
import Status from "@/components/table/Status";
import UserServices from "@/services/UserServices";
import OrderServices from "@/services/OrderServices"; 
import Loading from "@/components/preloader/Loading";
import logoDark from "@/assets/img/logo/logo-dark.svg";
import logoLight from "@/assets/img/logo/logo-color.svg";
import PageTitle from "@/components/Typography/PageTitle";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import InvoiceForDownload from "@/components/invoice/InvoiceForDownload";
import Order from "@/components/order/Order";
import useUserSubmit from "@/hooks/useUserSubmit";

const UserDetails = () => {

    const { t } = useTranslation();
    const { mode } = useContext(WindmillContext);
    const { id } = useParams();
    const printRef = useRef();
  console.log(id)
    const { data:user, loading, error } = useAsync(() =>
    UserServices.getUserById(id)
    ); 

    const { data:order, cstLoading, cstError } = useAsync(() =>
    OrderServices.getOrderCustomer(id)
    );
    
    const {
      currency,
      globalSetting,
      showDateTimeFormat,
      showDateFormat,
      getNumberTwo,
    } = useUtilsFunction(); 
    const {
      formattedDate
    } = useUserSubmit();
  return (
    <>
      <PageTitle> User Details </PageTitle>

      <div className="bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden">
        {!loading && (
          <div className="">
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300">
              <h1 className="font-bold font-serif text-xl uppercase">
                {"General Information"} {" "}
                <span className="font-normal font-serif text-xl lowercase text-green-500">{user?.data?.userType}</span>
              </h1>             
            </div>

            <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Name
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.name}
                </span>
              </div>
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Email
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.email}
                </span>
              </div>

              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Phone
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.mobile}
                </span>
              </div>

              <div className="flex flex-col lg:text-right text-left">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Wallet
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.wallet}
                </span>
              </div>

              <div className="flex flex-col lg:text-right text-left">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Status
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  <Status status={user.data.status} />
                </span>
              </div>
            </div>

            <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Age
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.age}
                </span>
              </div>
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Gender
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.gender}
                </span>
              </div>

              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  DOB
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {formattedDate(user.data.dob)}
                </span>
              </div>

              <div className="flex flex-col lg:text-right text-left">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Pan Card Number
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.panCardNumber}
                </span>
              </div>

              <div className="flex flex-col lg:text-right text-left">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Aadhar Number
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.aadharNumber}
                </span>
              </div>
            </div>

            <div className="mt-6 flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300">
              <h1 className="font-bold font-serif text-xl uppercase">
                {"Work Details"}
              </h1>
            </div>

            <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  {"Experience"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.experience}
                </span>
              </div>
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Address
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user?.address?.addressLine1}
                  <br></br>
                  {user?.address?.addressLine2}
                  <br></br>
                  {user?.address?.block}
                  <br></br>
                  {user?.address?.pinCode}
                  <br></br>
                  {user?.address?.state}
                  <br></br>
                  {user?.address?.city}
                  <br></br>
                  {user?.address?.country}
                  <br></br>
                </span>
              </div>

              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Min Salary
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.minSalary}
                </span>
              </div>

              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Max Salary
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.maxSalary}
                </span>
              </div>

              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  Job Type
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.jobType}
                </span>
              </div>
 
            </div>

            <div className="mt-6 flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300">
              <h1 className="font-bold font-serif text-xl uppercase">
                {"Other"}
              </h1>
            </div>

            <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  {"Bio"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                  {user.data.bio}
                </span>
              </div>

              <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                  {"Speaking Language"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {user.data.speakingLanguage.join(", ")}                  
                </span>
              </div>
            </div>

            <div>
            <div className="mt-6 flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 dark:text-gray-300">
              <h1 className="font-bold font-serif text-xl uppercase">
                Order List
              </h1>
            </div>

          {cstLoading ? (
            <Loading loading={cstLoading} />
          ) : error ? (
            <span className="text-center mx-auto text-red-500">{error}</span>
          ) : (
            <TableContainer className="my-8 overflow-y-scroll" style={{"max-height":'400px'}}>
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>{t("Sr")}</TableCell>
                    <TableCell>OrderId</TableCell>
                    <TableCell>Total Payment</TableCell>
                    <TableCell>Working Hours</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Payment Status</TableCell>
                    <TableCell>#</TableCell>
                  </tr>
                </TableHeader>
                <Order
                  data={order}
                  currency={currency}
                  globalSetting={globalSetting}
                />
              </Table>
            </TableContainer>
          )}
        </div>


          </div>
        )}
      </div>
    </>
  );
};

export default UserDetails;
