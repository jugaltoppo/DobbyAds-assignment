import React, { Component, useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const App = () => {

  const storeUser = useSelector(state => state);
  const dispatch = useDispatch();

  let [userData, setUserQuery] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  
  const fetchdata = () => { 
    fetch(`https://api.github.com/search/users?q=${searchQuery}`)
    .then((body) => {
      return body.json();
    })
    .then((data) => {
      console.log(data);
      setUserQuery(data.items)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    fetchdata()
  }, [searchQuery]);
  
  const newQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const storedata = () => {
    dispatch({
      type: "store",
      payload: userData
    })
  }
  
  return (
    <div>
    <h1>User search results</h1>
    <input type="text" onChange={newQuery} value={searchQuery}></input>
    <button onClick={storedata}>Store User Details</button>
  <h3>{ console.log(storeUser)}</h3>
    {userData ? userData.map((n, i) => {
      return (
        <div key={i}>
        <p>{n.login}</p>
        <img src={n.avatar_url} style={{height: "100px"}}></img>
        <p><a href={n.url}>{n.login}'s profile</a></p>
        <p><a href={n.repos_url}>{n.login}'s repositories</a></p>
        <hr></hr>
        </div>);
      }) : <p>type something</p>
    }
    </div>
    );
  }
  
  
  
  
  // class App extends Component {
  //   render() {
  //     return 
  //   }
  // }
  
  export default App;
  