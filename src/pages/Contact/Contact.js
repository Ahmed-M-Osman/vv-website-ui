import '../../components/HeroSection.css';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import Form from '../../components/form'

function Contact() {
  return (
    <>
      <div
        className='home__hero-section'
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>Contact Us</div>
                <h1 className= 'heading dark'>
                  Form
                </h1>
                <p
                  className='home__hero-subtitle dark'
                >
                  This the contact page
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    Press
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
