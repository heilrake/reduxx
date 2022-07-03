import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the club body</h1>
      <Outlet />
    </div>
  );
};

export default HomePage;
