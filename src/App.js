import React from 'react';
import './App.css';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Solutions from './pages/Solutions/Solutions';
import Software from './pages/Software/Services'
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menuetailwind from './components/MenueTailwind';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://192.168.1.26:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/software' element={<Software />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
      </ApolloProvider>
    </Router>
  );
}

export default App;
