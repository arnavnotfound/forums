import React from 'react';
import ThreadList from '../components/ThreadList';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Forum</h1>
      <Link to="/create-thread">
        <button>Create Thread</button>
      </Link>
      <ThreadList />
    </div>
  );
};

export default HomePage;

