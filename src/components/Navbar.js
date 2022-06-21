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

  // useEffect(() => {
  //   showButton();
  //   window.addEventListener('resize', showButton);
  //   return {
  //    // window.removeEventListener('resize', showButton)
  //   }
  // }, []);


  if (loading) return <p>Loading</p>
  if (error) return <p>Error!</p>

const meta_data = data.layout.data.attributes.metaData;
const nav_links = data.layout.data.attributes.navbar.navLinks;

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <div className="">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {meta_data.metaTitle}
            </Link>
            <small className='text-white text-sm '>The Knowledge Company</small>
            </div>
            
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
    
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {nav_links.map(nav_link => (
                    <li className='nav-item'>
                    <Link
                      to={nav_link.url}
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                    {nav_link.text}
                    </Link>
                  </li>
              ))};
            </ul>

          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;


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
