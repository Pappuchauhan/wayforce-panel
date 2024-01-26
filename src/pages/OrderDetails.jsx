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
import OrderServices from "@/services/OrderServices";
import Invoice from "@/components/invoice/Invoice";
import Loading from "@/components/preloader/Loading";
import logoDark from "@/assets/img/logo/logo-dark.svg";
import logoLight from "@/assets/img/logo/logo-color.svg";
import PageTitle from "@/components/Typography/PageTitle";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import InvoiceForDownload from "@/components/invoice/InvoiceForDownload";

const OrderDetails = () => {

    const { t } = useTranslation();
    const { mode } = useContext(WindmillContext);
    const { id } = useParams();
    const printRef = useRef();
  
    const { data:order, loading, error } = useAsync(() =>
      OrderServices.getOrderById(id)
    );
  
    const {
      currency,
      globalSetting,
      showDateTimeFormat,
      showDateFormat,
      getNumberTwo,
    } = useUtilsFunction(); 
  return (
    <>
    <PageTitle> Order Details </PageTitle>

    <div 
      className="bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden"
    >
     {!loading && (  
        <div className="">
          <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300">
            <h1 className="font-bold font-serif text-xl uppercase">
              {"General Information"}              
            </h1>             
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                {t("Order ID")}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.orderId}
              </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                 Order Status
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                <Status status={order.orderStatus} />                
              </span>
            </div> 

            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
              Category
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.category}
              </span>
            </div>
            
            <div className="flex flex-col lg:text-right text-left">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                 Payment Status
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.paymentStatus}
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
                {"Date"}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.date}
              </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                Start Time
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
              {order.startTime}
              </span>
            </div>

            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                End Time
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
              {order.endTime}
              </span>
            </div>

            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                Working Hours
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
              {order.workingHours}
              </span>
            </div>

            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
              Booked Payment
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
              {order.bookedPayment}
              </span>
            </div>
            
            <div className="flex flex-col lg:text-right text-left">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
              Total Payment
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.totalPayment}
              </span>
            </div>
          </div>


          <div className="mt-6 flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300">
            <h1 className="font-bold font-serif text-xl uppercase">
              {"Location Information"}              
            </h1>             
          </div>
          
          <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                {"Site Location"}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.siteLocation}
              </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
              Employer
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
              {order.employerName}
              </span>
            </div> 
            
            <div className="flex flex-col lg:text-right text-left">
              <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
              Manpower
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.manpowerName}
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
                {"Work Explain"}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {order.explainYourWork}
              </span>
            </div> 
          </div>

        </div>
     )}
        
 
    </div>
    
  </>
  );
};

export default OrderDetails;
