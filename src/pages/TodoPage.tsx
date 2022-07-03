import { Box, Button } from '@mui/material';
import { FC, useEffect } from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoPage: FC = () => {
  const { page, todos, limit } = useTypedSelector((state) => state.todo);

  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box>
        <Table sx={{ padding: '30px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos &&
              todos.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell align="center">{item.title}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {pages.map((page, index) => (
            <Button onClick={() => setTodoPage(page)} key={index} variant="outlined">
              {page}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TodoPage;
