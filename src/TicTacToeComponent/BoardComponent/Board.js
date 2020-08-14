import React from "react";
import Square from "./SquareComponent/Square";
import "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    // Checks where to end the game, by disabling the clickes in a way...
    if (this.winCheck(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  winCheck(squares) {
    const winnngCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnngCombinations.length; i++) {
      const [a, b, c] = winnngCombinations[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }
  render() {
    const winner = this.winCheck(this.state.squares);

    let status;

    if (winner) {
      status =
        "Winner ===> " +
        (winner == "X" ? this.props.player1.name : this.props.player2.name);
      alert(
        ` iWinner is ${
          winner == "X" ? this.props.player1.name : this.props.player2.name
        } `
      );
    } else status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square
            value={this.state.squares[0]}
            onClick={() => this.handleClick(0)}
          />
          <Square
            value={this.state.squares[1]}
            onClick={() => this.handleClick(1)}
          />
          <Square
            value={this.state.squares[2]}
            onClick={() => this.handleClick(2)}
          />
        </div>

        <div className="board-row">
          <Square
            value={this.state.squares[3]}
            onClick={() => this.handleClick(3)}
          />
          <Square
            value={this.state.squares[4]}
            onClick={() => this.handleClick(4)}
          />
          <Square
            value={this.state.squares[5]}
            onClick={() => this.handleClick(5)}
          />
        </div>

        <div className="board-row">
          <Square
            value={this.state.squares[6]}
            onClick={() => this.handleClick(6)}
          />
          <Square
            value={this.state.squares[7]}
            onClick={() => this.handleClick(7)}
          />
          <Square
            value={this.state.squares[8]}
            onClick={() => this.handleClick(8)}
          />
        </div>
      </div>
    );
  }
}

export default Board;
