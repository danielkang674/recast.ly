var searchYouTube = (options, callback) => {
  let key, q, maxResults;
  [key, q, maxResults] = [options.key, options.query, options.max];
  let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${q}&maxResults=${maxResults}`;
  console.log(key, q, maxResults);
  // TODO
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    data: options
  })
    .done(function( msg ) {
      console.log( "Data Saved: ", msg );
    }).fail(function(msg) {
      console.log( "error", msg );
    });
};

window.searchYouTube = searchYouTube;
