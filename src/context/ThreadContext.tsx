import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Thread {
  title: string;
  content: string;
}

interface ThreadContextType {
  threads: Thread[];
  addThread: (thread: Thread) => void;
}

const ThreadContext = createContext<ThreadContextType | undefined>(undefined);

export const ThreadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [threads, setThreads] = useState<Thread[]>([]);

  const addThread = (thread: Thread) => {
    setThreads((prevThreads) => [...prevThreads, thread]);
  };

  return (
    <ThreadContext.Provider value={{ threads, addThread }}>
      {children}
    </ThreadContext.Provider>
  );
};

export const useThreadContext = () => {
  const context = useContext(ThreadContext);
  if (!context) {
    throw new Error('useThreadContext must be used within a ThreadProvider');
  }
  return context;
};
