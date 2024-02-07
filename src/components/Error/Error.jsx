import { getError } from 'components/redux/contacts-slice';
import { useSelector } from 'react-redux';

export const Error = () => {
  const error = useSelector(getError);

  return (
    <div>
      <p>We're sorry, {error}</p>
    </div>
  );
};
