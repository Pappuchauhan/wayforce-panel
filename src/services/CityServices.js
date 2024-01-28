import requests from "./httpService";

const CityServices = {
  getCityByStateName: async (stateName) => {
    return requests.get(`/city/get/getCitiesByStateName/${stateName}`);
  },
  getAllCategory: async () => {
    return requests.get("/category");
  },

  getAllCategories: async () => {
    return requests.get("/category/all");
  },

 

  addCategory: async (body) => {
    return requests.post("/category/add", body);
  },

  addAllCategory: async (body) => {
    return requests.post("/category/add/all", body);
  },

  updateCategory: async (id, body) => {
    return requests.put(`/category/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/category/status/${id}`, body);
  },

  deleteCategory: async (id, body) => {
    return requests.delete(`/category/${id}`, body);
  },

  updateManyCategory: async (body) => {
    return requests.patch("/category/update/many", body);
  },

  deleteManyCategory: async (body) => {
    return requests.patch("/category/delete/many", body);
  },
};

export default CityServices;
