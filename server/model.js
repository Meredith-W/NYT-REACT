var articleSchema = new mongoose.Schema({
  title: {
    type: String
    },
  date: {
    type: Date
    },
  url: {
    type: String
    }
});

// Compile a 'Article' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Article' for these documents.
var Article = mongoose.model('Article', articleSchema);

module.exports = Article;