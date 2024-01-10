import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React from "react";

//internal import

import Status from "@/components/table/Status";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import MainDrawer from "@/components/drawer/MainDrawer";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import UserDrawer from "@/components/drawer/UserDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import ActiveInActiveButton from "@/components/table/ActiveInActiveButton";

const MyCategoryTable = ({ staffs, lang }) => {
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
        <UserDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {staffs?.map((staff) => (
          <TableRow key={staff._id}>
            

            <TableCell>
              <span className="text-sm">{staff.name}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff.price}</span>
            </TableCell>
  
            <TableCell className="text-center text-xs">
              <Status status={staff.status} />
            </TableCell>
 

            <TableCell>
              <EditDeleteButton
                id={staff._id}
                staff={staff}
                isSubmitting={isSubmitting}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen} 
                title={staff?.name}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default MyCategoryTable;
