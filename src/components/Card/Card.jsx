import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <YMaps>
      <div className={classes.j}>My awesome application with maps!</div>
      <Map
        state={{
          center: [props.lat, props.lon],
          zoom: 11,
        }}
        className={classes.map}
      >
        <Placemark geometry={[props.lat, props.lon]} />
      </Map>
    </YMaps>
  );
};

export default Card;
