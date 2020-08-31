import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
    // return <h1>movie List</h1>
    return(
        <div className='container-fluid'>
            <nav className='navbar bg-info sticky-top'>
               <h2 className='text-warning font-weight-bold'> movieList</h2>
            </nav>
            <List />;
        </div>
    ) 
}

ReactDOM.render(<App />, document.getElementById('root'));
