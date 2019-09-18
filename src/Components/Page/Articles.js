import React, {Component} from "react";
import {Container, Media, Button} from 'react-bootstrap';
import axios from "axios";
import '../css/custome.css';
import { Link } from 'react-router-dom';

class Articles extends Component{

  constructor(props){
    super(props);
    this.state = {
      dataApi : []
      }
    }

  reloadData(){
      axios.get('https://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=03a0a6bfe1f74ee1af7f12066ee0dc55').then( res => {
        this.setState({
          dataApi: res.data.articles
        });
      });
  }

  componentDidMount(){
      this.reloadData();
      // fetch('https://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=03a0a6bfe1f74ee1af7f12066ee0dc55')
      // .then(response => response.json())
      // .then(res => {
      //     this.setState({
      //         dataApi:res.articles
      //     })
      // });
  }

  render(){
    return(
      <div>
        {this.state.dataApi.map((data, index) => {
          return(
            <div key={index}>
              {/* (found: object with keys {source, author, title, description, url, urlToImage, publishedAt, content}) */}
              <Container style={{paddingBottom: 10, paddingTop:10}}>
                <Media>
                  <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src={data.urlToImage}
                    alt={data.title}
                  />
                  <Media.Body>
                    <h5>{data.title}</h5>
                    <p>
                      {data.description}
                    </p>
                     <Button>Read More</Button>
                  </Media.Body>
                </Media>
              </Container>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default Articles;
