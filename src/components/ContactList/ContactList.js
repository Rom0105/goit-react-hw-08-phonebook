import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../Redux/contact-slice';
import { getvisibleContacts } from '../../Redux/contact-selectors';
import style from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <div className={style.div}>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={style.items}>
            {name}:<span className={style.number}>{number}</span>
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
