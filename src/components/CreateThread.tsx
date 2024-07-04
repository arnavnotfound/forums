import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThreadContext } from '../context/ThreadContext';

const CreateThread: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { addThread } = useThreadContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addThread({ title, content });
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default CreateThread;
