import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from './Slide';
import '../styles/Slider.css';
class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      active: null,
      next: true
    };
  }

  componentWillMount() {
    this.setActive(0, true);
  }

  setActive(index, next) {
    this.setState({
      next: next,
      activeIndex: index,
    }, ()=>{
      this.setState({
        active: <Slide key={this.state.activeIndex} data={this.props.slides[this.state.activeIndex]} />
      })
    })
  }

  next() {
    this.setActive(this.state.activeIndex + 1 < this.props.slides.length ? this.state.activeIndex + 1 : 0, true)
  }

  prev() {
    this.setActive(this.state.activeIndex + 1 < this.props.slides.length ? this.state.activeIndex + 1 : 0, false);
  }

  render() {

    return (
      <div className="slider" >
          <ReactCSSTransitionGroup
            transitionName={{
              enter: this.state.next ? 'enter-next' : 'enter-prev',
              enterActive: 'enter-active',
              leave: 'leave',
              leaveActive: this.state.next ? 'leave-active-next' : 'leave-active-prev'
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {this.state.active}
          </ReactCSSTransitionGroup>
          <div className="arrow prev" onClick={() => this.prev()} />

        <div className="arrow next" onClick={() => this.next()} />
      </div>
    );
  }
}

export default Slider;

