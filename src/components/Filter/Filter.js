import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../Redux/filter/ContactFilterSelectors';
import { changeFilter } from '../../Redux/filter/ContactFilterActions';
import style from '../Filter/Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
        className={style.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz deCastelmore d'Artagnan и т. п."
        required
      ></input>
    </label>
  );
};

export default Filter;
