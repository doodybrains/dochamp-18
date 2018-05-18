import "./reset.scss"
import "./style.scss"

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      siteAnnoying: false
    };
  }

  render() {
    const buttonText = this.state.siteAnnoying ? "this website is annoying" : "this website is boring";
    const buttonClass = this.state.siteAnnoying ? "annoying" : "boring";

    return (
      <div className={buttonClass}>
        <h1>emma rae norton aka "doodybrains"</h1>
        <img className="gif" src={require('../static/wow.gif')} />
        <button onClick={toggleSite.bind(this)}>{buttonText}</button>

        <div className="that-part thingz-i-made-for-friendz">
          <p>thingz-i-made-for-friendz</p>
          <a href="#">erica eso</a>
          <a href="#">ariel yelen</a>
          <a href="#">jack reynolds</a>
          <a href="#"></a>
        </div>
        <div className="that-part thingz-i-made-at-work-for-clientz">
          <p>thingz-i-made-at-work-for-clientz</p>
          <a href="#">uprise art</a>
          <a href="#">aldrich art museum</a>
          <a href="#">snap on mobile app</a>
          <a href="#">airlift creative</a>
        </div>
        <div className="that-part thingz-i-made-for-clientz-of-friendz-or-friendz-of-clientz">
          <p>thingz-i-made-for-clientz-of-friendz-or-friendz-of-clientz</p>
          <a href="#">placeholder</a>
          <a href="#">woman in the cabinet</a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
        <div className="that-part thingz-i-made-for-myself-and-for-you">
          <p>thingz-i-made-for-myself-and-for-you</p>
          <a href="#">website with the sound of its own making</a>
          <a href="#">javascript scrabble app</a>
          <a href="#">undecided.js</a>
          <a href="#">construction site</a>
          <a href="#">know thyself</a>
          <a href="#">mixtape app</a>
          <a href="#">sol lewitt - wall drawing #959 (4 the browser)</a>
        </div>
        <div className="that-part thingz-i-want-you-to-know-about">
          <p>thingz-i-want-you-to-know-about</p>
          <a href="#">website with the sound of its own making is for sale at Printed Matter</a>
          <a href="#">website with the sound of its own making is for sale through Rhizome at the Internet Yama-Ichi</a>
          <a href="#">website with the sound of its own making is featured on Brutalist Websites</a>
          <a href="#">I am a masters candidate at NYU ITP :-) </a>
        </div>
      </div>
    );
  }
}

function toggleSite() {
  this.setState({
    siteAnnoying: !this.state.siteAnnoying
  })
}

export default Index;
