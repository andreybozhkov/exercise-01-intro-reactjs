import React from 'react';
import '../style/App.css';
import ContactList from './contacts.json';

const showContact = contact => (
  <div class="contact" data-id="id">
    <span class="avatar small">&#9787;</span>
    <span class="title">{contact.firstName} {contact.lastName}</span>
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
  <div class="container">
    <header>&#9993; Contact Book</header>
      <div id="book">
        <div id="list">
          <h1>Contacts</h1>
            <div class="content">
              {renderContacts()};
            </div>
        </div>
        <div id="details">
          <h1>Details</h1>
            <div class="content">
                <div class="info">
                    <div class="col">
                        <span class="avatar">&#9787;</span>
                    </div>
                    <div class="col">
                        <span class="name">Ivan</span>
                        <span class="name">Ivanov</span>
                    </div>
                </div>
                <div class="info">
                    <span class="info-line">&phone; 0887 123 456</span>
                    <span class="info-line">&#9993; i.ivanov@gmail.com</span>
                </div>
            </div>
        </div>
      </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
);

export default App;
