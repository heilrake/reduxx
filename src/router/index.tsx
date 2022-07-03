import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import TodoPage from '../pages/TodoPage';
import UsersPage from '../pages/UsersPage';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="todos" element={<TodoPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
