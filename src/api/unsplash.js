import axios from 'axios';

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID pKnAJ3_HVV1tNzg8sbfu0lXK94ZvJyZYrcF-8paa5JM"
    }
})