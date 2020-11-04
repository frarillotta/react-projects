import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// const Review = () => {
//   return <h2>review component</h2>;
// };

class Review extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      index: 0

    }

  }


  render() {

    const {name, job, image, text} = people[this.state.index];

    return <article className={"review"}>
      <div className={"img-container"}>
        <img src={image} alt={name} className={"person-img"}/>
        <span className={"quote-icon"}>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className={"author"}>{name}</h4>
      <p className={"job"}>{job}</p>
      <p className={"info"}>{text}</p>
      <div className={"button-container"}>
        <button className={"prev-btn"} onClick={this.prevPerson.bind(this)}>
          <FaChevronLeft/>
        </button>

        <button className={"next-btn"} onClick={this.nextPerson.bind(this)}>
          <FaChevronRight/>
        </button>

      </div>
      <button className={"random-btn"} onClick={this.randomPerson.bind(this)}>surprise me</button>
    </article>

  }


  prevPerson() {

    if (this.state.index === 0) {

      this.setState({index: people.length - 1})
      return;

    }

    this.setState({index: this.state.index - 1})

  }


  randomPerson() {

    let randomNumber = Math.floor(Math.random() * people.length);

    this.setState({index: randomNumber})

  }


  nextPerson() {

    if (this.state.index === people.length - 1) {

      this.setState({index: 0})
      return;

    }

    this.setState({index: this.state.index + 1})

  }

}


export default Review;
