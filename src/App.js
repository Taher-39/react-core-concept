import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const students = ['Azim', 'Alim', 'Arif', 'Limon'];
  const players = [
    {name: 'Messi', age: 35, club: 'FCB'},
    {name: 'Neymar', age: 30, club: 'PSG'},
    {name: 'Ronaldo', age: 36, club: 'juv'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>React Core Concenpt</p>
        <Counter />
        <Users />
      <ul>
        {students.map(st => <li>{st}</li>)}
        {players.map(pl => <li>{pl.name}</li>)}
      </ul>  
        {/* <PlayerInfo player={players[0]}></PlayerInfo>
        <PlayerInfo player={players[1]}></PlayerInfo>
        <PlayerInfo player={players[2]}></PlayerInfo> */}
        {players.map(pl => <PlayerInfo player={pl}></PlayerInfo>)}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   // const newCount = count + 1;
  //   // setCount(newCount);
  //   setCount(count + 1)
  // };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => { if (count > 0) { setCount(count - 1)} }}>Hit Decrease</button><br/>
      {/* <button onClick={handleIncrease}>For Increase</button> */}
      <button onClick={() => setCount(count + 1)}>For Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h4>Dynamic Users:{users.length}</h4>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(us => <li>{us.name})</li> )
        }
        {/* {
          users.map(us => <li>{us.email})</li>)
        } */}
      </ul>
    </div>
  )
}
function PlayerInfo(props) {
  const boxStyle = {
    border: '2px solid gray',
    boxShadow:'2px 2px 5px lightgray',
    backgroundColor: 'lightgray',
    color: 'black',
    width: '200px',
    height: '250px',
    margin: '5px',
    borderRadius: '10px'
  }
  const {name, club, age} = props.player;
  return(
    <div style={boxStyle}>
      <h4>Name: {name}</h4>
      <h5>Club: {club}</h5>
      <p>Age: {age}</p>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
