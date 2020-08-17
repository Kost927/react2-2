import React from 'react';
import PropTypes from 'prop-types';

const ContactsListItem = ({filteredContacts, removePhone }) => {
  return (
    <>
      {filteredContacts.map(contact => (
        <li key={contact.id} name="name">
          {contact.name}: {contact.number}
          <button type="button" onClick={() => removePhone(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactsListItem;

ContactsListItem.propTypes = {
    filteredContacts: PropTypes.func,
    removePhone: PropTypes.func,

  };
