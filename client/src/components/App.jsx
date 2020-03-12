import React from "react";
import axios from "axios";
import PokemonList from "./PokemonList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeData: []
      // type: "Sort By Type"
    };

    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  componentDidMount() {
    axios.get("/pokemon/getAll").then(data => {
      this.setState({
        pokeData: data.data
      });
    });
  }

  //Eric's help code below
  // onSelectHandler(e) {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // }

  //solution by filtering on the get params based on db field "type" and option value
  onSelectHandler(e) {
    if (e.target.value === "none") {
      axios.get(`/pokemon/getAll`).then(data => {
        this.setState({
          pokeData: data.data
        });
      });
    } else {
      axios.get(`/pokemon/byType/${e.target.value}`).then(data => {
        this.setState({
          pokeData: data.data
        });
      });
    }
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button>Show All</button>
          <select id="type" onChange={this.onSelectHandler}>
            <option value="none">Sort by Type</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
          </select>
          <button>INSERT</button>
          <div>
            <PokemonList pokeData={this.state.pokeData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
