const VideoPlayerStats = (props) => {
  return (
    <div className="video-player-stats">
      <div>View Count: {props.videoStats.viewCount} Like Count: {props.videoStats.likeCount} Dislike Count: {props.videoStats.dislikeCount}</div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayerStats.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayerStats = VideoPlayerStats;