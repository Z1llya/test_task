import axios from "axios";
import {baseURL} from "../url/urls";

const axiosServices = axios.create({baseURL});

export {axiosServices}