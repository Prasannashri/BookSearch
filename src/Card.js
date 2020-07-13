import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className='card' onClick={this.handleCardclick}>
        <img
          className='card-img'
          src={this.props.thumbnail}
          alt={this.props.title}
        />
        <Link to={`/book/${this.props.id}`}>
          <div className='book-title'>{this.props.title} </div>
        </Link>
        <p>{this.props.author} </p>
        <p> {this.props.publishedDate} </p>
      </div>
    );
  }
}
export default Card;
