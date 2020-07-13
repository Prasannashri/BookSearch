import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./BookSearch.css";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: " ",
      bookItems: [],
    };
    this.fetchBooks = this.fetchBooks.bind(this);
  }

  handleChange = (evt) => {
    this.setState({
      query: evt.target.value,
    });
  };

  async fetchBooks(evt) {
    evt.preventDefault();
    let queryterm = this.state.query;
    let res = await axios.get(
      `${BASE_URL}?q=${queryterm}&key=AIzaSyC8mrmAMCsHpRKbloOrZTkzHiM9bub4fsk`
    );
    // console.log(res.data.items);
    this.setState({
      bookItems: res.data.items,
    });
  }
  render() {
    const searchedBooks = this.state.bookItems.map((book) => {
      return (
        <Card
          key={book.id}
          id={book.id}
          thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          publishedDate={book.volumeInfo.publishedDate}
          selfLink={book.selfLink}
        />
      );
    });
    return (
      <div>
        <div className='search-container'>
          <form>
            <div className='title'>
              <span>
                <i>Book</i> Search!
              </span>
            </div>
            <input
              type='text'
              className='search-term'
              placeholder='Search for book..'
              name='search'
              value={this.state.query}
              onChange={this.handleChange}
            />
            <button className='search-btn' onClick={this.fetchBooks}>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
        <div className='cards'>{searchedBooks}</div>
      </div>
    );
  }
}
export default BookSearch;
//<i class="fa fa-info-circle" aria-hidden="true"></i>
