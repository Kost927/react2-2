import React from 'react'
import PropTypes from 'prop-types';


const ContactsList = ({children}) => {
    return (
      <>
      <ul>
    {children}
        </ul>
      </>
    );
  };
  
  export default ContactsList;



  ContactsList.propTypes = {
    filteredContacts: PropTypes.node,

  };