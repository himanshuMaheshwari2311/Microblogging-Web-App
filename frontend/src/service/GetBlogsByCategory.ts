import { Blog } from '../model/Blog';
import axios from 'axios';

const getBlogsByCategory = (category: string) => {
    return axios.get<Blog[]>("http://localhost:8000/v1/get-blogs/" + category);
}

export default getBlogsByCategory;