import { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

const HomePage = () => {
    const fetchBlogs = async () =>{
        const response = await axios.get('http://localhost:3000/blog')
    } 

    useEffect(()=>{
        fetchBlogs()
    },[])
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default HomePage;
