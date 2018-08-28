import React from 'react';
import { connect } from 'react-redux';

const Header = ({ title }) => {
	return (
		<div className="container header pt-3 pb-3">
			<div className="row justify-content-center">
				<div className="col-9">
					<h1>
						<a href='/'>Tanelts</a>
						<small>{title}</small>
					</h1>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({ title: state.global.title });

export default connect(mapStateToProps)(Header);
