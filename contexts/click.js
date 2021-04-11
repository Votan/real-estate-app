import { createContext, useState } from 'react';

const ClickContext = createContext([]);

export const ClickProvider = ({ children }) => {
  const [clickHouse, setClickHouse] = useState([]);

  return (
    <ClickContext.Provider value={[clickHouse, setClickHouse]}>
      {children}
    </ClickContext.Provider>
  );
}

export default ClickContext;