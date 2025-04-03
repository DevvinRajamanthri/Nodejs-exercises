async function getData(id) {
    try {
      const result = await connection.query(`SELECT * FROM your_table ${id}`);
      return result.json({ limit: Infinity });
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  