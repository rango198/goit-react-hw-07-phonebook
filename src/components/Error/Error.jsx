import { selectError } from 'components/redux/selects';
import { useSelector } from 'react-redux';

export const Error = () => {
  const error = useSelector(selectError);

  return (
    <div>
      <p>We're sorry, {error}</p>
    </div>
  );
};
