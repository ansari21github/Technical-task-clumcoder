const detailModel = {
    getAll: async (db) => {
      const [rows] = await db.query(`
        SELECT d.id, d.question, m.name AS category 
        FROM detail d 
        JOIN master m ON d.category_id = m.id
      `);
      return rows;
    },
    create: async (db, question, categoryId) => {
      await db.query('INSERT INTO detail (question, category_id) VALUES (?, ?)', [question, categoryId]);
    },
  };
  
  export default detailModel;
  