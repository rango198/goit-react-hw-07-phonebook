import { IoIosSearch } from 'react-icons/io';
import { Input } from './Filter.styled';
import { filterSet } from 'components/redux/filter-slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'components/redux/selects';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(selectFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <label>
      <div>
        <IoIosSearch />
        Find contacts by name
      </div>
      <Input
        type="text"
        name="filter"
        value={filterPhoneBook}
        placeholder="search"
        onChange={onChangeFilter}
      />
    </label>
  );
};
