import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  handleSubmit,
  name,
  addContact,
  filter,
  chengeFilter,
  number,
}) => {
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input type="text" value={name} name="name" onChange={addContact} />
        </label>

        <label>
          Number:{' '}
          <input
            type="tel"
            value={number}
            name="number"
            onChange={addContact}
          />
        </label>

        <button type="submit">Add contacts</button>
      </form>

      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <label>
        Filter:{' '}
        <input
          type="text"
          value={filter}
          name="filter"
          onChange={chengeFilter}
        />
      </label>
    </>
  );
};

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  addContact: PropTypes.func,
  filter: PropTypes.string,
  chengeFilter: PropTypes.func,
  number: PropTypes.string,
};
