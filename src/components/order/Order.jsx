import React from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";
import { FiZoomIn, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import Tooltip from "@/components/tooltip/Tooltip";
const Order = ({ data, currency }) => {
  return (
    <>
      <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ">
        {data?.map((item, i) => (
          <TableRow key={i} className="dark:border-gray-700 dark:text-gray-400">
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
              {i + 1}.{" "}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
              {item.orderId}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
              {item.bookedPayment}{" "}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
            {item.workingHours}
            </TableCell>

            <TableCell className="px-6 py-1 whitespace-nowrap text-right font-bold   dark:text-green-500">
            {item.orderStatus}
            </TableCell>

            <TableCell className="px-6 py-1 whitespace-nowrap text-right font-bold dark:text-green-500">
            {item.paymentStatus}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap text-right font-bold dark:text-green-500">
            <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                  <Link to={`/order/details/${item._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiZoomIn}
                      title={"View Order"}
                      bgColor="#059669"
                    />
                  </Link>
                </span>
          </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Order;
