class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoList: window.fakeVideoData, currentVideo: window.fakeVideoData[0], videoStats: window.fakeVideoData[0].statistics };
    this.clicker = this.clicker.bind(this);
    this.submit = this.submit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.updateVideoStats = this.updateVideoStats.bind(this);
    this.dSearch = _.debounce(this.props.searchYouTube, 500);
    this.dStats = _.debounce(this.props.getVideoStats, 500);
  }

  componentDidMount() {
    let options = { max: 5, query: 'BBoom BBoom', key: this.props.APIkey };
    let ourCB = (videos) => {
      this.setState({ videoList: videos, currentVideo: videos[0] });
      let singleVidOptions = { key: this.props.APIkey, id: videos[0].id.videoId, part: 'statistics' };
      this.props.getVideoStats(singleVidOptions, this.updateVideoStats);
    };
    this.props.searchYouTube(options, ourCB);
  }

  updateVideoStats(data) {
    this.setState({ videoStats: data.statistics });
  }

  clicker(clickedVideo) {
    this.setState({ currentVideo: clickedVideo });
  }

  handleUserInput(text) {
    let options = { max: 5, query: text, key: this.props.APIkey };
    let ourCB = (videos) => {
      return this.setState({ videoList: videos, currentVideo: videos[0] });
    };
    this.dSearch(options, ourCB);
  }

  submit(userInput) {
    let options = { max: 5, query: userInput, key: this.props.APIkey };
    let ourCB = (videos) => {
      return this.setState({ videoList: videos, currentVideo: videos[0] });
    };
    this.props.searchYouTube(options, ourCB);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search submit={this.submit} userInput={this.handleUserInput} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} videoStats={this.state.videoStats} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} click={this.clicker} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
