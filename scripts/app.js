$(document).ready(function() {
  const BOOK_URL = 'https://sm-greads-api.herokuapp.com/api/v1/books';
  const getBooks = () => $.get(BOOK_URL)

  getBooks().then(showBooks)

});

const showBooks = (books) => {
  const source = $('#books-template').html()
  const template = Handlebars.compile(source)
  const html = template({
    books
  })
  console.log(html);
  $('#book-list-items').append(html)
}
