import content from './content';
import Slider from 'react-animated-slider';
import { Button } from './Button';
import Header from './header';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import { render } from 'react-dom';

function SliderComponent() {
  return(
  <div>
    <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
              {/* <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section> */}
            </div>
          ))}
        </Slider>

    {/* <Slider classNames={horizontalCss} direction="horizontal">
            {content.map((item, index) => (
              <div
                key={index}
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="center">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button>{item.button}</Button>
                </div>
              </div>
            ))}
    </Slider> */}
</div>
  );
}

export default SliderComponent;