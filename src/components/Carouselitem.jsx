import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Carouselitem.scss';
import playIcon from '../assets/static/carousel/iconos/icons8-play-64.png';
import plusIcon from '../assets/static/carousel/iconos/icono-mas.png';

const Carouselitem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={cover}
      alt={title}
    />
    <div className='carousel-item__details'>
      <div className='carousel-item__details--icons'>
        <img src={plusIcon} alt='Plus' />
        <img src={playIcon} alt='Play' />
      </div>
      <div className='carousel-item__details--info'>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  </div>
);

Carouselitem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,

};

export default Carouselitem;
