class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: this.props.fakedata,
      currentVideo: this.props.fakedata[0]
    };
    this.clicker = this.clicker.bind(this);
  }
  clicker(clickedVideo) {
    this.setState({currentVideo: clickedVideo});
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
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
