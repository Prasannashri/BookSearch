import React, { Component } from "react";
import axios from "axios";
import "./FullDetails.css";
const API_URL = "https://www.googleapis.com/books/v1/volumes";

class FullDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookvolumeInfo: {},
      bookimgLinks: {},
      isbnNums: [],
    };
  }
  async componentDidMount() {
    let idAppendedUrl = `${API_URL}/${this.props.id}`;
    //console.log(idAppendedUrl);
    let result = await axios.get(idAppendedUrl);
    //console.log(result.data);
    this.setState({
      bookvolumeInfo: result.data.volumeInfo,
      bookimgLinks: result.data.volumeInfo.imageLinks,
      isbnNums: result.data.volumeInfo.industryIdentifiers,
    });
  }
  render() {
    const isbnNums = this.state.isbnNums.map((id) => {
      return <div>{id.identifier}</div>;
    });
    return (
      <div className='detailed-page'>
        <h3>{this.state.bookvolumeInfo.title}</h3>
        <img
          src={this.state.bookimgLinks.thumbnail}
          alt={this.state.bookvolumeInfo.title}
        />
        <br />
        <h5> Bibliographic Information: </h5>
        <table className='biblio-table'>
          <tbody>
            <tr>
              <th>Title </th>
              <td> {this.state.bookvolumeInfo.title} </td>
            </tr>
            <tr>
              <th>Authors </th> <td> {this.state.bookvolumeInfo.authors} </td>
            </tr>
            <tr>
              <th>publisher </th>
              <td>
                {this.state.bookvolumeInfo.publisher}.,
                {this.state.bookvolumeInfo.publishedDate}
              </td>
            </tr>
            <tr>
              <th>Length </th>
              <td> {this.state.bookvolumeInfo.pageCount} Pages </td>
            </tr>
            <tr>
              <th>ISBN </th>
              <td> {isbnNums}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default FullDetails;
