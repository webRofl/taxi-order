import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import classes from './Card.module.css';

const Card = (props) => {
  const clickHandler = (event) => {
    props.updatePlaceMark();
    props.getLocationNameThunk(
      event.originalEvent.target.geoObjects._map.getCenter()[0],
      event.originalEvent.target.geoObjects._map.getCenter()[1]
    );
  };

  const placeMarkForCrew = () => {
    return props.cars.map((car) => {
      const carInfo = car.data.crews_info;
      for (let i = 0; i < carInfo.length; i += 1) {
        return (
          <Placemark
            geometry={[carInfo[i].lat, carInfo[i].lon]}
            options={{ iconColor: 'green' }}
            key={carInfo[i].crew_id}
          />
        );
      }
    });
  };

  return (
    <YMaps>
      <Map
        state={{
          center: [props.lat, props.lon],
          zoom: props.zoom,
        }}
        className={classes.card__map}
        onClick={clickHandler}
      >
        {props.placeMark ? (
          <Placemark
            geometry={[props.lat, props.lon]}
            options={{ iconColor: 'yellow' }}
          />
        ) : null}
        {placeMarkForCrew()}
      </Map>
    </YMaps>
  );
};

export default Card;
