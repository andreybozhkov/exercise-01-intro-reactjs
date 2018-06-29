import React from 'react';
import '../style/App.css';
import ContactList from './contacts.json';
import reRender from '../index';

let contactIndex = 0;

let selectContact = contact => (
  <div className="content">
    <div className="info">
        <div className="col">
            <span className="avatar">&#9787;</span>
        </div>
        <div className="col">
            <span className="name">{contact.firstName}</span>
            <span className="name">{contact.lastName}</span>
        </div>
    </div>
    <div className="info">
        <span className="info-line">&phone; {contact.phone}</span>
        <span className="info-line">&#9993; {contact.email}</span>
    </div>
  </div>
);


const displaySelectContact = index => {
  contactIndex = index;
  reRender(App(), document.getElementById('root'));
};

const showContact = (contact, currentIndex) => (
  <div className="contact" key={contact.email} data-id="id" onClick={event => displaySelectContact(currentIndex, event)}>
    <span className="avatar small">&#9787;</span>
    <span className="title">{contact.firstName} {contact.lastName}</span>
  </div>
);

const renderContacts = () => {
  const finalList = [];
  for (let contact of ContactList) {
    finalList.push(showContact(contact, finalList.length));
  }

  return finalList;
}

const App = () => (
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
            {selectContact(ContactList[contactIndex])}
        </div>
      </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
);

export default App;
