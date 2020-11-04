import React from 'react';
import Tour from './Tour';

class Tours extends React.Component {

  constructor(props) {

    super(props);

  }


  render() {

    return(
      <section>
        <div className={"title"}>
          <h2>tours</h2>
          <div className={"underline"}/>
        </div>
          {this.props.tours.map((tour)=>{

            return <Tour removeTour={this.props.removeTour} key={tour.id} {...tour}/>;

          })}
      </section>
    )


  }


}

export default Tours;
