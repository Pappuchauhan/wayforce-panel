import requests from './httpService';

const BannerServices = {
  addBanner: async (body) => {
    return requests.post('/banner', body);
  },   
  getAllBanners: async () => {
    return requests.get('/banner');
  },
  getBannerById: async (id) => {
    return requests.get(`/banner/${id}`);
  },
  updateBanner: async (id, body) => {
    return requests.put(`/banner/${id}`, body);
  },   
  deleteBanner: async (id) => {
    return requests.delete(`/banner/${id}`);
  },
   
};

export default BannerServices;
