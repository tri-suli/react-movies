import axios from "axios";

async function findByTitle (keyword) {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            s: keyword,
            apiKey: process.env.REACT_APP_API_KEY
        }
    })

    return response.data;
}

export default findByTitle;