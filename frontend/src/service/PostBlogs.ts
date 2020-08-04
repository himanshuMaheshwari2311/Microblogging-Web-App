import { Blog } from '../model/Blog';
import axios from 'axios';
import { baseUrl } from '../constant/url.const';

const postBlog = (blog: Blog) => {
    return axios.post<Blog>(`${baseUrl}/post-blog/`, blog);
}

export default postBlog;