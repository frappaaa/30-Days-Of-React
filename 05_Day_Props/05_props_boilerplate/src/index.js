import React from 'react'
import ReactDOM from 'react-dom'

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)



// Main Component
const Main = (props) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={props.techs} />
      </ul>
      <UserCard user={props.user} />
    </div>
  </main>
)


// The App, or the parent or the container component
// Functional Component
const App = () => {
  const user = {name:'Francesco', surname:'Luppi'}
  const techs = ['HTML', 'CSS', 'JavaScript']
  return (
    <div className='app'>
      <Main
        user={user}
        techs={techs}
      />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
