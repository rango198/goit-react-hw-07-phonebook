import { IoIosSearch } from 'react-icons/io';
import { Input } from './Filter.styled';
import { getFilter, setFilter } from 'components/redux/filter-slice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
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
        value={filterName}
        placeholder="search"
        onChange={onChangeFilter}
      />
    </label>
  );
};
