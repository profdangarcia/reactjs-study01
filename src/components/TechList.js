import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component{
  //exemplo de utilização de propTypes e defaultProps para class components
  // static propTypes = {};
  // static defaultProps = {};

  //state é necessario que tenha esse nome
  state = {
    newTech: '',
    techs: [],
  };

  //CICLO DE VIDA DOS COMPONENTES

  //Executado assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({techs: JSON.parse(techs)});
    }
  }

  //Executado quando há alterações de props ou state
  componentDidUpdate(prevProps, prevState) {
    //this.props, this.state
    if(prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  //Executado quando o componente deixar de existir
  componentWillUnmount(){}



  handleInputChange = e => {
    this.setState({newTech: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  //remoção de item do estado
  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter( t => t !== tech) });
  };
  

  //método render é necessário em class components
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input 
          type = 'text' 
          onChange = { this.handleInputChange }
          value = { this.state.newTech }
        />
        <button type='submit'>Adicionar</button>
      </form>
    );
  }
}

export default TechList;

