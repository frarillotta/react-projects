import React from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'


class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      loading: true,
      tours: []

    }

  }


  render() {

    if (this.state.loading) {

      return <Loading></Loading>

    }

    if (this.state.tours.length === 0) {

      return (
        <div className={"title"}>
          <h2>No Tours</h2>
          <div className={"underline"}/>
          <button onClick={()=>{this.fetchData()}} className={"btn"}>Refresh</button>
        </div>
      )

    }

    return (
      <Tours removeTour={this.removeTour.bind(this)} tours={this.state.tours} />
    )

  }


  async fetchData() {

      fetch(url).then((response)=>{

        response.json().then((data)=>{
          this.setState({
            tours: data,
            loading: false
          });
        })
      })

  }


  removeTour(id) {

    const newTours = this.state.tours.filter(tour=> tour.id !== id);

    this.setState({tours: newTours});

  }


  componentDidMount() {

    this.fetchData()

  }


}

export default App
