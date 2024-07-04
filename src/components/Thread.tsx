import React from 'react';

interface ThreadProps {
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
  comments: number;
}

const Thread: React.FC<ThreadProps> = ({ title, content, upvotes, downvotes, comments }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <button>Upvote ({upvotes})</button>
        <button>Downvote ({downvotes})</button>
        <button>Comments ({comments})</button>
      </div>
    </div>
  );
};

export default Thread;
