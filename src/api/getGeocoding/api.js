import axios from 'axios';

export const getLocationCoordinates = (town) => {
  return axios
    .get(
      `https://geocode-maps.yandex.ru/1.x/?apikey=523e05cf-0e6a-4dc8-bd49-472701ed20d3&format=json&geocode=Ижевск+${town}&results=1
`
    )
    .then(
      (data) =>
        data.data.response.GeoObjectCollection.featureMember[0].GeoObject
    );
};

export const getLocationName = (lat, lon) => {
  return axios
    .get(
      `https://geocode-maps.yandex.ru/1.x/?apikey=523e05cf-0e6a-4dc8-bd49-472701ed20d3&format=json&geocode=${lon},${lat}&results=1`
    )
    .then(
      (data) =>
        data.data.response.GeoObjectCollection.featureMember[0].GeoObject.name
    );
};

export const getCars = (clientInfo) => {
  return [
    {
      code: 0,
      descr: 'OK',
      data: {
        crews_info: [
          {
            crew_id: 123,
            car_mark: 'Chevrolet',
            car_model: 'Lacetti',
            car_color: 'синий',
            car_number: 'Е234КУ',
            driver_name: 'Деточкин',
            driver_phone: '7788',
            lat: 56.855532,
            lon: 53.217462,
            distance: 300,
          },
          {
            crew_id: 125,
            car_mark: 'Hyundai',
            car_model: 'Solaris',
            car_color: 'белый',
            car_number: 'Ф567АС',
            driver_name: 'Петров',
            driver_phone: '8899',
            lat: 56.860581,
            lon: 53.209223,
            distance: 600,
          },
        ],
      },
    },
    {
      code: 0,
      descr: 'OK',
      data: {
        crews_info: [
          {
            crew_id: 126,
            car_mark: 'Chevrolet',
            car_model: 'Lacetti',
            car_color: 'красный',
            car_number: 'Е564НУ',
            driver_name: 'Деточкин',
            driver_phone: '7788',
            lat: 56.871836,
            lon: 53.228369,
            distance: 300,
          },
          {
            crew_id: 123,
            car_mark: 'BMW',
            car_model: 'F90',
            car_color: 'черный',
            car_number: 'Е564УК',
            driver_name: 'Деточкин',
            driver_phone: '7788',
            lat: 56.855532,
            lon: 53.217462,
            distance: 300,
          },
        ],
      },
    },
    {
      code: 0,
      descr: 'OK',
      data: {
        crews_info: [
          {
            crew_id: 125,
            car_mark: 'Hyundai',
            car_model: 'Solaris',
            car_color: 'белый',
            car_number: 'Ф567АС',
            driver_name: 'Петров',
            driver_phone: '8899',
            lat: 56.867171,
            lon: 53.201578,
            distance: 600,
          },
          {
            crew_id: 123,
            car_mark: 'Chevrolet',
            car_model: 'Lacetti',
            car_color: 'синий',
            car_number: 'Е234КУ',
            driver_name: 'Деточкин',
            driver_phone: '7788',
            lat: 56.855532,
            lon: 53.217462,
            distance: 300,
          },
        ],
      },
    },
    {
      code: 0,
      descr: 'OK',
      data: {
        crews_info: [
          {
            crew_id: 129,
            car_mark: 'Audi',
            car_model: 'RS7',
            car_color: 'серый',
            car_number: 'Н100АС',
            driver_name: 'Петров',
            driver_phone: '8899',
            lat: 56.861236,
            lon: 53.183454,
            distance: 600,
          },
          {
            crew_id: 123,
            car_mark: 'Renault',
            car_model: 'duster',
            car_color: 'черный',
            car_number: 'О456РЕ',
            driver_name: 'Деточкин',
            driver_phone: '7788',
            lat: 56.855532,
            lon: 53.217462,
            distance: 300,
          },
        ],
      },
    },
  ];
};
