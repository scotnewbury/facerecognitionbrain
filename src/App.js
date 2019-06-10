import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import './App.css'

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then(
          function(response) {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          },
          function(err) {
            // there was an error
            console.log(err);
          }
      );
  }

  render() {
    return (
    <div className="App">
      <Particles className = 'particles' params = {particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
      <FaceRecognition imageUrl = {this.state.imageUrl} />
    </div>
    )
  }
}

const app = new Clarifai.App ({
  apiKey: '5065782b15ec42c280323caa0d49208d'
})

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
