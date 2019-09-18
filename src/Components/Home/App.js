import React, {Component} from 'react';
// import Header from './Header';
import {Carousel, Row, Col, Card, Container, Button, Media} from 'react-bootstrap';
import Footer from "./Footer";
import imgOne from "./img1.svg";

class App extends Component{
    render(){
        return(
            <div>
              {/** CAROUSEL SECTION*/}
              <Carousel>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={imgOne}
                  alt="First slide"
                  />
                  <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={imgOne}
                  alt="Second slide"
                  />

                  <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={imgOne}
                  alt="Third slide"
                  />

                  <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              </Carousel><br/>
              {/** END CAROUSEL SECTION*/}

              {/** PRODUCT SECTION*/}
              <h3 className="text-center">PRODUCT</h3><br/>
              <Container>
              <Row>
                <Col>
                  <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"/>
                  </Card>

                  <Card.Body>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis egestas ultrices. Phasellus semper facilisis facilisis.</Card.Text>
                  </Card.Body>
                </Col>

                <Col>
                  <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"/>
                  </Card>

                  <Card.Body>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis egestas ultrices. Phasellus semper facilisis facilisis.</Card.Text>
                  </Card.Body>
                </Col>

                <Col>
                  <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"/>
                  </Card>

                  <Card.Body>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis egestas ultrices. Phasellus semper facilisis facilisis.</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <div className="text-center">
              <Button className="center-block" variant="primary">See More Product</Button><br/><br/>
              </div>
              <hr/>
              {/** END PRODUCT SECTION*/}

              {/** ARTICEL SECTION */}
              <h3 className="text-center">ARTICLE</h3><br/>
              <Row>
                <Col>
                  <Media>
                    <img
                      className="mr-3"
                      src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                      alt="Thumbnail"
                    />
                    <Media.Body>
                      <h5>Title</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis egestas ultrices. Phasellus semper facilisis facilisis. Sed sodales, justo at fermentum consequat, nisl turpis eleifend turpis, id tempus ante elit et leo. Duis mauris ipsum, efficitur sit amet congue vitae, viverra a est. Ut ornare fringilla nisi sed ultricies. Nam dapibus ut orci quis feugiat. Nullam id eros a mauris hendrerit ultricies sit amet et lacus. Duis nunc velit, dictum sit amet vehicula sit amet, faucibus sed ligula. Vivamus posuere maximus nisi id egestas. Phasellus id enim accumsan, interdum odio a, aliquam nunc. Sed vulputate mi ut sapien lobortis congue. Donec sed viverra velit. Phasellus egestas accumsan laoreet. Integer laoreet nisl non mi ornare, id dapibus velit viverra.
                      </p>
                      <Button variant="primary">Read More</Button>
                    </Media.Body>
                  </Media>
                </Col>
              </Row><br/>
              <hr/>
              {/** END ARTICEL SECTION}*/}

              {/** ABOUT SECTION*/}
              <h3 className="text-center">ABOUT US</h3><br/>
                <Row>
                  <Col>
                    <Media>
                      <Media.Body>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis egestas ultrices. Phasellus semper facilisis facilisis. Sed sodales, justo at fermentum consequat, nisl turpis eleifend turpis, id tempus ante elit et leo. Duis mauris ipsum, efficitur sit amet congue vitae, viverra a est. Ut ornare fringilla nisi sed ultricies. Nam dapibus ut orci quis feugiat. Nullam id eros a mauris hendrerit ultricies sit amet et lacus. Duis nunc velit, dictum sit amet vehicula sit amet, faucibus sed ligula. Vivamus posuere maximus nisi id egestas. Phasellus id enim accumsan, interdum odio a, aliquam nunc. Sed vulputate mi ut sapien lobortis congue. Donec sed viverra velit. Phasellus egestas accumsan laoreet. Integer laoreet nisl non mi ornare, id dapibus velit viverra.
                        </p>
                      </Media.Body>
                      <img
                        width={500}
                        height={250}
                        className="mr-3"
                        src="https://video-images.vice.com/articles/5c61451b72f8f400077b3cdf/lede/1549878717939-Screen-Shot-2019-02-11-at-45130-PM.png?crop=0.9579735175590098xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*"
                        alt="Gambar Sate"
                      />
                    </Media>
                  </Col>
                </Row>
                {/** END ABOUT SECTION*/}
                <Footer />
              </Container>
            </div>
        );
    }
}

export default App;
