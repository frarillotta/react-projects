import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
// function App() {
//   return <h2>accordion project setup</h2>;
// }


class App extends React.Component {

  constructor(props) {

    super(props);

  }


  render() {

    return <main>
      <div className={"container"}>
        <h3>Questions and answers about login</h3>
        <section className={"info"}>
        {data.map((question)=>{

          return <SingleQuestion key={question.id} question={question}/>

        })}
        </section>
      </div>
    </main>

  }


}

export default App;
