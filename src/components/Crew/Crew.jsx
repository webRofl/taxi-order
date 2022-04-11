import React from 'react';
import CrewCard from './CrewCard/CrewCard';
import classes from './Crew.module.css';

const Crew = (props) => {
  return (
    <div className={classes.crew__wrapper}>
      <span className={classes.crew__label}>Подходящий экипаж</span>
      <CrewCard {...props} />
    </div>
  );
};

export default Crew;
