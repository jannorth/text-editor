import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    console.log('PUT to the database');
    
    const JATEDB = await openDB('jate', 1);
    
    const tx = JATEDB.transaction('jate', 'readwrite');
    
    const store = tx.objectStore('jate');
    
    const request = store.put({ id: 1, value: JSON.stringify(content) });
    
    try {
      const result = await request;
      console.log('result.value', result);
      return result;
    } catch (error) {
      console.error('Error putting data into idb', error);
    }
  };

  export const getDb = async () => {
    console.log('GET from the database');
    
    const JATEDB = await openDB('jate', 1);
    
    const tx = JATEDB.transaction('jate', 'readonly');
    
    const store = tx.objectStore('jate');
    
    const request = store.getAll();
    
    try {
      const result = await request;
      console.log('result.value', result);
      return JSON.parse(result[0].value);
    } catch (error) {
      console.error('Error getting data from idb', error);
    }
  };

initdb();
