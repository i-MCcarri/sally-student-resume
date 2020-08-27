import React, { Component } from 'react'

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: Math.ceil(Math.random() * 8)
  };
  //   The component will accept a prop called 
  //   bulletInChamber that has a default value of 8.

  state = {
    chamber: null,
    spinningTheChamber: false,
  };
  //   The component will have an initial state 
  //   with 2 properties, chamber that is initially 
  //   set to null, and spinningTheChamber that is 
  //   initially set to false.

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  //   If the component is to be unmounted, 
  //   clear the timeout.

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }
  //  When the user clicks the button, there should 
  //  be a click event handler. The following steps 
  //  should be in the handler:
  //      1. The state should update spinningTheChamber to 
  //  be true.
  //      2. A timeout should be registered for 2 seconds.
  //      3. Within the timeout, a random number between 1 
  //  and 8 should be generated.
  //      4. Within the timeout, the state should be 
  //  updated so that the generated random number 
  //  is the new value for chamber and 
  //  spinningTheChamber should be false.

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
        console.log(chamber);
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
  //   The component should render the content of 
  //   the p element according to the following 
  //   rules:
  //     1. If spinningTheChamber is true, render 
  //     spinning the chamber and pulling the 
  //     trigger! ....
  //     2. If the chamber value in state is the 
  //     same as the bulletInChamber value in 
  //     props, render BANG!!!!.
  //     3. Otherwise, render you're safe!!
}