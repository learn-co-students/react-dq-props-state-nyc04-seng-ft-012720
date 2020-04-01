import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyesMapper = {
      'blue': BlueBaby,
      'sun': SunBaby,
      'glowing': GlowingBaby
}

export default class BabyHog extends Component {

  state =  {
     weight: 200
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }
  
  render() {
    const name = this.props.babyName
    const hobby = this.props.babyHobby
    const weight = this.props.babyWeight
    const eyes = this.props.babyEyes
    let currentWeight = this.state.weight

    return (
      <li className="hogbabies">
        <h1>Name {name}</h1>
        <h3>Weight: {weight}</h3>
        <h3>Hobby: {hobby}</h3>
        <h4>Eye Color: {eyes}</h4>
          
        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={eyesMapper[eyes]} style={{height: `${currentWeight}px`}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
