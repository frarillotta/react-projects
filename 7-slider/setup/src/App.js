import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
// function App() {
//   return <h2>slider project setup</h2>;
// }

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      people: data,
      index: 0
    }

  }


  render() {

    return <section className={"section"}>
      <div className={"title"}>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className={"section-center"}>
        {this.state.people.map((person, index)=>{
          const {id, image, name, title, quote} = person;
          let position = "nextSlide";

          if(index === this.state.index) {
            position = "activeSlide";
          }

          if(this.state.index === index - 1 || (index === 0 && this.state.index === this.state.people.length -  1)) {

            position = "lastSlide";

          }
          return <article key={id} className={position}>
            <img className={"person-img"} src={image} alt={name}/>
            <h4>{name}</h4>
            <p className={"title"}>{title}</p>
            <p className={"text"}>{quote}</p>
            <FaQuoteRight className={"icon"}/>
          </article>
        })}
        <button className={"prev"} onClick={()=>{this.setState({index: this.state.index - 1})}}>
          <FiChevronLeft/>
        </button>
        <button className={"next"} onClick={()=>{this.setState({index: this.state.index + 1})}}>
          <FiChevronRight/>
        </button>
      </div>
    </section>

  }


  componentDidUpdate() {

    if (this.state.index > this.state.people.length - 1) {

      this.setState({index: 0});

    }

    if (this.state.index < 0) {

      this.setState({index: this.state.people.length - 1})

    }

  }

}

export default App;
