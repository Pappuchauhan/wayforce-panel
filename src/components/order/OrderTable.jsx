import { TableBody, TableCell, TableRow } from "@windmill/react-ui";

import { useTranslation } from "react-i18next";
import { FiZoomIn, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

//internal import

import Status from "@/components/table/Status";
import Tooltip from "@/components/tooltip/Tooltip";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import PrintReceipt from "@/components/form/others/PrintReceipt";
import SelectStatus from "@/components/form/selectOption/SelectStatus";

const OrderTable = ({ orders }) => {
  // console.log('globalSetting',globalSetting)
  const { t } = useTranslation();
  const { showDateTimeFormat, currency, getNumberTwo } = useUtilsFunction();

  // console.log('orders',orders)

  return (
    <>
      <TableBody className="dark:bg-gray-900">
        {orders?.map((order, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {order?.orderId}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
              {order?.workingHours}
              </span>
            </TableCell>

            <TableCell className="text-xs">
              <span className="text-sm">{currency}
                {getNumberTwo(order?.bookedPayment)}</span>{" "}
            </TableCell>

            <TableCell> 
                <Status status={order?.paymentStatus} />             
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
              { order?.date //showDateTimeFormat(order?.date)
            }
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
              {order?.startTime}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
              {order?.endTime}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
              {order?.category}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
              {order?.manpowerName}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
              {order?.employerName}
              </span>
            </TableCell> 

            <TableCell className="text-xs">
              <Status status={order?.orderStatus} />
            </TableCell>

            

            <TableCell className="text-right flex justify-end">
              <div className="flex justify-between items-center">
                { /*<PrintReceipt orderId={order._id} />*/
}

                <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                  
                  <Link to={`/order/details/${order._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiZoomIn}
                      title={t("ViewInvoice")}
                      bgColor="#059669"
                    />
                  </Link>
                  </span>
                  <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                  <Link to={`/order/${order._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiDownload}
                      title={t("ViewInvoice")}
                      bgColor="#059669"
                    />
                  </Link>
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
