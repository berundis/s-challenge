import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home/index'
import Login from './components/Links/Login'
import Contact from './components/Links/Contact'
import WhyUs from './components/Links/WhyUs'
import Support from './components/Links/Support'
import AboutUs from './components/Links/AboutUs'
import News from './components/Links/News'
import Faq from './components/Links/Faq'
import WebHosting from './components/Links/WebHosting'
import CloudHosting from './components/Links/CloudHosting'
import DomainNames from './components/Links/DomainNames'
import VpsServers from './components/Links/VpsServers'
import TransferDomains from './components/Links/TransferDomains'
import CustomerPortal from './components/Links/CustomerPortal'
import SupportPortal from './components/Links/SupportPortal'
import VideoTutorials from './components/Links/VideoTutorials'
import CreateAccount from './components/Links/CreateAccount'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/why-us' component={WhyUs} />
            <Route exact path='/support' component={Support} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/news' component={News} />
            <Route exact path='/faq' component={Faq} />
            <Route exact path='/web-hosting' component={WebHosting} />
            <Route exact path='/cloud-hosting' component={CloudHosting} />
            <Route exact path='/vps-servers' component={VpsServers} />
            <Route exact path='/domain-names' component={DomainNames} />
            <Route exact path='/transfer-domains' component={TransferDomains} />
            <Route exact path='/customer-portal' component={CustomerPortal} />
            <Route exact path='/support-portal' component={SupportPortal} />
            <Route exact path='/video-tutorials' component={VideoTutorials} />
            <Route exact path='/create-account' component={CreateAccount} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
