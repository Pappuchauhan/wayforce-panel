import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React from "react";

//internal import

import Status from "@/components/table/Status";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import MainDrawer from "@/components/drawer/MainDrawer";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import ReviewDrawer from "@/components/drawer/ReviewDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import ActiveInActiveButton from "@/components/table/ActiveInActiveButton";

const ReviewTable = ({ reviews, lang }) => {
  const {
    title,
    serviceId,
    handleModalOpen,
    handleUpdate,
    isSubmitting,
    handleResetPassword,
  } = useToggleDrawer(); 

  return (
    <>
      <DeleteModal id={serviceId} title={title} />

      <MainDrawer>
        <ReviewDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {reviews?.map((review) => (
          <TableRow key={review._id}>  
            <TableCell>
              <span className="text-sm">{review?.givenTo?.name}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm ">{review?.givenBy?.name}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{review?.rating}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{review?.comments.slice(0, 15)}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{new Date(review?.createdAt).toLocaleString()}</span>
            </TableCell> 
            <TableCell className="text-center text-xs">
              <Status status={review?.status} />
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={review._id}
                review={review}
                isSubmitting={isSubmitting}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen} 
                title={review?.name}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ReviewTable;
