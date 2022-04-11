import React from 'react';
import classes from './CrewElement.module.css';
import carIcon from '../../../assets/images/car-icon50.png';

const CrewElement = (props) => {
  return (
    <div className={classes.crewElement__container}>
      <img
        src={carIcon}
        alt="car icon"
        className={classes.crewElement__carIcon}
      />
      <div className={classes.crewElement__carInfoBlock}>
        <span className={classes.crewElement__carName}>{props.name}</span>
        <span className={classes.crewElement__carColor}>{props.color}</span>
      </div>
      <span className={classes.crewElement__distance}>{props.distance} м</span>
      <span className={classes.CrewElement__arrowRight}>❯</span>
    </div>
  );
};

export default CrewElement;
