import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React from "react";
import { FiZoomIn, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
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
import Tooltip from "@/components/tooltip/Tooltip";
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
              {user?.profileImage ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={user?.profileImage}
                    alt="product"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="product"
                  />
                )} 
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
              <span className="text-sm ">{user?.category?.name}</span>
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
            <div className="flex justify-between items-center">
              <EditDeleteButton
                id={user._id}
                user={user}
                isSubmitting={isSubmitting}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen} 
                title={user?.name}
              />
              <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                  <Link to={`/user/details/${user._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiZoomIn}
                      title={"View User"}
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

export default UserTable;
