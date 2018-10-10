import React, { Component } from 'react';
import Slider from './components/Slider';
import Section from './components/Section.js';
import axios from 'axios';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "MONSOON III",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "https://i.vimeocdn.com/video/595198868_505x160.jpg",
          format: 0,
          textColor: "black",
          background: "white"
        },
        {
          title: "BEAMS",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "https://i.vimeocdn.com/video/589972810_530x315.jpg",
          format: 1,
          textColor: "white",
          background: "#505050"
        },
        {
          title: "Move 2",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "https://i.vimeocdn.com/video/590587169_530x315.jpg",
          format: 0,
          textColor: "white",
          background: "linear-gradient(#505050, #fff)"
        }
      ],
      slides: []
    }
  }

  componentWillMount() {
    axios.get("https://vimeo.com/api/v2/channel/staffpicks/videos.json").then((res)=> {
      console.log(res.data);
      this.setState({
        slides: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.slides.length && <Slider slides={this.state.slides}/>
        }
        {
          this.state.data.map((section, index)=>{
            return <Section data={section} key={index}/>
          })
        }
      </div>
    );
  }
}

export default App;
