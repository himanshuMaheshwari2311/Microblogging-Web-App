import { Blog } from '../model/Blog';
import axios from 'axios';
import { baseUrl } from '../constant/url.const';

const getBlogsByCategory = (category: string) => {
    return axios.get<Blog[]>(`${baseUrl}/get-blogs/${category}`);
}

export default getBlogsByCategory;