import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getGameDetail();
  }

  getRandomGame(randomGame) {
    var chars;
  }

  getGameDetail = () => {
    // var min = 1;      //Min result
    // var max = 364944; //Max results from RAWG.api

    var min = 3000; //More useable range of data
    var max = 4000; //Many games have missing values

    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    document.write("Random Number Generated : " + random);
    var randomString = random.toString();

    const url = "https://api.rawg.io/api/games/" + randomString; //Random Result
    // const url = "https://api.rawg.io/api/games/3498"; //GTA5

    function httpGetAsync(theUrl, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
      };
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.send(null);
    }

    httpGetAsync(url, text => {
      const data = JSON.parse(text);
      const name = data.name;
      const description = data.description;
      const metacritic = data.metacritic;
      const rating = data.rating;
      const released = data.released;
      const background_image = data.background_image;
      const website = data.website;
      const parent_platforms = data.parent_platforms;

      this.setState({
        name: name,
        description: description,
        metacritic: metacritic,
        rating: rating,
        released: released,
        background_image: background_image,
        website: website,
        parent_platforms: parent_platforms
      });
    });
  };

  render() {
    const name = this.state.name;
    const description = this.state.description;
    const metacritic = this.state.metacritic;
    const rating = this.state.rating;
    const released = this.state.released;
    const background_image = this.state.background_image;
    const website = this.state.website;
    const parent_platforms = this.state.parent_platforms;
    const outerWrapperStyle = {
      backgroundImage: "url(" + background_image + ")"
    };

    return (
      <div className="App">
        <div className="Blur-wrapper" />
        <header className="App-header">
          <div className="Outer-wrapper" style={outerWrapperStyle}>
            <div className="Inner-wrapper">
              <h2>{name}</h2>
              <h3>{metacritic}</h3>
              {rating > 0 && <h3>{rating}</h3>}

              <p>Released: {released}</p>
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <a>{website}</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
