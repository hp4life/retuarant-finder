import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': 'b1978d6320cf9663072eb4e6ffce4efc'
  }
});