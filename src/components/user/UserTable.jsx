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
import useUserSubmit from "@/hooks/useUserSubmit";
const UserTable = ({ users, lang }) => {
  const {
    title,
    serviceId,
    handleModalOpen,
    handleUpdate,
    isSubmitting,
    handleResetPassword,
  } = useToggleDrawer(); 

  const {
    formattedDate
  } = useUserSubmit();

  return (
    <>
      <DeleteModal id={serviceId} title={title} />

      <MainDrawer>
        <UserDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {users?.map((user) => (
          <TableRow key={user._id}>
            
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden mr-3 md:block bg-gray-50"
                  src={user?.profileImage}
                  alt="user"
                />
                <div>
                  <h2 className="text-sm font-medium">
                    {user?.name}
                  </h2>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">{user.gender}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm ">{user.mobile}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{user.email}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{user.category}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{user.userType}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{formattedDate(user.dob)}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{user.age}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{user.wallet}</span>
            </TableCell>
  
            <TableCell className="text-center text-xs">
              <Status status={user.status} />
            </TableCell>

            <TableCell className="text-center">
              <ActiveInActiveButton
                id={user?._id}
                staff={user}
                option="user"
                status={user.status}
              />
            </TableCell>
 

            <TableCell>
              <EditDeleteButton
                id={user._id}
                user={user}
                isSubmitting={isSubmitting}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen} 
                title={user?.name}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default UserTable;
