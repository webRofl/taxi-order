import axios from 'axios';

// написать фунцию которая пробразует строку в нужный формат (word, word, word => word+word+word)

export const getLocationCoordinates = (town) => {
  return axios
    .get(
      `https://geocode-maps.yandex.ru/1.x/?apikey=523e05cf-0e6a-4dc8-bd49-472701ed20d3&format=json&geocode=${town}
`
    )
    .then(
      (data) =>
        data.data.response.GeoObjectCollection.featureMember[0].GeoObject
    );
};
