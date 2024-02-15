import axios from "axios";
async function sendSMS(numbers, message, templateId) {
    const apiUrl = `${import.meta.env.VITE_EDUMARC_SMS_URL}`;
    const senderId = `${import.meta.env.VITE_EDUMARC_SENDER_ID}`;  
    const requestData = {
      number: Array.isArray(numbers) ? numbers : [numbers],
      message,
      senderId,
      templateId,
    };
  
    const headers = {
      "Content-Type": "application/json",
      apikey: `${import.meta.env.VITE_EDUMARC_OTP_API_KEY}`,
    };
  
    try {
      const response = await axios.post(apiUrl, requestData, { headers });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  export { sendSMS };