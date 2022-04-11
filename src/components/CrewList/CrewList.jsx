import React from 'react';
import CrewElement from './CrewElement/CrewElement';
import classes from './CrewList.module.css';

const CrewList = (props) => {
  return (
    <div className={classes.crewList__wrapper}>
      {props.cars.map((car) => {
        const carInfo = car.data.crews_info;
        for (let i = 0; i < carInfo.length; i += 1) {
          return (
            <CrewElement
              name={carInfo[i].car_mark + ' ' + carInfo[i].car_model}
              color={carInfo[i].car_color}
              number={carInfo[i].car_number}
              distance={carInfo[i].distance}
              key={carInfo[i].crew_id}
            />
          );
        }
      })}
    </div>
  );
};

export default CrewList;
