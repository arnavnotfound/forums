import React from 'react';
import Thread from './Thread';
import { useThreadContext } from '../context/ThreadContext';

const ThreadList: React.FC = () => {
  const { threads } = useThreadContext();

  return (
    <div>
      {threads.map((thread, index) => (
        <Thread key={index} {...thread} upvotes={0} downvotes={0} comments={0} />
      ))}
    </div>
  );
};

export default ThreadList;
