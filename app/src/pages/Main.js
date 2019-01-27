import React, { Component } from 'react';
import { Card, CardColumns, Badge } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar'

class Main extends Component {

  state = {
    hotels: this.props.hotels
  }

  orderByBrand = (brand) => {
    const {hotels} = this.props
    const filteredBrand = hotels.filter(hotel => {
      if(hotel.brand === brand){
        return hotel
      }
    });
    this.setState({
      hotels: filteredBrand,
    })
  }
  orderByRating = () => {
    const {hotels} = this.state
    const orderedHotels = hotels.sort((a, b) => {
      return b.rating.score - a.rating.score;
    });
    this.setState({
      hotels: orderedHotels,
    })
  }

  render() {
    const {hotels} = this.state
  return (
    <div>
      <NavbarComponent orderByBrand={this.orderByBrand} orderByRating={this.orderByRating} />
    <CardColumns>
      {hotels.map((hotel, ix) => (
        <Card key={ix} style={{ width: '18rem' }}>
          <Card.Header>{hotel.name}</Card.Header>
          <Card.Img variant="top" src={hotel.image} />
          <Card.Body>
          <h1>{`${hotel.rating.score} `}<i className="fas fa-star"></i></h1>
              <Badge>{`${hotel.rating.reviewNumber} Reviews`}</Badge>
            <Card.Footer className="text-muted">{hotel.brand}</Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
    </div>
  )
      }
}

export default Main;