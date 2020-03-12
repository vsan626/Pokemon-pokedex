import React from "react";
import Pokemon from "./Pokemon.jsx";

class PokemonList extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }

  }


    render(){

      return (
        <div>
            <ul>
          {this.props.pokeData.map((item, index) => (
              <Pokemon key={index} pokeData={item} index={index}/>
          ))}
            </ul>
        </div>
      );
    }
  }


export default PokemonList;
