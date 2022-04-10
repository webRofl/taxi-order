import React from 'react';
import { Formik, Field, Form } from 'formik';

const SearchField = (props) => {
  return (
    <Formik
      initialValues={{ town: '', street: '', house: '' }}
      onSubmit={(values) => {
        console.log(values.location);
        props.getMyLocation(values.town);
      }}
    >
      <Form>
        <Field placeholder="town" name="town" />
        <Field placeholder="street" name="street" />
        <Field placeholder="house" name="house" />
        <input type="submit" value="search" />
      </Form>
    </Formik>
  );
};

export default SearchField;
