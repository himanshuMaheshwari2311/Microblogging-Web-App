import { Blog } from '../model/Blog';
import axios from 'axios';
import { baseUrl } from '../constant/url.const';

const searchBlog = (searchString: string) => {
    return axios.get<Blog[]>(`${baseUrl}/search-blogs/${searchString}`);
}

export default searchBlog;