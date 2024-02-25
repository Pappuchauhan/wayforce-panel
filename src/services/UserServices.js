import requests from "./httpService";

const UserServices = {

  addUser: async (body) => {
    return requests.post("/user/register", body);
  },
  getAllUser: async ({ body, userType, statusBy, categoryBy, stateBy, cityBy, pincodeBy, searchBy, gender, age }) => {
    let search = searchBy !== null && searchBy !== undefined ? searchBy : "";
    let userTypeR = userType !== null && userType !== undefined ? userType : "";
    let status = statusBy !== null && statusBy !== undefined ? statusBy : "";
    let category = categoryBy !== null && categoryBy !== undefined ? categoryBy : "";
    let state = stateBy !== null && stateBy !== undefined ? stateBy : "";
    let city = cityBy !== null && cityBy !== undefined ? cityBy : "";
    let pincode = pincodeBy !== null && pincodeBy !== undefined ? pincodeBy : "";
    let genderS = gender !== null && gender !== undefined ? gender : "";
    let ageS = age !== null && age !== undefined ? age : "";
    
    // Use encodeURIComponent to properly encode URL parameters
    /*
    search = encodeURIComponent(search); 
    userTypeR = encodeURIComponent(userTypeR); 
    status = encodeURIComponent(status); 
    category = encodeURIComponent(category); 
    state = encodeURIComponent(state); 
    city = encodeURIComponent(city); 
    pincode = encodeURIComponent(pincode); 
  */
    return requests.get(`/user?search=${search}&userType=${userTypeR}&status=${status}&category=${category}&state=${state}&city=${city}&pincode=${pincode}&gender=${genderS}&age=${ageS}`, body);
  },
  /*
  getAllUser: async ({body,search,userType}) => {
    const searchR = search !== null || search!==undefined  ? search : "";
    const userTypeR = userType !== null || userType!==undefined  ? userType : "";
    return requests.get(`/user?search=${searchR}&userType=${userTypeR}`, body);
  },
  */
  getUserById: async (id) => {
    return requests.get(`/user/${id}`);
  },

  updateUser: async (id, body) => {
    return requests.put(`/user/${id}`, body);
  }, 

  deleteUser: async (id) => {
    return requests.delete(`/user/${id}`);
  },
  updateUserStatus: async (id, body) => {
    return requests.put(`/user/update-status/${id}`, body);
  },
};

export default UserServices;
