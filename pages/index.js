import "./reset.scss"
import "./style.scss"
import {TweenMax} from 'gsap';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      siteAnnoying: false,
      showDude: false
    };
  }

  render() {
    const buttonText = this.state.siteAnnoying ? "this website is annoying" : "this website is boring";
    const buttonClass = this.state.siteAnnoying ? "annoying" : "boring";
    const dudeClass = this.state.showDude ? "show" : "";

    return (
      <div className={buttonClass}>
        <h1>emma "doodybrains" rae norton</h1>
        <img className={`gif ${dudeClass}`} src={require('../static/wow.gif')} />
        <button onClick={toggleSite.bind(this)}>{buttonText}</button>

        <div className="that-part thingz-i-made-for-friendz">
          <p>sites-made-recently</p>
          <a href="#" className="link-three"><span>placeholder</span></a>
          <a href="#" className="link"><span>erica eso</span></a>
          <a href="#" className="link-three"><span>woman in the cabinet</span></a>
          <a href="#" className="link"><span>ariel yelen</span></a>
          <a href="#" className="link"><span>jack reynolds</span></a>
        </div>
        <div className="that-part thingz-i-made-at-shift-lab-ny">
          <p>sites-made-at-shift-lab-ny</p>
          <a href="#" className="link-tow"><span>uprise art</span></a>
          <a href="#" className="link-tow"><span>aldrich art museum</span></a>
          <a href="#" className="link-tow"><span>snap on mobile app</span></a>
          <a href="#" className="link-tow"><span>airlift creative</span></a>
        </div>
        <div className="that-part thingz-i-made-for-myself-and-for-you">
          <p>sites-made-for-myself-and-for-you</p>
          <a href="#" className="link-four"><span>website with the sound of its own making</span></a>
          <a href="#" className="link-four"><span>javascript scrabble app</span></a>
          <a href="#" className="link-four"><span>undecided.js</span></a>
          <a href="#" className="link-four"><span>construction site</span></a>
          <a href="#" className="link-four"><span>know thyself</span></a>
          <a href="#" className="link-four"><span>mixtape app</span></a>
          <a href="#" className="link-four"><span>sol lewitt - wall drawing #959 (4 the browser)</span></a>
        </div>
        <div className="that-part thingz-to-know">
          <p>more-stuff</p>
          <a href="#" className="link-five"><span>website with the sound of its own making is for sale at Printed Matter</span></a>
          <a href="#" className="link-five"><span>i am a masters candidate at NYUs interactive telecommunications program</span></a>
          <a href="#" className="link-five"><span>brutalist websites featured wwtsoiom</span></a>
          <a href="#" className="link-five"><span>wwtsoiom is at Internet Yama-Ichi with Rhizome</span></a>
        </div>
      </div>
    );
  }

  animate() {
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
  if (!this.state.siteAnnoying) {
    this.setState({showDude: true})
    setTimeout(function () {
      this.setState({
        siteAnnoying: !this.state.siteAnnoying
      }, () => {
        this.animate();
      })
    }.bind(this), 2800)
  } else {
    this.setState({
      siteAnnoying: !this.state.siteAnnoying,
      showDude: false
    })
    TweenMax.killAll();
  }
}

export default Index;
