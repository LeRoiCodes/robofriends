import React, {useState, useEffect} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
// import {robots} from './robots'
import "./app.css"
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'

function App() {
    const [robotsArray, setRobots] = useState([])
    const [searchField,  setSearchField] = useState('')
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()
      )
      .then(
      data => setRobots(data)
        )
    },[])

    const onSearchChange = (e) => {
        // console.log(e.target.value)
        setSearchField(e.target.value)
    }
    const filteredRobots = robotsArray.filter(robotsArray => {
      return robotsArray.name.toLowerCase().includes(searchField.toLowerCase())
    // console.log(robotsArray)
  })
    if( !robotsArray.length){
      return <h1 className='tc'>Loading</h1>
    } else{
      return (
    <div className='tc'>
        <h1 className='f2'> RoboFriends</h1>
        <SearchBox onSearchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
          
        </Scroll>
        
    </div>
  )
    }
  
}

export default App