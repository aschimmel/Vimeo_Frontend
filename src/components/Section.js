import React, { Component } from 'react';

class Section extends Component {

    render() {
        return (
            <div className="section" style={{background: this.props.data.background}}>
                <div className="half" style={{color: this.props.data.textColor}}>
                    <h1 className="title">{this.props.data.title}</h1>
                    <p className="desc">{this.props.data.desc}</p>
                </div>
                <div className="half">
                    <img src={this.props.data.img} alt="temp" />
                </div>
            </div>
        );
    }
}

export default Section;
