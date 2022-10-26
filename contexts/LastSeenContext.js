import { createContext, useState } from 'react';

export const LastSeenContext = createContext([]);

export function LastSeenProvider({ children }) {
  const [lastSeen, setLastSeen] = useState([]);
  

  function newLastSeen(media) {

      if (lastSeen.length < 5) {
        let newList = lastSeen;
        newList.push(media);
        setLastSeen(newList);
      } else {
        let newList = lastSeen;
        newList.shift(); // Removes first item; oldest one.
        newList.push(media);
        setLastSeen(newList);
      }
    
  }

  return <LastSeenContext.Provider value={{ lastSeen, newLastSeen }}>{children}</LastSeenContext.Provider>;
}
