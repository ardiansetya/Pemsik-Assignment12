import { useEffect, useState } from "react";
import  axiosInstance  from "../axios/axiosInstance";

export const useFetchData = () => {
  const [datas, setDatas] = useState([]);

  const fetchDataMahasiswa = async () => {
    try {
      const response = await axiosInstance.get('/api/mahasiswa');
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataMahasiswa();
  }, []); 

  return { mahasiswa: datas, setMahasiswa: setDatas };
};

export const UsePostMhs = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axiosInstance.post("/api/mahasiswa", body);
      setDatas(response.data);
      return response.data; 
    } catch (error) {
      setError(error.response?.data?.message || "Terjadi kesalahan saat menambahkan data");
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  return { newMhs: datas, postData, loading, error };
};
