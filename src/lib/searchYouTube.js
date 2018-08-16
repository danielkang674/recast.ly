var searchYouTube = (options, callback) => {
  let maxResults, part, q, type, key;
  [maxResults, part, q, type, key] = [options.max, 'snippet', options.query, 'video', options.key];
  let newOptions = { maxResults: maxResults, part: part, q: q, type: type, key: key };
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search?",
    data: newOptions
  })
    .done(function (videos) {
      callback(videos.items);
    })
    .fail(function (videos) {
      console.log("error", videos);
    });
};

window.searchYouTube = searchYouTube;
