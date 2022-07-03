import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {useQuery, gql} from '@apollo/client';
import file from '../components/LayoutAPI.txt'
import Menuetailwind from './MenueTailwind';
import { navl } from './navlinks';




const NAVFOOT = gql`query {
	layout {
		data {
			id
			__typename
			attributes {
				locale
# 				Use the meta data below for the tab name and suffix
				metaTitleSuffix
				metaData {
					metaTitle
					metaDescription
				}
# 				The favicon for the website
				favicon {
					data {
						id
						attributes {
							name
							url
						}
					}
				}
# 				Button below the navlinks is for the language change
				navbar {
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

// function Notes() {
//     const [text, setText] = useState();
//     fetch(file)
//         .then((response) => response.text())
//         .then((textContent) => {
//           setText(textContent);
//         });
//       return text || "Loading...";
//   }

//   const text = Notes();
//   console.log('text decoded:', text);

//   if (text != null) {
//     const NAVFOOT = gql`${text}`;
//     const {loading, error, data} = useQuery(NAVFOOT);
//   if (loading) return <p>Loading</p>
//   if (error) return <p>Error!</p>
// };
  

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

  if (loading) return <p>Loading</p>
  if (error) return <p>Error!</p>
  
  

  // useEffect(() => {
  //   showButton();
  //   window.addEventListener('resize', showButton);
  //   return {
  //    // window.removeEventListener('resize', showButton)
  //   }
  // }, []);


  

const meta_data = data.layout.data.attributes.metaData;
const nav_links = data.layout.data.attributes.navbar.navLinks;
console.log(navl);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>

            <div className="flex-col items-center mt-3">

              <div className="">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  {meta_data.metaTitle}
                </Link>
              </div>
              
              <div className='slogan'>
                <small className='flex items-center justify-center text-black text-sm'>The Knowledge Company</small>
              </div>

            </div>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes color='black' /> : <FaBars color='black'/>}
            </div>
    
            {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
            </ul> */}

          <div className="flex justify-start">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {navl.map(nav_link => (
                    <li className='nav-item'>
                      <Menuetailwind data={nav_link}/> 
                      <div className="mr-24" />
                  </li>
                  
              ))}
              {/* <li className='nav-item'>
              <Link
                      to='/contact'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                    Contact
                    </Link>
                </li>
                <li className='nav-item'>
              <Link
                      to='/about'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                    About
                    </Link>
                </li> */}
            </ul>
            </div>
            <div className="p-12" />
          
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
