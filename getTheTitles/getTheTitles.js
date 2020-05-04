const getTheTitles = function(books) {
  function grabBooks(item) {
    return [item.title].join(", ");
  }
  let onlyBooks = books.map(grabBooks);
  return onlyBooks;
}

module.exports = getTheTitles;
