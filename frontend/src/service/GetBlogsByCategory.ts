import { Blog } from '../model/Blog';
import axios from 'axios';

const getBlogsByCategory = (category: string) => {
    axios.get<Blog[]>("http://localhost:8000/v1/get-blogs/" + category).then(blogs => {
        console.log(blogs.data);
    });
}

export default getBlogsByCategory;