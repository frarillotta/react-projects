import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      categories: this.getCategories(),
      activeCategory: "All",
      itemsToRender: items

    }

  }


  render() {

    return(
        <main>
          <div className={"title"}>
            <h2>Menu</h2>
            <div className={"underline"}/>
          </div>

          <Categories categories={this.state.categories} selectCategory={this.selectCategory.bind(this)}/>
          <Menu items={this.state.itemsToRender}/>
        </main>
    )

  }


  getCategories() {

    const set = new Set(items.map((item)=>{return item.category}))

    const categories = [...set]

    categories.unshift("All");

    return categories;

  }


  selectCategory(category) {

    if (category === "All") {

      this.setState({itemsToRender: items});
      return;

    }

    const newItems = items.filter((item)=>
      item.category === category
    );

    this.setState({itemsToRender: newItems});

  }

}
export default App;
