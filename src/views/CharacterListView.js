import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacter()
  }

  render() {
    if (this.props.fetching) {
      <h1>Loading.......................</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
};

export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
