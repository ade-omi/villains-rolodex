import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      villians: [],
      searchField: "",
    };
  }

  //LifeCycleMethods
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ villians: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    //destructing to create search re render.
    const { villians, searchField} = this.state;
    const filteredVillians = villians.filter(villian =>
      villian.name.toLowerCase().includes(searchField.toLowerCase())
      );
      
    return (
      <div className="App">
        <h1> Villians Rolodex </h1>
        <SearchBox 
           placeholder="search villians"
           handleChange={this.handleChange}
        />
        <CardList villians={filteredVillians} />
      </div>
    );
  }
}

export default App;
