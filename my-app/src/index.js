import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {

//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => this.props.onClick() }
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={props.style}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  renderSquare(i) {
    var green;

    if (this.props.winnerSquares.includes(i)){
      green = {background: "green"};
    }

    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
        style={green}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;

    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }
    const squares = [];
    var count = 0;
    for (var i = 0; i < 3; i ++) {
      squares.push();
      var row = [];

      for (var j = 0; j < 3; j ++) {
        row.push(this.renderSquare(count));
        count ++;
      }
      squares.push(<div className="board-row">{row}</div>);
    }
    return (
      
      <div>
        {squares}
      </div>
      // <div>
      //   <div className="board-row">
      //     {this.renderSquare(0)}
      //     {this.renderSquare(1)}
      //     {this.renderSquare(2)}
      //   </div>
      //   <div className="board-row">
      //     {this.renderSquare(3)}
      //     {this.renderSquare(4)}
      //     {this.renderSquare(5)}
      //   </div>
      //   <div className="board-row">
      //     {this.renderSquare(6)}
      //     {this.renderSquare(7)}
      //     {this.renderSquare(8)}
      //   </div>
      // </div>
    );
  }
}

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        coor: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      reversed: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares)[0] || squares[i]) {
      return;
    }
    
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        coor: [i%3, Math.floor(i/3)],
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2 === 0),
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    var moves = history.map(
      (step, move) => {
        const coor = step.coor ? "(" + step.coor[0] + ", " + step.coor[1] + ")" : "";
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>
              {desc + coor}
            </button>
          </li>
        );
      }
    );
    // if (this.reversed) {
    //   moves.reverse();
    //   // var revMoves = [];
    //   // moves.forEach((e) => revMoves.unshift(e));
    //   // moves = revMoves;
    // }

    let status;
    if (winner[0]) {
      status = winner[0] === "Draw" ? winner[0] : "Winner: " + winner[0];
    } else {
      status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winnerSquares={winner[1]}
          />
        </div>
        <div className="game-info">
          <button onClick={() => this.setState({reversed: !this.state.reversed})}>reverse</button>
          <div>{status}</div>
          <ol>{this.state.reversed ? moves.reverse() : moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }

  for (let i = 0; i< squares.length; i ++) {
    if (!squares[i]) {
      return [null, []];
    }
  }
  return ['Draw', []];
}