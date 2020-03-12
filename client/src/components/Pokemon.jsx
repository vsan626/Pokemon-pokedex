import React from "react";
import axios from "axios";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      toggle: false
    };
    this.updatePoke = this.updatePoke.bind(this);
  }

  updatePoke(e, id) {
    e.preventDefault()
    axios
      .put(`/pokemon/update/${id}`, { name: this.state.name })
      .then(() => {
        console.log("name changed");
      })
      .catch(() => {
        console.log("couldn't change name");
      });
  }


  render() {
    return (
      <div>
        <h3
          onClick={() => {
            this.setState({ toggle: true }), console.log("clicked");
          }}
        >
          {this.props.pokeData.name}
        </h3>
        <div>{this.props.pokeData.type}</div>
        <img src={this.props.pokeData.img} />
        {this.state.toggle ? (
          <form onSubmit={e => this.updatePoke(e, this.props.pokeData._id)}>
            <input
              placeholder="Enter new name"
              onChange={e => this.setState({ name: e.target.value })}
            ></input>
            <button> submit </button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default Pokemon;
