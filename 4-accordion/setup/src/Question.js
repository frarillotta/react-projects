import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// const Question = () => {
//   return <h2>question component</h2>;
// };


class Question extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      show: false

    }

  }

  render() {

    return <article className={"question"}>
    <header>
          <h4>{this.props.question.title}</h4>
          <button className={"btn"} onClick={this.handleState.bind(this)}>
            {this.state.show === false ?  <AiOutlinePlus/> : <AiOutlineMinus />}
          </button>
    </header>
      {this.state.show === true ? this.props.question.info: ""}
    </article>

  }


  handleState() {

    this.setState({show: !this.state.show})

  }

}

export default Question;
