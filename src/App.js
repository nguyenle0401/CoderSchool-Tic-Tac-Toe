import React, { Component } from "react";
import Board from "./components/Board";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen Le",
      nextPlayer: true, //true is X, false is O
      squareList: ["", "", "", "", "", "", "", "", ""],
      winner: "",
      history: [],
    };
  }
  setParentsState = (obj) => {
    this.setState(obj);
  };

  render() {
    return (
      <div>
        <h1> Tic Tac Toe</h1>
        <h3>User name : {this.state.username} </h3>
        <h1>Winner is:{this.state.winner} </h1>
        <ol>History</ol>
        <ol>Ranking</ol>
        <Board
          history={this.state.history}
          squareList={this.state.squareList}
          setParentsState={this.setParentsState}
          nextPlayer={this.state.nextPlayer}
          winner={this.state.winner}
        />
      </div>
    );
  }
}
