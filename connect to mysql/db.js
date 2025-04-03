const mysql = require('mysql');

async function connect() {
  try {
    return new mysql({
      user: 'your_username',
      password: 'your_password',
      host: 'localhost',
      database: 'your_database'
    });
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error;
  }
}

const connection = await connect();

// Cleanup
() => {
  if (connection) {
    console.log('MySQL connection closed');
    connection.close();
  }
}(window);
