import requests from "./httpService";

const MyCategoryServices = {

  addCategory: async (body) => {
    return requests.post("/category/create", body);
  },
  getAllCategory: async (body) => {
    return requests.get("/category", body);
  },
  getCategoryById: async (id) => {
    return requests.get(`/category/get/${id}`);
  },

  updateCategory: async (id, body) => {
    return requests.put(`/category/update/${id}`, body);
  },
 

  deleteCategory: async (id) => {
    return requests.delete(`/category/delete/${id}`);
  },
};

export default MyCategoryServices;
