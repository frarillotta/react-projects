import React from 'react';

class Categories extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {

    return(
        <div className={"btn-container"}>
            <div>{this.props.categories.map((category)=>{
                return (
                <button
                    type="button"
                    className="filter-btn"
                    key={category.id}
                    onClick={() => this.props.selectCategory(category)}
                >{category}</button>
                )
              })}
            </div>
        </div>
    )

  }

}

export default Categories;
