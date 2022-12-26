import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CardItem from './components/CardItem/CardItem';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';



const App = () => {
  return (
    <div>
       <Header />

       {/* <Link to='/'>Home</Link>
       <br/>
       <Link to='/counter'>Counter</Link> */}

            <Routes>
                <Route path='/' element={<CardList />} />
                <Route path='/card-list/:id' element={<CardItem />} />

            </Routes>

    </div>
  );
};

export default App;