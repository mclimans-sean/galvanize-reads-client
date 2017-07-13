$(document).ready(function () {
  const BOOK_URL = 'https://sm-greads-api.herokuapp.com/api/v1/books';

  $('#create-book').click(function(event) {
    event.preventDefault();
    let data = {
      title: $("input[id='inputTitle']").val(),
      genre: $("input[id='inputGenre']").val(),
      description: $("textarea[id='inputDesc']").val(),
      cover_url: $("input[id='inputCoverURL']").val()
    };

    console.log(data);

    $.post(BOOK_URL, data, function(response) {
      window.location.replace('./books.html')
    })
  })
})
