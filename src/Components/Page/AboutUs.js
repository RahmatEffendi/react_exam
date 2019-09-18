import React, {Component} from 'react';
import { CardDeck, Card, Container } from 'react-bootstrap';
import YouTube from 'react-youtube';

class AboutUs extends Component {
  render(){
    const opts = {
      height: '390',
      width: '1100',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return(
      <Container><br/>
        <YouTube
          videoId="wmrfFsPnvVA"
          opts={opts}
          onReady={this._onReady}
        />
        <CardDeck>  
        <Card.Body>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ante ut ipsum accumsan elementum. Vivamus eu eleifend tellus. Vivamus vehicula nibh sit amet ante tristique, sit amet ullamcorper sem sollicitudin. Vivamus gravida diam eget sodales tempor. Curabitur rutrum rhoncus ultrices. Praesent a fringilla nunc. Curabitur vestibulum urna sed rhoncus laoreet. Praesent bibendum ligula id eros maximus, ut hendrerit risus tempor. Etiam magna quam, consectetur non libero ullamcorper, placerat semper libero. Ut justo diam, aliquam bibendum sodales a, malesuada eu ante. Proin vel ornare sapien. Suspendisse rutrum lectus eros, et lobortis augue consectetur vitae.
            Nam consequat diam ut imperdiet consequat. Sed felis elit, blandit id massa vitae, elementum consequat ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eu rhoncus turpis. Cras efficitur pharetra tincidunt. Nullam nec sapien ut diam rutrum iaculis. Curabitur ex mauris, maximus sed scelerisque in, elementum eu elit. Vivamus bibendum quis lectus sed vulputate. Vestibulum aliquam, justo non venenatis porta, magna sapien maximus purus, nec scelerisque justo arcu sit amet neque. Vivamus eleifend, ex nec malesuada vulputate, urna est varius turpis, vitae sodales purus neque vel metus.
            In nibh mi, molestie sit amet mi vitae, finibus condimentum augue. Cras vehicula, mi ut porttitor elementum, sem magna semper elit, sed facilisis tellus neque vel nisi. Pellentesque lobortis nec turpis a gravida. Suspendisse tellus purus, vestibulum sed ullamcorper eu, vehicula ac ex. Suspendisse eget posuere massa. Etiam tempor dignissim eros eu porta. Duis augue tortor, accumsan at nibh id, efficitur vulputate massa. Pellentesque in dui eu enim sollicitudin consequat id eu tellus. Ut lacinia nisi purus, sit amet pulvinar massa elementum fermentum. Proin sit amet lorem pulvinar, tempus tellus sit amet, faucibus elit. Pellentesque fermentum placerat odio eget aliquam. Morbi suscipit lorem ac eleifend vehicula. Nam odio tellus, ornare in consectetur eget, lacinia rutrum urna. Maecenas auctor pellentesque sapien et iaculis. 
            </Card.Text>
          </Card.Body>
        </CardDeck>
      </Container>
    );
  }
}

export default AboutUs;
