import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/dash_api",
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  getLineChartData = <K>(params: K) => {
    return axiosInstance
      .get<T[]>(this.endpoint, { params })
      .then((res) => res.data);
  };
}

export default APIClient;
