import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from '../card/Card';
import './list.scss';

class List extends Component {
	state = {
		count: 0,
		experts: [],
		nextPageLink: null,
	}

	componentDidMount() {
		axios.get(`api/`)
		.then(({data}) => {
			this.setState({
				count: data.count,
				experts: data.results,
				nextPageLink: data.next
			});
		});		
	}

	getMoreBTN = () => {
		if (this.state.nextPageLink) {
			return(
				<div className='col-12 text-center'>
					<button className='load-more' onClick={this.getNextPage} type='button'>load more</button>
				</div>
			)
		}
	}

	getNextPage = () => {
		if(this.state.nextPageLink) {
			axios.get(this.state.nextPageLink)
			.then(({data}) => {
				this.setState({
					experts: [...this.state.experts, ...data.results],
					nextPageLink: data.next
				});
			});	
		}
	}

	render() {
		return (
			<div className='col-9 card-list'>
				<div className='row pb-5'>
					<div className='col-6 total-resualt'>
						<span><b>{this.state.count} experts</b> matching your search</span>
					</div>
					<div className='col-auto ml-auto'>
						<span>Sort By </span>
						<select>
							<option>Name</option>
							<option>Joined Date</option>
							<option>Popularity</option>
						</select>
					</div>
					<div className='col-auto'>
						<Link className='flaticon-plus add-new' to="/add"></Link>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						{this.state.experts.map(expert => <Card key={expert.pk} person={expert} />)}
					</div>
				</div>
				<div className='row pb-3'>
					<div className='col-12 text-center count-info'>
						<span>you have viewed </span>
						<span>{this.state.experts.length} of {this.state.count} experts</span>
					</div>
					{this.getMoreBTN()}
				</div>
			</div>
		);
	}
}

export default List;
