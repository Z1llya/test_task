import {axiosServices} from "./axios.services";
import {urls} from "../url/urls";

const services = {
    getCategories:()=> axiosServices.get(urls.categories,{
        headers:{
            "Accept-Language": "en",

        }
    }),
    getTeachers:(data)=> axiosServices.post(urls.teacher,data,{
        headers:{
            "Content-Type": "application/json",
            "Accept-Language": "en"
        }
    }),
    postAVG:(data)=> axiosServices.post('http://test.teaching-me.org/categories/v1/open/average-price',data,{
        headers:{
            "Content-Type": "application/json",
        }
    })
}

export {services}