import logo from './logo.svg';
import './App.css';

function App() {
  var nameAndJobs={
    name:'Dr Jhankar Mahbub',
    job:"Programmer",
  }
  let student={
    name:'Fahad',
    class: '03',
    age: '07',

  }
  let style={
    color:'red',
    backgroundColor:'grey',
    padding:'15px'
  }
  let newStyle={
backgroundColor:'cyan'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>this is my first paragarap in react</p>
        <h3>this is {5+4}</h3>
        <p className='' style={style}> he is {nameAndJobs.name + ' '+nameAndJobs.job}</p>
        <h3 className='' style={style}>My student Name is {student.name} , he is  {student.age} year old. He reads in class {student.class}</h3>
        <h3 className='' style={{backgroundColor:'green'}}>My student Name is {student.name} , he is  {student.age} year old. He reads in class {student.class}</h3>
      </header>
    </div>
  );
}

export default App;
