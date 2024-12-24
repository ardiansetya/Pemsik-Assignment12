import { useEffect, useState } from "react";
import  axiosInstance  from "../axios/axiosInstance";

export const UseFetchData = () => {
  const [datas, setDatas] = useState([])

  const fetchDataMahasiswa = async () => {
    try {
      const response = await axiosInstance.get('/api/mahasiswa')
      setDatas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataMahasiswa()
  },[])

  return {mahasiswa:datas}
};

export const UsePostData = (body) => {
  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    try {
      const response = await axiosInstance.post('/api/mahasiswa', body)
      setDatas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return {posts:datas}
}
