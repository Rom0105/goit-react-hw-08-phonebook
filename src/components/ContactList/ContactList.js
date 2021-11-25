import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contact-slice';
import { getvisibleContacts } from '../../Redux/contact-selectors';
import style from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <div className={style.div}>
      <ul>
        {visibleContacts.map(({ id, name, phone }) => (
          <li key={id} className={style.items}>
            {name}:<span className={style.number}>{phone}</span>
            <button
              className={style.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
