// TODO: Render the `App` component to the DOM

ReactDOM.render(
  <App searchYouTube={window.searchYouTube} APIkey={window.YOUTUBE_API_KEY} fakedata={window.fakeVideoData}/>, document.getElementById('app')
);