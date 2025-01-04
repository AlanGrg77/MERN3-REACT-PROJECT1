import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const fecthSingleBlog = async () => {
    const response = await axios.get(`http://localhost:3000/blog/${id}`);
    setBlog(response.data.data);
    console.log(response);
  };
  useEffect(() => {
    fecthSingleBlog();
  }, []);
  const deleteSingleBlog =async () =>{
    const response = await axios.delete(`http://localhost:3000/blog/${id}`)
    if(response.status == 200){
        alert('Blog deleted successfully')
        navigate('/')
    }else{
        alert('something went wrong')
    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
          <div className="relative">
            <img
              className="w-full"
              src={`http://localhost:3000/${blog.image}`}
              alt="Product Image"
            />
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">$19.99</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-[120px]">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-[120px]" onClick={deleteSingleBlog}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
