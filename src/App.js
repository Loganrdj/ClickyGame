import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import PreviewCard from './components/PreviewCard'
import pokemon from './components/pokemon'
import Nav from './components/Nav'
import './App.css';
const shuffle = require('shuffle-array')

class App extends Component {
  state = {
    pokemon,
    name: "",
    score: 1,
    highScore: 0,
    clicked: []
  }

  clickImage = (id) =>{
    console.log(this.state.score);
    if(this.state.clicked.includes(id)){
      alert("You have lost. Please try again! Make sure to only click each picture once!")
      this.resetScore();
      this.shuffleArray();
    } else {
      this.state.clicked.push(id);
      this.incrementScore();
      this.shuffleArray();
    }
  }

  incrementScore = () => {
    this.setState({score: this.state.score + 1});
    if (this.state.score >= this.state.highScore){
      this.setState({highScore: this.state.score + 1});
    }
    if (this.state.score === 12){
      alert("You've won! Congratulations! I don't have anything to offer you, unfortunately.. Have a virtual high-five! *Smack*")
      this.resetScore();
    }
  }

  resetScore = () => {
    this.setState({score: 0})
    this.setState({clicked: []});
    this.shuffleArray();
  }

  shuffleArray = () => {
    shuffle(this.state.pokemon);
  }
  
  render(){
    return (
     <div>
     <Nav score={this.state.score} highScore={this.state.highScore}></Nav>
     <Wrapper>
      {this.state.pokemon.map(pokemon => (
          <PreviewCard name={pokemon.name} key={pokemon.id} ID={pokemon.id} image={pokemon.image} clicked={this.clickImage}></PreviewCard>
      ))}
      </Wrapper>
      </div>
    );
  }
  
}

export default App;
