const getVideoStats = (options, callback)=>{
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: options
  })
    .done((video)=>{
      console.log(video.items[0]);
      callback(video.items[0]);
    })
    .fail(video=>{
      console.error('Failed to get video', video);
    });
};