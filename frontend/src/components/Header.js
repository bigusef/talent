import React from 'react';
import { connect } from 'react-redux';

const Header = ({ title }) => {
	return (
		<div className="container header">
			<div className="row justify-content-center">
				<div className="col-9">
					<h1>
						<span>Tanelts</span>
						<small>{title}</small>
					</h1>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({ title: state.global.title });

export default connect(mapStateToProps)(Header);
