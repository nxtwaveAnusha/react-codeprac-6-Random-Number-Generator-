import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateRandomNumber = () => {
    this.setState(prevState => ({
      num: prevState.num + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" onClick={this.generateRandomNumber}>
            Generate
          </button>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
