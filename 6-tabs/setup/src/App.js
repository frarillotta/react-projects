import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
        dataFetched: false,
        data: [],
        activeTab: 0
    }

  }


  render() {

      if(!this.state.dataFetched) {

          return (<h2 className={"title"}>Loading...</h2>)

      }


      const {company, title, dates, duties, id} = this.state.data[this.state.activeTab]

    return(
        <section className={"section"}>

            <div className={"title"}>
                <h2> Experience </h2>
                <div className={"underline"}/>
            </div>

            <div class={"job-center"}>

                <div className='btn-container'>
                    {this.state.data.map((job, index)=>{

                        return (
                            <button
                                key={job.id}
                                onClick={()=>{this.setValue(index)}}
                                className={`job-btn ${index === this.state.activeTab && 'active-btn'}`}

                            >{job.company}</button>
                        )

                    })}
                </div>

                <article className='job-info'>
                    <h3>{title}</h3>

                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>

                    <p className={"duties"}>
                        {duties.map((duty, index)=>{

                            return(
                                <div key={index} className={"job-desc"}>
                                    <FaAngleDoubleRight className='job-icon'/>
                                    <p>{duty}</p>
                                </div>)

                        })}

                    </p>

                </article>

            </div>
            <button type='button' className='btn'>
                more info
            </button>
        </section>
    )

  }


  async fetchData() {

        const data = await fetch(url);

        const parsedData = await data.json();

        this.setState({
            data: parsedData,
            dataFetched: true
        });

  }

  componentDidMount() {

      this.fetchData()

  }


  setValue(index) {

      this.setState({activeTab: [index]});

  }


}

export default App
