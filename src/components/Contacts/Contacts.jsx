import React from 'react';
import ContactsRender from './ContactsRender';
import propTypes from 'prop-types';

const Contacts = ({ contacts, detele }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsRender
          key={id}
          contact={[id, name, number]}
          deleteContact={() => detele(id)}
        />
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  detele: propTypes.func.isRequired,
};

export default Contacts;
