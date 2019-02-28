import React, { Component } from "react";
import axios from "axios";
import './App.css';
import {Link} from 'react-router-dom'

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
        console.log(res.data);
        this.setState({ berriak });
      })
  }

  render() {

    return (

     <div>
      <ul className="berri_zerrenda">
        {
          this.state.berriak.map(berri =>
            <li key={berri.id}>

{berri.better_featured_image
  ? <img src={berri.better_featured_image.source_url} />
  : 'no pic'  
  }
          {berri.modified.split('T')[0]}


              
              <br />

              {berri.title.rendered}
              <br />

             <Link to={'/' + berri.slug}>click here mother fucker</Link>

            </li>)
        }
      </ul>
      </div>
    )
  }
}
export default Home;