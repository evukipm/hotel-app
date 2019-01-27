import axios from 'axios';

class Hotels {
  constructor() {
    this.hotels = axios.create({
      baseURL: 'http://127.0.0.1:8082',
    });
  }

  getHotels() {
    return this.hotels.get('/hotels.json')
      .then(({ data }) => data);
  }
}

const hotels = new Hotels();

export default hotels;
