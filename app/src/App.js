import React, { Component } from 'react';

import Main from './pages/Main';
import Loading from './pages/Loading';

import hotels from './lib/hotels-service';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    loading: true,
    hotels: {},
  }

  componentDidMount() {
    this.getHotels();
  }

  getHotels = () => {
    hotels.getHotels()
    .then(result => {
      this.setState({
        loading: false,
        hotels: result,
      })
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  render() {
    const {loading, hotels} = this.state;
    return (
      <div className="App">
        {loading ? <Loading /> : <Main hotels={hotels}/>}
      </div>
    );
  }
}

export default App;
