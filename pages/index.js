import "./reset.scss"
import "./style.scss"
import {TweenMax} from 'gsap';

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
          <a href="#" className="link">erica eso</a>
          <a href="#" className="link">ariel yelen</a>
          <a href="#" className="link">jack reynolds</a>
        </div>
        <div className="that-part thingz-i-made-at-shift-lab-ny">
          <p>thingz-i-made-at-shift-lab-ny</p>
          <a href="#" className="link-tow">uprise art</a>
          <a href="#" className="link-tow">aldrich art museum</a>
          <a href="#" className="link-tow">snap on mobile app</a>
          <a href="#" className="link-tow">airlift creative</a>
        </div>
        <div className="that-part thingz-i-made-for-clientz">
          <p>thingz-i-made-for-clientz</p>
          <a href="#" className="link-three">placeholder</a>
          <a href="#" className="link-three">woman in the cabinet</a>
        </div>
        <div className="that-part thingz-i-made-for-myself-and-for-you">
          <p>thingz-i-made-for-myself-and-for-you</p>
          <a href="#" className="link-four">website with the sound of its own making</a>
          <a href="#" className="link-four">javascript scrabble app</a>
          <a href="#" className="link-four">undecided.js</a>
          <a href="#" className="link-four">construction site</a>
          <a href="#" className="link-four">know thyself</a>
          <a href="#" className="link-four">mixtape app</a>
          <a href="#" className="link-four">sol lewitt - wall drawing #959 (4 the browser)</a>
        </div>
        <div className="that-part thingz-to-know">
          <p>thingz-to-know</p>
          <a href="#" className="link-five">website with the sound of its own making is for sale at Printed Matter</a>
          <a href="#" className="link-five">I am a masters candidate at ITP NYU</a>
          <a href="#" className="link-five">website with the sound of its own making is featured on Brutalist Websites</a>
        </div>
      </div>
    );
  }

  animate() {
    console.log('log')
    const link = document.getElementsByClassName('link');
    TweenMax.to(link, 20, {bezier:[{x:10, y:30}, {x:0, y:20}, {x:-30, y:20}, {x:15, y:0}], ease: 'Linear.easeNone', repeat: -1, yoyo:true});
    const linkTwo = document.getElementsByClassName('link-two');
    TweenMax.to(linkTwo, 20, {bezier:[{x:40, y:10}, {x:80, y:30}, {x:-40, y:60}, {x:25, y:15}], ease: 'Linear.easeNone', repeat: -1, yoyo:true});
    const linkThree = document.getElementsByClassName('link-three');
    TweenMax.to(linkThree, 20, {bezier:[{x:90, y:5}, {x:20, y:50}, {x:-10, y:10}, {x:15, y:45}], ease: 'Linear.easeNone', repeat: -1, yoyo:true});
    const linkFour = document.getElementsByClassName('link-four');
    TweenMax.to(linkFour, 20, {bezier:[{x:10, y:70}, {x:40 , y:20}, {x:-80, y:20}, {x:45, y:0}], ease: 'Linear.easeNone', repeat: -1, yoyo:true});
    const linkFive= document.getElementsByClassName('link-five');
    TweenMax.to(linkFive, 20, {bezier:[{x:60, y:90}, {x:0, y:80}, {x:-90, y:60}, {x:35, y:20}], ease: 'Linear.easeNone', repeat: -1, yoyo:true});
  }
}

function toggleSite() {
  this.setState({
    siteAnnoying: !this.state.siteAnnoying
  }, () => {
    this.animate();
  })
}

export default Index;
