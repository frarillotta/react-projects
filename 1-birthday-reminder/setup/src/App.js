import React, { useState } from 'react';
import data from './data';
import List from './List';
// function App() {
//
//     const [people, setPeople] = useState(data);
//     return (
//           <main>
//             <section className={"container"}>
//               <h3>{people.length} birthdays today</h3>
//               <List people={people}></List>
//               <button onClick={()=>{
//                   setPeople([]);
//               }}>
//                 Clear All
//               </button>
//             </section>
//           </main>
//       );
// }

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {};
        this.state.people = data;

    }

    render() {

        return(
            <main>
                <section className={"container"}>
                    <h3>{this.state.people.length} birthdays today</h3>
                    <List people={this.state.people}></List>
                    <button onClick={()=>{
                        this.setState({people: []});
                    }}>
                        Clear All
                    </button>
                </section>
            </main>)

    }

}

export default App;
