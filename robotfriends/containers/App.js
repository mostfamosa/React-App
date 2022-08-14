import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import './App.css'


class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots: [],
            Searchfield: ''
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{this.setState({robots:users});
    });
    
}

    onSearchChange = (event1) => {
        this.setState({ Searchfield: event1.target.value })
    }



    render(){
        const {robots,Searchfield}=this.state;
        const filteredrobots=robots.filter(robot =>{
            return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1 className='tc'>Loading...</h1> :
        
        (
            //------------------------------------------------
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredrobots}/>
                </Scroll>
            </div>
        );
       
    }
}
export default App; 