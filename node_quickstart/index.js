const { MongoClient } = require('mongodb');

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb+srv://kbrandon319_db_user:Opb0v9I5d5akjdGS@cluster0.zaeedjh.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);

