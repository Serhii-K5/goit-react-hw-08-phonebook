// import propTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div style={{textAlign: 'center'}}>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleChange: propTypes.func.isRequired,
// };