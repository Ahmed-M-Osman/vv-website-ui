import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {useQuery, gql} from '@apollo/client';

const NAVFOOT = gql`
  query {
    layout {
      data {
        id
        __typename
        attributes {
          locale
          metaTitleSuffix
          metaData {
            metaTitle
            metaDescription
          }
          favicon {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          navbar {
            navLinks {
              id
              url
              text
              newtab
            }
            navButton {
              id
              url
              text
              newtab
            }
            logo {
              data {
                attributes {
                  formats
                }
              }
            }
          }
          footer {
            logo {
              data {
                attributes {
                  formats
                }
              }
            } 
            columns {
              title
              footerLinks {
                url
                text
                newtab
              }
            }
            copyrightText
          }
        }
      }
    }
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const {loading, error, data} = useQuery(NAVFOOT);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
     // window.removeEventListener('resize', showButton)
    }
  }, []);


  if (loading) return <p>Loading</p>
  if (error) return <p>Error!</p>

const vv_name = data.layout.data.attributes.metaData.metaTitle;
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {vv_name}
            </Link>
            <div c1lassName='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                
              </li>
              <li className='nav-item'>
                <Link
                  to='/solutions'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Solutions
                </Link>
              </li>
              {/* <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
