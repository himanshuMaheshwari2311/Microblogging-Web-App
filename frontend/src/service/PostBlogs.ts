import { Blog } from '../model/Blog';
import axios from 'axios';

const postBlog = (blog: Blog) => {
    return axios.post<Blog>("http://localhost:8000/v1/post-blog/", blog);
}

export default postBlog;