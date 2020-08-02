import { Blog } from '../model/Blog';
import axios from 'axios';

const postBlog = (blog: Blog) => {
    axios.post<Blog>("http://localhost:8000/v1/post-blog/", blog).then(blogs => {
        console.log(blogs.data);
    });
}

export default postBlog;