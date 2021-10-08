import axios from "axios";

async function list (keyword, page = 1) {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            page,
            s: keyword,
            apiKey: process.env.REACT_APP_API_KEY
        }
    })

    return response.data;
}

export default list;
