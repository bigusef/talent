import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/list/List';
import Add from './components/add/Add';

class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				<Header />
				<div className="container inner-page">
					<div className="row justify-content-center">
						<BrowserRouter>
							<Switch>
								<Route exact path="/" component={List} />
								<Route exact path="/add" component={Add} />
							</Switch>
						</BrowserRouter>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
