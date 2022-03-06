import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_BASE_URL,
  timeout: 15000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

instance.get("/products").then((res) => res.data);

class Request {
  async get(url: string): Promise<AxiosResponse> {
    return instance.get(url).then((res) => res.data);
  }
  async post(url: string, body: any): Promise<AxiosResponse> {
    return instance.post(url, body).then((res) => res.data);
  }
  async update(url: string, body: any): Promise<AxiosResponse> {
    return instance.post(url, body).then((res) => res.data);
  }
  async delete(url: string): Promise<AxiosResponse> {
    return instance.delete(url);
  }
}

const httpReq = new Request();

export default httpReq;
