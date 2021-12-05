import React from 'react';
import Navbar from './components/Navbar';
import ImagesHolder from './components/ImagesHolder';
import AboutUs from './components/AboutUs';
import MyAccount from './components/MyAccount';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className='content-area'>
					<Route exact path='/' component={ImagesHolder} />
					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/account' component={MyAccount} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
