import React from "react";
import Board from "./BoardComponent/Board";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board player1={this.props.player1} player2={this.props.player2} />
        </div>
        <div className="game-info"></div>
      </div>
    );
  }
}

export default Game;
