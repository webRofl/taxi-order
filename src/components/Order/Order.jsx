import React from 'react';
import { formatDate } from '../../utils/date';

const Order = (props) => {
  const handleSubmit = () => {
    if (props.address.length === 0) {
      props.setError(1);
      return;
    }
    const clientInfo = {
      source_time: formatDate(),
      addresses: [
        {
          address: props.address,
          lat: props.lat,
          lon: props.lon,
        },
      ],
      crew_id: props.crew_id,
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
