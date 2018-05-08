import React, { Component } from "react";
import PicProfiles from "./components/PicProfiles";
import Nav from "./components/Nav";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import "./App.css";

function shufflePresidents(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    pictures,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  // Click 
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // Count
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  // Shuffle
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Impeached!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPresidents = shufflePresidents(pictures);
    this.setState({ Presidents: shuffledPresidents });
  };

  // Push
  render() {
    return (
      <Wrapper>
        <Nav
          title="Click A Prez!"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Container>
          <Row>
            {this.state.pictures.map(friend => (
              <Column size="md-3 sm-6">
                <PicProfiles
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
        {/* <Title>
          
        </Title> */}
      </Wrapper>
    );
  }
}

export default App;