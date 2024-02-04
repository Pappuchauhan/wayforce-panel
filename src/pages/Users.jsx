import {
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  Label
} from "@windmill/react-ui";
import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";

//internal import

import useAsync from "@/hooks/useAsync";
import useFilter from "@/hooks/useFilter";
import MainDrawer from "@/components/drawer/MainDrawer";
import MyCategoryDrawer from "@/components/drawer/MyCategoryDrawer";
import TableLoading from "@/components/preloader/TableLoading";
import UserTable from "@/components/user/UserTable";
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import { AdminContext } from "@/context/AdminContext";
import { SidebarContext } from "@/context/SidebarContext";
import UserServices from "@/services/UserServices";
import CategoryServices from "@/services/CategoryServices";
import StateServices from "@/services/StateServices";
import CityServices from "@/services/CityServices";

const user = () => {
  //const { state } = useContext(AdminContext);
 // const { adminInfo } = state;
  const { toggleDrawer, lang, filter, setFilter } = useContext(SidebarContext);
  const [userType, setUserType] = useState('');
  const [statusBy, setStatusBy] = useState('');
  const [categoryBy, setCategoryBy] = useState('');
  const [stateBy, setStateBy] = useState('');
  const [cityBy, setCityBy] = useState('');
  const [pincodeBy, setPincodeBy] = useState('');
  const [searchBy, setSearchBy] = useState('');  

  const [selectedState, setSelectedState] = useState("Goa");
  const [cities, setCities] = useState(null);
  const [cityLoading, setCityLoading] = useState(false);
  const [cityError, setCityError] = useState(null);

  const {
    data: categories,
    loading: catLoading,
    error: catError,
  } = useAsync(() => CategoryServices.getAllCategory()); 

  const {
    data: states,
    loading: stateLoading,
    error: stateError,
  } = useAsync(() => StateServices.getAllState()); 

  useEffect(() => {
    
    CityServices.getCityByStateName(selectedState?.trim())
      .then((result) => {
        // Reset the state variables and update with the new data
        setCities(result);
        setCityLoading(false);
        setCityError(null);
      })
      .catch((error) => {
        console.error('Error loading cities:', error);
        // Handle the error by updating the state variables
        setCities(null);
        setCityLoading(false);
        setCityError(error);
      });
  }, [selectedState]);  

  //filter
  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    setFilter(getRandomNumber(1, 101))    
  };

const { data, loading, error } = useAsync(() =>
  UserServices.getAllUser({ userType, statusBy, categoryBy, stateBy, cityBy, pincodeBy, searchBy })
);
   

  const {
    userRef, 
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleChangePage, 
  } = useFilter(data);

  const { t } = useTranslation();

  // handle reset filed
  const handleResetField = () => {
    setUserType(" "); 
    setStatusBy(" "); 
    setCategoryBy(" "); 
    setStateBy(" "); 
    setCityBy(" "); 
    setPincodeBy(" "); 
    setSearchBy(" ");

    setFilter(getRandomNumber(1, 101));
     
  };
 

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const handleStateChange = (stateName) => {     
    setSelectedState(stateName);
    setStateBy("stateName")
  };

  return (
    <>
      <PageTitle>User</PageTitle>
      <MainDrawer>
        <MyCategoryDrawer />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form method="post" onSubmit={handleFilterSubmit}>
         <div className="grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2">
              <div>
                <Label>User Type</Label>
                <Select onChange={(event) => setUserType(event.target.value)}>
                  <option value=""  hidden>
                    {"select user type"}
                  </option>
                  <option value="Employer">Employer</option>
                  <option value="Manpower">Manpower</option>
                  <option value="Agent">Agent</option>
                </Select>
              </div>

              <div>
                <Label>Status</Label>
                <div>
                <Select onChange={(event) => setStatusBy(event.target.value)}>
                  <option value=""  hidden>
                    {"select status"}
                  </option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option> 
                </Select>
                </div>
              </div>

              <div>
                <Label>Category</Label>
                <div>
                <Select onChange={(event) => setCategoryBy(event.target.value)}>
                <option value=""  hidden>
                    {"select category"}
                  </option>
                {!catLoading &&
                          Array.isArray(categories?.data) &&
                          categories?.data?.map((category, index) => (
                            <option
                              key={category._id}
                              value={category._id}                               
                            >
                              {category.name}
                            </option>
                          ))}
                        {catLoading && (
                          <option value="Loading...">Loading...</option>
                        )}
                        {catError && (
                          <option value="Error loading categories">
                            Error loading categories
                          </option>
                        )}
                </Select>
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2">
              <div>
                <Label>State</Label>
                <Select onChange={(e) => handleStateChange(e.target.value)}>
                  <option value=""  hidden>
                    {"select state"}
                  </option>
                  {!stateLoading &&
                          Array.isArray(states?.data) &&
                          states?.data?.map((state, index) => (
                            <option
                              key={state._id}
                              value={state.state}                              
                            >
                              {state.state}
                            </option>
                          ))}
                        {stateLoading && (
                          <option value="Loading...">Loading...</option>
                        )}
                        {stateError && (
                          <option value="Error loading categories">
                            Error loading categories
                          </option>
                        )}
                </Select>
              </div>

              <div>
                <Label>City</Label>
                <div>
                <Select onChange={(e) => setCityBy(e.target.value)}>
                  <option value=""  hidden>
                    {"select city"}
                  </option>
                  {!cityLoading &&
                          Array.isArray(cities?.data) &&
                          cities?.data?.map((city, index) => (
                            <option
                              key={city._id}
                              value={city.selectcity}
                              
                            >
                              {city.selectcity}
                            </option>
                          ))}
                        {cityLoading && (
                          <option value="Loading...">Loading...</option>
                        )}
                        {cityError && (
                          <option value="Error loading cities">
                            Error loading cities
                          </option>
                        )}
                </Select>
                </div>
              </div>

              <div>
                <Label>Enter Pin Code</Label>
                <div>
                  <Input
                    onChange={(e) => setPincodeBy(e.target.value)}
                    
                    type="text"
                    name="city"
                    placeholder="Search by City Name"
                  />
                </div>
              </div>
            </div>
            <div className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Input 
                  type="search"
                  name="search"
                  onChange={(event) => setSearchBy(event.target.value)}
                  placeholder={"Search by name/ email/ phone"}
                />
              </div> 

              <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <div className="w-full mx-1">
                  <Button type="submit" className="h-12 w-full bg-emerald-700">
                    Filter
                  </Button>
                </div>

                <div className="w-full">
                  <Button
                    layout="outline"
                    onClick={handleResetField}
                    type="reset"
                    className="px-4 md:py-1 py-3 text-sm dark:bg-gray-700"
                  >
                    <span className="text-black dark:text-gray-200">Reset</span>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-56 lg:w-56 xl:w-56">
                <Button
                  onClick={toggleDrawer}
                  className="w-full rounded-md h-12"
                >
                  <span className="mr-3">
                    <FiPlus />
                  </span>
                  Add User
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        // <Loading loading={loading} />
        <TableLoading row={12} col={7} width={163} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>User Type</TableCell>
                <TableCell>DOB</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Wallet</TableCell>
                <TableCell>Published</TableCell>
                <TableCell className="text-center">Status</TableCell>

                <TableCell className="text-right">
                  {t("StaffActionsTbl")}
                </TableCell>
              </tr>
            </TableHeader>

            <UserTable users={dataTable} lang={lang} />
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
        <NotFound title="Sorry, There are no user right now." />
      )}
    </>
  );
};

export default user;
