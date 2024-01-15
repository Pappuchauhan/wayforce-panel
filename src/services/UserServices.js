import requests from "./httpService";

const UserServices = {

  addUser: async (body) => {
    return requests.post("/user/register", body);
  },
  getAllUser: async (body) => {
    return requests.get("/user", body);
  },
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
