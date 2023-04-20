
// Export a function we will use to GET to the database.
export const getDb = async () => {
    console.log('GET from the database');
  
    // Create a connection to the database database and version we want to use.
    const jateDB = await openDB('jate', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const tx = jateDB.transaction('jate', 'readonly');
  
    // Open up the desired object store.
    const store = tx.objectStore('jate');
  
    // Use the .getAll() method to get all data in the database.
    const request = store.getAll();
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result.value;
  };

  export const putDb = async (content) => {
    console.log('GET from the database');
  
    // Create a connection to the database database and version we want to use.
    const jateDB = await openDB('jate', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const tx = jateDB.transaction('jate', 'readwrite');
  
    // Open up the desired object store.
    const store = tx.objectStore('jate');
  
    // Use the .getAll() method to get all data in the database.
    const request = store.put({ id: 1, value: content });
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    // return result.value;
  };