import React, {Component} from 'react';
import {Container, Media} from 'react-bootstrap';
// import axios from 'axios';


// componentDidMount(){
//     fetch('https://apidojo-forever21-v1.p.rapidapi.com/categories/list'+'apiKey=4aa585f2f0msh2532563716c685dp186cbcjsn9b08ca80c490')
//     .then(response => response.json())
//     .then(res => {
//         this.setState({
//             dataApi:res.data
//         })
//     });
// }

class Products extends Component{
    render(){
        return(
            <div>
                <Container>
                <Media>
                  <img
                    width={300}
                    height={200}
                    className="mr-3"
                    src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                    alt="gambar"
                  />
                  <Media.Body>
                    <h5>TITLE</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                  </Media.Body>
                </Media><br/>

                <Media>
                  <img
                    width={300}
                    height={200}
                    className="mr-3"
                    src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                    alt="gambar"
                  />
                  <Media.Body>
                    <h5>TITLE</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                  </Media.Body>
                </Media><br/>

                <Media>
                  <img
                    width={300}
                    height={200}
                    className="mr-3"
                    src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                    alt="gambar"
                  />
                  <Media.Body>
                    <h5>TITLE</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                  </Media.Body>
                </Media><br/>

                <Media>
                  <img
                    width={300}
                    height={200}
                    className="mr-3"
                    src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                    alt="gambar"
                  />
                  <Media.Body>
                    <h5>TITLE</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                  </Media.Body>
                </Media><br/>

                <Media>
                  <img
                    width={300}
                    height={200}
                    className="mr-3"
                    src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                    alt="gambar"
                  />
                  <Media.Body>
                    <h5>TITLE</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                  </Media.Body>
                </Media><br/>

                
              </Container>
            </div>
        );
    }
}

export default Products;