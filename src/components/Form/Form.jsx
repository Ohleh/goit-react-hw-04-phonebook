import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  naneId = nanoid();
  numberId = nanoid();

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  formSubmit = ev => {
    const { name } = this.state;

    ev.preventDefault();
    if (
      this.props.checkContacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} - is already exists`);
    }
    this.props.onSubmitProp(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label htmlFor={this.naneId}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            key={this.naneId}
          />
        </label>
        <label htmlFor={this.numberId}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            key={this.numberId}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default Form;
