import requests from "./httpService";

const UserServices = {

  addUser: async (body) => {
    return requests.post("/user/register", body);
  },
  getAllUser: async (body) => {
    return requests.get("/category", body);
  },
  getUserById: async (id) => {
    return requests.get(`/category/get/${id}`);
  },

  updateUser: async (id, body) => {
    return requests.put(`/category/update/${id}`, body);
  }, 

  deleteUser: async (id) => {
    return requests.delete(`/category/delete/${id}`);
  },
};

export default UserServices;
