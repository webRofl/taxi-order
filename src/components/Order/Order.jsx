import React from 'react';
import { formatDate } from '../../utils/date';

const Order = (props) => {
  const handleSubmit = () => {
    const clientInfo = {
      source_time: formatDate(),
      addresses: [
        {
          address: props.locationName,
          lat: props.lat,
          lon: props.lon,
        },
      ],
    };
    props.loadCars();
    props.updateZoom(12);
    console.log(clientInfo);
  };

  return (
    <input
      onClick={handleSubmit}
      type="button"
      className="order_input"
      value="Заказать"
    />
  );
};

export default Order;
