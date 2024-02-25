import {
  Avatar,
  Badge,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

//internal import
import useUtilsFunction from "@/hooks/useUtilsFunction";
import CheckBox from "@/components/form/others/CheckBox";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import MainDrawer from "@/components/drawer/MainDrawer";
import BannerDrawer from "@/components/drawer/BannerDrawer";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButton";

const CouponTable = ({ isCheck, coupons, setIsCheck }) => {
  const [updatedCoupons, setUpdatedCoupons] = useState([]);

  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const { currency, showDateFormat, globalSetting, showingTranslateValue } =
    useUtilsFunction();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const result = coupons?.map((el) => {
      const newDate = new Date(el?.updatedAt).toLocaleString("en-US", {
        timeZone: globalSetting?.default_time_zone,
      });
      const newObj = {
        ...el,
        updatedDate: newDate,
      };
      return newObj;
    });
    setUpdatedCoupons(result);
  }, [coupons, globalSetting?.default_time_zone]);

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck.length < 2 && (
        <MainDrawer>
          <BannerDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {updatedCoupons?.map((coupon, i) => (
          <TableRow key={i + 1}>
            
            <TableCell>
              <div className="flex items-center">
                {coupon?.image ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={coupon?.image}
                    alt="product"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="product"
                  />
                )}
                 
              </div>
            </TableCell>

            <TableCell> 
              <span className="text-sm"> {coupon?.title}</span>
            </TableCell>
            <TableCell> 
              <span className="text-sm"> {coupon?.other}</span>
            </TableCell>  
            <TableCell className="text-center">
              <ShowHideButton id={coupon._id} status={coupon.status=="Active"?"show":"hide"} />
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {/* {dayjs(coupon.startTime).format("MMM D, YYYY")} */}
                {showDateFormat(coupon.createdAt)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {/* {dayjs(coupon.endTime).format("MMM D, YYYY")} */}
                {showDateFormat(coupon.updatedAt)}
              </span>
            </TableCell>
 

            <TableCell>
              <EditDeleteButton
                id={coupon?._id}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(coupon?.title)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CouponTable;
