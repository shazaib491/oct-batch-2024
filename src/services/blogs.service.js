import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const getAllBlogs=async()=>{
    try {
        const allBlogs=await axios.get("/blogs");
        return allBlogs.data;
    } catch (error) {
        console.log(error);
    }
}

export {getAllBlogs};