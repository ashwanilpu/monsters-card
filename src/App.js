import React, { Component } from 'react';
import './App.css';
import Cardlist from './component/Cardlist.js';
import SearchBox from './component/SearchBox';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      searchTerm: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(data=>this.setState({monsters:data}));
  }
  render(){
   const {monsters,searchTerm}=this.state;
   const filterMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return( 
      <div className="App">
        <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="search for monsters" handleChange={e =>
            this.setState({searchTerm : e.target.value})} />
        <Cardlist monsters={filterMonsters}/> 
    </div>
    );
  }

}

export default App;
