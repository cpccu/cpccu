import axios from "axios";
import { handleError } from "./handleError.util.js";

// GET request
const apiGet = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

// POST request
const apiPost = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

// PATCH request
const apiPatch = async (url, data) => {
  try {
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

// DELETE request
const apiDelete = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

const apiGetCancel = async (url, cancelToken) => {
  try {
    const response = await axios.get(url, { cancelToken });
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export { apiGet, apiPost, apiPatch, apiDelete, apiGetCancel };
