import axios from "axios";

async function findByTitle (keyword) {
    const response = await axios.get(process.env.REACT_APP_API, {
        params: {
            s: keyword,
            apiKey: process.env.REACT_APP_API_KEY
        }
    })

    return response.data;
}

export default findByTitle;