import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

class ContactCard extends Component {
  render() {
    const { contact, getPerson } = this.props;
    return (
      <div className="contact-card">
        {/* <p className="card-title">{contact.fullName}</p> */}
        <div className="card-text">
        {/* <p>
             Name:
          </p>
          <p>{contact.fullName}</p>
        <p>
             Email:
          </p>
          <p>{contact.email}</p>
          <p>
             Phone:
          </p>
          <p>{contact.mobile}</p>
          <p>
             City:
          </p>
          <p>{contact.city}</p> */}
          
          <Link to="/edit-contact">
            <input
              type="button"
              value="Edit"
              className="edit-button"
              onClick={() => getPerson(contact, true)}
            />
          </Link>
          <input type="button" value="Delete" className="edit-button" />
        </div>
       
    
      </div>
      
    );
  }
}
export default ContactCard;



{/* <div className="contact-card">
        <p className="card-title">{contact.fullName}</p>
        <div className="card-text">
        <p>
             Name:
          </p>
          <p>{contact.fullName}</p>
        <p>
             Email:
          </p>
          <p>{contact.email}</p>
          <p>
             Phone:
          </p>
          <p>{contact.mobile}</p>
          <p>
             City:
          </p>
          <p>{contact.city}</p>
          
        </div>
        <div className="buttons">
          <Link to="/edit-contact">
            <input
              type="button"
              value="Edit"
              className="edit-button"
              onClick={() => getPerson(contact, true)}
            />
          </Link>
          <input type="button" value="Delete" className="edit-button" />
        </div>
    
      </div> */}








{/* <div className="contact-card">
        <h4 className="card-title">{contact.fullName}</h4>
        <div className="card-text">
        <h4>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </h4>
          <p>{contact.email}</p>
          <h4>
            <FontAwesomeIcon icon={faMobileAlt} /> Phone:
          </h4>
          <p>{contact.mobile}</p>
          <h4>
            <FontAwesomeIcon icon={faMobileAlt} /> City:
          </h4>
          <p>{contact.city}</p>
          
        </div>
        <div className="buttons">
          <Link to="/edit-contact">
            <input
              type="button"
              value="Edit"
              className="edit-button"
              onClick={() => getPerson(contact, true)}
            />
          </Link>
          <input type="button" value="Delete" className="edit-button" />
        </div>
    
      </div> */}