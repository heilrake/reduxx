import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <h1>BMW TOP</h1>
      <Outlet />
    </div>
  );
};

export default HomePage;
