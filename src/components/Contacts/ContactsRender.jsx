const ContactsRender = ({ deleteContact, contact: [id, name, number] }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={deleteContact}>
        dell
      </button>
    </li>
  );
};

export default ContactsRender;
