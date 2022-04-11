import React from 'react';
import classes from './CrewCard.module.css';
import carIcon from '../../../assets/images/car-icon50.png';
import { useEffect } from 'react';
import { useState } from 'react';

const CrewCard = (props) => {
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    if (props.cars.length !== 0) {
      setCarInfo(props.cars[0].data.crews_info[0]);
    }
  }, [props.cars]);

  return (
    <div className={classes.crewCard__container}>
      {carInfo ? (
        <>
          <div className={classes.crewCard__iconWrapper}>
            <img src={carIcon} alt="car-icon" />
          </div>
          <div className={classes.crewCard__infoBlock}>
            <span className={classes.crewCard__carName}>
              {carInfo.car_mark + ' ' + carInfo.car_model}
            </span>
            <span className={classes.crewCard__carColor}>
              {carInfo.car_color}
            </span>
            <span className={classes.crewCard__carNumber}>
              {carInfo.car_number}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CrewCard;
