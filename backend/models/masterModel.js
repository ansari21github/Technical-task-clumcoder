const masterModel = {
    getAll: async (db) => {
      const [rows] = await db.query('SELECT * FROM master');
      return rows;
    },
    create: async (db, name) => {
      await db.query('INSERT INTO master (name) VALUES (?)', [name]);
    },
  };
  
  export default masterModel;
  