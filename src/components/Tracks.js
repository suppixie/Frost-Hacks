import React,{useState} from "react";
import teleporter from '../assets/teleporter_active.gif';
import crystal1 from '../assets/crystal2.png';
import crystal2 from '../assets/crystal11.png';
import crystal3 from '../assets/crystal3.png';
import crystal4 from '../assets/crystal4.png';
import leftarrow from '../assets/left arrow.png';
import rightarrow from '../assets/right arrow.png';
import './styles/tracks.css'


export default function Tracks() {
    const content = [
        {
          image: crystal1,
          alt: 'crystal',
          title: 'Health & Wellness',
          description: 'Find simple and innovative solutions to bring out the best of health and wellness',
        },
        {image: crystal2,
        alt: 'crystal',
        title:`----Social good`,
        description: 'Dedicated to the greater good, creating a positive impact on society while addressing pressing social issues.',
        },{
            image: crystal3,
          alt: 'crystal',
          title: 'Web 3.0',
          description: 'Blockchain is the new digital realm. The decentralized, inter-connected, user-centric, and secure evolution of the internet.',
        }
        ,{
            image: crystal4,
          alt: 'crystal',
          title: 'Open Innovation',
          description: 'We embrace the idea that innovation can originate from anywhere and actively tap into diverse minds for great ideas.',
        }
      ];
    
      const [startIndex, setStartIndex] = useState(0);

  const nextImages = () => {
    if (startIndex < content.length - 2) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevImages = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };



    return <section className="tracks-section" id="tracks">
        <h2>Tracks</h2>
        <div className="tracks tracks-carousel">
        <div className="carousel">
        <button className="leftarrow" onClick={prevImages}><img src={leftarrow} alt="leftarrow"/></button>
        <div className="tracks">
        {content.slice(startIndex, startIndex + 2).map((item, index) => (
            <div className={`track${index + 1} themes`} key={index}>
              <img src={item.image} className="crystal" alt={item.alt} />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button className="rightarrow" onClick={nextImages}><img src={rightarrow} alt="rightarrow"/></button>
      </div>
        </div>
        <div className="tracks tracks-full">
            <div className="track1 themes">
                <img src={crystal1} className="crystal" alt="prop" />
                <h1>Health & Wellness</h1>
                <p>Unlock  the potential for transformation in health and wellness within the society,
                    as we  aim to innovate and enhance in one concerted effort.</p>
            </div>
            <div className="track2 themes">
                <img src={crystal2} className="crystal" alt="prop" />
                <h1>Social<br /> Good</h1>
                <p>Dedicated to the greater good, creating a positive impact on society while addressing pressing social issues.</p>
            </div>
            <div className="track3 themes">
                <img src={crystal3} className="crystal" alt="prop" />
                <h1>Web<br /> 3.0</h1>
                <p>Web 3.0 is the new digital realm. The decentralized, inter-connected, user-centric, and secure evolution of the internet.</p>
            </div>
            <div className="track4 themes">
                <img src={crystal4} className="crystal" alt="prop" />
                <h1>Open Innovation</h1>
                <p>We embrace the idea that innovation can originate from anywhere and actively tap into diverse minds for great ideas.
                </p>
            </div>
        </div>
        <img src={teleporter} className="teleporter" alt="prop" />
    </section>;
}
