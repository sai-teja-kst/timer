// Write your code here

import './index.css'

import {Component} from 'react'

class DigitalTimer extends Component {
  state = {status: 'running', timer: '25:00'}

  onStart = () => {
    console.log('start clicked')
  }

  onPause = () => {
    console.log('pause clicked')
  }

  onReset = () => {
    console.log('reset clicked')
  }

  onIncrement = () => {
    console.log('plus clicked')
  }

  onDecrement = () => {
    console.log('minus clicked')
  }

  render() {
    const {status, timer} = this.state

    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="bg-card">
          <div className="bg-clock">
            <div className="bg-timer">
              <h1 className="timer">{timer}</h1>
              <p className="timer-status">{status}</p>
            </div>
          </div>
          <div className="bg-fn-container">
            <div className="bg-fn-card-container">
              <div className="bg-fn-card">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="start"
                    className="bg-icon"
                    onClick={this.onStart}
                  />
                </div>
                <div>
                  <h1 onClick={this.onStart}>Start</h1>
                </div>
              </div>
              <div className="bg-fn-card">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause"
                    className="bg-icon"
                    onClick={this.onPause}
                  />
                </div>
                <div>
                  <h1 onClick={this.onPause}>Pause</h1>
                </div>
              </div>
              <div className="bg-fn-card">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset"
                    className="bg-icon"
                    onClick={this.onReset}
                  />
                </div>
                <div>
                  <h1 onClick={this.onReset}>Reset</h1>
                </div>
              </div>
            </div>
            <div className="bg-timer-set">
              <div>
                <h4>Set Timer Limit</h4>
              </div>
              <div className="timer-set-card">
                <p className="bg-operator" onClick={this.onDecrement}>
                  -
                </p>
                <div>
                  <h1 className="bg-timer-value">25</h1>
                </div>
                <p className="bg-operator" onClick={this.onIncrement}>
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
