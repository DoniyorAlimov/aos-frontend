import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/dash_api",
});

class APIClient<T, K> {
  constructor(private endpoint: string) {}

  getLineChartData = (params: K) => {
    return axiosInstance.get<T[]>(this.endpoint, {params}).then((res) => res.data);
  };
}

export default APIClient;
