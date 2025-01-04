import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const [blogs,setBlogs] = useState([])
    const fetchBlogs = async () =>{
        const response = await axios.get('https://mern3-node-project1.onrender.com/blog')
        setBlogs(response.data.data)
    } 
    console.log(blogs)
    useEffect(()=>{
        fetchBlogs()
    },[])
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {
          blogs.map((blog)=>{
            return (
              <Card key={blog._id} blog={blog} />
            )
          })
        } 
      </div>
    </>
  );
};

export default HomePage;
