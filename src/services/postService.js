import axios from 'axios'

class PostService{
    static getSingleProduct = () => axios.get('https://dummyjson.com/products/10')
}





export default PostService;