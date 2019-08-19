import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddToDo';
import Todos from './components/Todos';
import {Provider} from './context';

function App() {
  return (
    <Provider>
    <div className="App-container">
  <Header></Header>
 <AddTodo></AddTodo>
 <Todos></Todos>
    </div>
    </Provider>
  );
}

export default App;
