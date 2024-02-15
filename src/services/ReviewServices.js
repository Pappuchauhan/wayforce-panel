import requests from "./httpService"; 

const ReviewService = {
 
  getAllReview: async (body) => {
    return requests.get("/review", body);
  },
  getReviewById: async (id) => {
    return requests.get(`/review/${id}`);
  },
  updateReview: async (id, body) => {
    return requests.put(`/review/${id}`, body);
  },
  deleteReview: async (id) => {
    return requests.delete(`/review/${id}`);
  },
};

export default ReviewService;
