import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Detail extends Component {
  state = {
    berriak: []
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;

    axios.get(`http://aldeasinfantiles-wp.lin3sdev.com/wp-json/wp/v2/posts?slug=` + slug)
      .then(res => {
        const berriak = res.data;
        this.setState({ berriak });
      })
  }

  render() {

    return (
      <div className='berri_xehetasun'>
        <div className='tb'>
          <Link to={'/'}><span>Ver todas las noticias</span></Link>
        </div>
        {
          this.state.berriak.map(berri =>
            <div key={berri.id}>
              <h1 className='title'>{berri.title.rendered}</h1>
              <span className='date'>{berri.modified.split('T')[0]}</span>
              <div dangerouslySetInnerHTML={{ __html: berri.content.rendered }} />
            </div>)
        }
      </div>
      )
    }
  }
  
  export default Detail
  
/* {this.props.match.params.slug} */