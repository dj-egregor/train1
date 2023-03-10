import { useSelector } from 'react-redux';
import { Grid } from 'components';
import { GridItem } from 'components';
import { Todo } from 'components';
import { getTodos } from 'redux/selectors';

const TodoList = () => {
  const todos = useSelector(getTodos);

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
              // onClick={deleteTodo}
            />
          </GridItem>
        ))}
    </Grid>
  );
};

export default TodoList;
