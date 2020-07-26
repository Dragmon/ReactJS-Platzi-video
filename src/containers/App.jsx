/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialSatate';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  console.log('info api');
  console.log('initialState', Object.keys(initialState));
  console.log('long initialState :', Object.keys(initialState).length);
  console.log(initialState.mylist);
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi Lista'>
        <Carousel>
          {Object.keys(initialState).length === 0 ? <h1>Loading ... </h1> : initialState.mylist.map((item) => <Carouselitem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {Object.keys(initialState).length === 0 ? <h1>Loading ... </h1> : initialState.trends.map((item) => <Carouselitem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {Object.keys(initialState).length === 0 ? <h1>Loading ... </h1> : initialState.originals.map((item) => <Carouselitem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
