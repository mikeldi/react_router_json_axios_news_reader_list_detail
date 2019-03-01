import React, { Component } from "react";
import axios from "axios";
import './App.css';
import { Link } from 'react-router-dom'

class Home extends Component {

  state = {
    berriak: []
  }

  componentDidMount() {
    axios.get(`http://aldeasinfantiles-wp.lin3sdev.com/wp-json/wp/v2/posts?filter%5B
      orderby%5D=date&order=desc&categories=1&per_page=9&page=1&_embe
      d`)
      .then(res => {
        const berriak = res.data;
        this.setState({ berriak });
      })
  }

  render() {
    return (
      <React.Fragment>
        <ul className="berri_zerrenda">
          {
            this.state.berriak.map(berri =>
          
              <li key={berri.id}>
                {berri.better_featured_image
                  ? <img src={berri.better_featured_image.source_url} alt={berri.title.rendered} />
                  : <img src='https://via.placeholder.com/4455x2970.png?text=Noticia sin imagen' alt='no image' />
                }
                <span className='date'>{berri.modified.split('T')[0]}</span>
                <h1 className='title'>{berri.title.rendered}</h1>
                <Link to={'/' + berri.slug}><span>ver mas</span></Link>
              </li>)
          }
        </ul>
      </React.Fragment>
    )
  }
}
export default Home;