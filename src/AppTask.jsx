import { AppBar } from 'components/AppBar/AppBar';
import { Layout } from 'components/Layout/Layout';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { fetchTasks } from 'components/redux/taskOperations';
import { getError, getIsLoading } from 'components/redux/taskSelectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const AppTask = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>
    </div>
  );
};
