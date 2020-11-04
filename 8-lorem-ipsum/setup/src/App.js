import React from 'react';
import data from './data';


class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            count: 0,
            paragraphs: []
        }

    }


    render() {

        return(
            <section className={"section-center"}>

                <h3>Lorem ipsum</h3>
                <form className={"lorem-form"} onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor='amount'>paragraphs:</label>
                    <input
                        type='number'
                        name='amount'
                        id='amount'
                        value={this.state.count}
                        onChange={(event) => this.setCount(event.target.value)}
                    />

                    <button className='btn'>Generate</button>
                </form>

                <article className='lorem-text'>

                    {this.state.paragraphs.map((text, index)=>{
                        return (
                            <div key={index}>{text}</div>
                        )
                    })}

                </article>
            </section>
        )

    }


    handleSubmit(event) {

        event.preventDefault();

        const paragraphsToUpdate = [];

        for (let i = 0; i < this.state.count; i++) {

            paragraphsToUpdate.push(data[i]);

        }

        this.setState({paragraphs: paragraphsToUpdate});

    }



    setCount(value) {

        this.setState({count: value});

    }
}




export default App;
