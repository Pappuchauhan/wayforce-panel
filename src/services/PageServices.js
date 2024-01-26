import requests from "./httpService";

const PageService = {

  addPage: async (body) => {
    return requests.post("/page", body);
  },
  getAllPage: async (body) => {
    return requests.get("/page", body);
  },
  getPageById: async (id) => {
    return requests.get(`/page/${id}`);
  },

  updatePage: async (id, body) => {
    return requests.put(`/page/${id}`, body);
  },
 

  deletePage: async (id) => {
    return requests.delete(`/page/${id}`);
  },
};

export default PageService;
