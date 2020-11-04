import React from 'react';

class Tour extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      readMore: false
    }

  }

  render() {

        return(
        <article className={"single-tour"}>
          <img src={this.props.image} alt={this.props.name}/>
          <footer>

            <div className={'tour-info'}>

              <h4>{this.props.name}</h4>
              <h4 className={"tour-price"}>{this.props.price}</h4>

            </div>

            <p>{this.state.readMore ? this.props.info : `${this.props.info.substring(0, 200)}...`}</p>
            <button onClick={()=>{this.setState({readMore: !this.state.readMore})}}>
              {this.state.readMore?'show less': 'show more'}
            </button>
            <button onClick={()=>{this.props.removeTour(this.props.id)}} className={"delete-btn"}>
                Close
            </button>

          </footer>

        </article>

    )

  }

}

export default Tour;
