import React from 'react';
import '../style/App.css';
import ContactList from './contacts.json';

const showContact = contact => (
  <div className="contact" key={contact.email} data-id="id">
    <span className="avatar small">&#9787;</span>
    <span className="title">{contact.firstName} {contact.lastName}</span>
  </div>
);

const renderContacts = () => {
  const finalList = [];
  for (let contact of ContactList) {
    finalList.push(showContact(contact));
  }

  return finalList;
}

const App = (
  <div className="container">
    <header>&#9993; Contact Book</header>
      <div id="book">
        <div id="list">
          <h1>Contacts</h1>
            <div className="content">
              {renderContacts()};
            </div>
        </div>
        <div id="details">
          <h1>Details</h1>
            <div className="content">
                <div className="info">
                    <div className="col">
                        <span className="avatar">&#9787;</span>
                    </div>
                    <div className="col">
                        <span className="name">Ivan</span>
                        <span className="name">Ivanov</span>
                    </div>
                </div>
                <div className="info">
                    <span className="info-line">&phone; 0887 123 456</span>
                    <span className="info-line">&#9993; i.ivanov@gmail.com</span>
                </div>
            </div>
        </div>
      </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
);

export default App;
