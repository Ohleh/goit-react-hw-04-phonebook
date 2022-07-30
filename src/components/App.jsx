import { useState } from 'react';
import { nanoid } from 'nanoid';

import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';
import { useMemo } from 'react';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [filter, setFilter] = useState('');
  console.log(filter);

  const formSubmitHendler = dataFromForm => {
    setContacts(s => [...s, { ...dataFromForm, id: nanoid() }]);
  };
  //
  //
  //
  const getVisibleContacts = useMemo(() => {
    if (!filter) return contacts;
    else {
      const ccc = contacts.map(contactName =>
        contactName.name.includes(filter)
      );
      // let visibleTodos = contacts.filter(contactName => {
      //   contactName.name.includes(filter);
      // });
      console.log(ccc);
      // return visibleTodos;
      return ccc;
    }
  }, [filter, contacts]);
  //
  //
  //
  const deteleContact = id => {
    setContacts(s => s.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('memory');
  //   const parsedContacts = JSON.parse(contacts);

  //   //якщо сховище порожнє то щоб не прочитати null при маунті, робимо перевірку на наявність
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('memory', JSON.stringify(this.state.contacts));
  //   }
  // }

  // render() {
  // const { contacts, filter } = this.state;

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
  // }
};

export default App;

//
// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// import Contacts from './Contacts';
// import Form from './Form';
// import Filter from './Filter';

// class App extends Component {
//   const (contacts) = use
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   formSubmitHendler = dataFromForm => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { ...dataFromForm, id: nanoid() }],
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   getVisibleTodos = () => {
//     const { contacts, filter } = this.state;

//     const normaliseLowerCase = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normaliseLowerCase)
//     );
//   };

//   deteleContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('memory');
//     const parsedContacts = JSON.parse(contacts);

//     //якщо сховище порожнє то щоб не прочитати null при маунті, робимо перевірку на наявність
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('memory', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;

//     const visibleTodos = this.getVisibleTodos();
//     return (
//       <>
//         <div>
//           <h2>Phonebook</h2>
//           <Form
//             onSubmitProp={this.formSubmitHendler}
//             checkContacts={contacts}
//           />
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.changeFilter} />
//           <Contacts contacts={visibleTodos} detele={this.deteleContact} />
//         </div>
//       </>
//     );
//   }
// }

// export default App;