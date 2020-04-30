import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import PreviewCard from './components/PreviewCard'
import pokemon from './components/pokemon'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
  state = {
    pokemon,
    name: "",
    score: 0,
    highScore: 0,
    clicked: []
  }

  clickImage = (id) =>{
    if(this.state.clicked.includes(id)){
      alert("You lose")
      this.resetScore();
    } else {
      this.state.clicked.push(id);
      this.incrementScore();
    }
  }

  incrementScore = () => {
    this.setState({score: this.state.score + 1});
    if (this.state.score >= this.state.highScore){
      this.setState({highScore: this.state.score + 1});
    }
  }

  resetScore = () => {
    this.setState({score: 0})
    this.setState({clicked: []});
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
