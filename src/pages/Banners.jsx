import {
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "@windmill/react-ui";
import { useContext, useState } from "react";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
import { useTranslation } from "react-i18next";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import BannerServices from "@/services/BannerServices";
import useAsync from "@/hooks/useAsync";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import useFilter from "@/hooks/useFilter";
import PageTitle from "@/components/Typography/PageTitle";
import DeleteModal from "@/components/modal/DeleteModal";
import BulkActionDrawer from "@/components/drawer/BulkActionDrawer";
import MainDrawer from "@/components/drawer/MainDrawer";
import BannerDrawer from "@/components/drawer/BannerDrawer";
import TableLoading from "@/components/preloader/TableLoading";
import CheckBox from "@/components/form/others/CheckBox";
import BannerTable from "@/components/banner/BannerTable";
import NotFound from "@/components/table/NotFound"; 

const Banners = () => {
  const { t } = useTranslation();
  const { toggleDrawer, lang } = useContext(SidebarContext);
  const { data, loading, error } = useAsync(BannerServices.getAllBanners);
  // console.log('data',data)
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const { allId, serviceId, handleDeleteMany, handleUpdateMany } =
    useToggleDrawer();

  const {
    filename,
    isDisabled,
    couponRef,
    dataTable,
    serviceData,
    totalResults,
    resultsPerPage,
    handleChangePage,
    handleSelectFile,
    setSearchCoupon,
    handleSubmitCoupon,
    handleUploadMultiple,
    handleRemoveSelectFile,
  } = useFilter(data);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.map((li) => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  // handle reset field function
  const handleResetField = () => {
    setSearchCoupon("");
    couponRef.current.value = "";
  };

  return (
    <>
      <PageTitle>{"Banner"}</PageTitle>
      <DeleteModal
        ids={allId}
        setIsCheck={setIsCheck}
        title="Selected Banner"
      />
     

      <MainDrawer>
        <BannerDrawer id={serviceId} />
      </MainDrawer>

         
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitCoupon}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={couponRef}
                type="search"
                placeholder={"Search Banner"}
              />
            </div>
            <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <div className="w-full mx-1">
                <Button type="submit" className="h-12 w-full bg-emerald-700">
                  Filter
                </Button>
              </div>

              <div className="w-full mx-1">
                <Button
                  layout="outline"
                  onClick={handleResetField}
                  type="reset"
                  className="px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700"
                >
                  <span className="text-black dark:text-gray-200">Reset</span>
                </Button>
              </div>
            
              <div className="w-full mx-1">
                <Button
                  onClick={toggleDrawer}
                  className="w-full rounded-md h-12"
                >
                  <span className="mr-2">
                    <FiPlus />
                  </span>
                  {"Add Banner"}
                </Button>
              </div>

            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        // <Loading loading={loading} />
        <TableLoading row={12} col={8} width={140} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr> 
              <TableCell>{"Image"}</TableCell>
                <TableCell>{"Title"}</TableCell>
                <TableCell>{"Other"}</TableCell>  
                <TableCell>{"Status"}</TableCell>
                <TableCell>{"Created"}</TableCell>
                <TableCell>{"Updated"}</TableCell>
                <TableCell className="text-right">
                  {t("CoupTblActions")}
                </TableCell>
              </tr>
            </TableHeader>
            <BannerTable
              lang={lang}
              isCheck={isCheck}
              coupons={dataTable}
              setIsCheck={setIsCheck}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no banners right now." />
      )}
    </>
  );
};

export default Banners;
