import { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';

import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contactsStorage')) ?? contactsData
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactsStorage', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHendler = dataFromForm => {
    setContacts(s => [...s, { ...dataFromForm, id: nanoid() }]);
  };

  const getVisibleContacts = useMemo(() => {
    if (!filter) return contacts;
    else {
      const normaliseLowerCase = filter.toLowerCase();
      const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normaliseLowerCase)
      );
      return visibleContacts;
    }
  }, [filter, contacts]);

  const deteleContact = id => {
    setContacts(s => s.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Form onSubmitProp={formSubmitHendler} checkContacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts contacts={getVisibleContacts} detele={deteleContact} />
      </div>
    </>
  );
};

export default App;
