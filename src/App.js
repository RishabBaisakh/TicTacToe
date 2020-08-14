import React from "react";
// components
import TicTacToe from "./TicTacToeComponent/Game";
import InputComponent from "./InputComponent/Input";
import "./App.css";
import HeaderComponent from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [isGameActive, setGameActive] = React.useState(false);
  const [errorAlert, setErrorAlert] = React.useState({
    show: false,
    message: "",
  });
  const [state, setState] = React.useState({
    player1Name: "",
    player2Name: "",
    player1Symbol: "",
    player2Symbol: "",
  });

  return (
    <div className="container">
      <div className="row">
        <HeaderComponent />
      </div>
      <div className="row">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-9">
          {isGameActive ? (
            <TicTacToe
              player1={{ name: state.player1Name }}
              player2={{ name: state.player2Name }}
            />
          ) : (
            <div className="container">
              {errorAlert.show && (
                <div class="alert alert-danger" role="alert">
                  {errorAlert.message}
                </div>
              )}
              <div className="row">
                <div className="col-md-6">
                  <h5 className="text-center">Player 1 Info</h5>
                  <InputComponent
                    name={state.player1Name}
                    onNameChange={(e) => {
                      setState({ ...state, player1Name: e.target.value });
                    }}
                    onSymbolChange={(event) => {
                      setState({ ...state });
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="text-center">Player 2 Info</h5>
                  <InputComponent
                    name={state.player2Name}
                    onNameChange={(e) => {
                      setState({ ...state, player2Name: e.target.value });
                    }}
                    onSymbolChange={(event) => {
                      setState({ ...state });
                    }}
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setGameActive(true);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
