import React, { Component } from 'react';
import '../styles/Slider.css';
class Slide extends Component {

    render() {
        return (
            <div className="slide" style={{ backgroundImage: "linear-gradient(rgba(119, 136, 153,0.7), rgba(119, 136, 153,0.7)), url(" + this.props.data.thumbnail_large + ")" }}>
                <div className="content">
                    <div className="image">
                        <img src={this.props.data.thumbnail_large} />
                    </div>
                    <div className="text">
                        <h1>{this.props.data.title}</h1>
                        <p>{this.props.data.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100)+'...'}</p>
                        <a href={this.props.data.url} target="_blank">Watch Now</a>
                        <a href={this.props.data.user_url} target="_blank">See User</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;
