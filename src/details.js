import React, { Component } from "react";
import axios from "axios";

class Detail extends Component {


  state = {
    berriak: []
  }

  componentDidMount() {

    let slug = this.props.match.params.slug;

    axios.get(`http://aldeasinfantiles-wp.lin3sdev.com/wp-json/wp/v2/posts?slug=` + slug)
      .then(res => {
        const berriak = res.data;
        console.log(res.data);
        this.setState({ berriak });
      })
  }

  render() {
    
    return (
      if ({berri.title.rendered}="test"){
      <React.Fragment>
        <h4>Id is </h4> {this.props.match.params.slug}
        <ul className="berri_zerrenda">
          {
            this.state.berriak.map(berri =>
              <li key={berri.id}>

                {berri.better_featured_image
                  ? <img src={berri.better_featured_image.source_url} alt="" />
                  : 'no pic'
                }
                {berri.modified.split('T')[0]}
                <br />
                {berri.title.rendered}
                <br />
                <div dangerouslySetInnerHTML={{__html: berri.content.rendered}} />
                
              </li>)
          }
        </ul>
      </React.Fragment>
    }
    )
  
  }
}

export default Detail