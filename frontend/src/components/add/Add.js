import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

import './add.scss';
import { title } from '../../actions/global';

class Add extends Component {
	state = {
		data: {
			name: '',
			university: '',
			department: '',
			rate: 0,
			img: null,
			title: '',
			hours: '',
			price: '',
			description: ''
		},
		errors: null,
		succeed: false,
	};

	componentDidMount() {
		this.props.title('Add New Talent');
	}

	formOnChange = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			data: { ...this.state.data, [name]: value },
			errors: { ...this.state.errors, [name]: null }
		});
	};

	changeRating = newRating => {
		this.setState({
			data: { ...this.state.data, rate: newRating },
			errors: { ...this.state.errors, rate: null }
		});
	};

	handlerFile = e => this.setState({img: e.target.files[0] });

	validateDate = () => {
		const { data } = this.state;
		const errors = {};

		if (!data.name) {
			errors.name = 'Name is Required';
		}

		if (!data.university) {
			errors.university = 'University is Required';
		}

		if (!data.department) {
			errors.department = 'Department is Required';
		}

		if (data.rate <= 0) {
			errors.rate = 'Rate is Required';
		}

		if (!data.title) {
			errors.title = 'Tutorial Title is Required';
		}

		if (!data.hours) {
			errors.hours = 'Tutorial Hours is Required';
		}

		if (!data.price) {
			errors.price = 'Tutorial Price is Required';
		}

		if (!data.description) {
			errors.description = 'Tutorial Description is Required';
		}

		return errors;
	};

	addExpert = () => {
		const errors = this.validateDate();

		if (!_.isEmpty(errors)) {
			this.setState({
				errors
			});

			return;
		}
		
		const formData = new FormData();
		formData.append('name', this.state.data.name);
		formData.append('university', this.state.data.university);
		formData.append('department', this.state.data.department);
		formData.append('rate', this.state.data.rate);
		formData.append('tutorial.title', this.state.data.title);
		formData.append('tutorial.hours', this.state.data.hours);
		formData.append('tutorial.price', this.state.data.price);
		formData.append('tutorial.description', this.state.data.description);

		if(this.state.img) {
			formData.append('img', this.state.img);
		}

		axios.defaults.xsrfCookieName = 'csrftoken';
		axios.defaults.xsrfHeaderName = 'X-CSRFToken';
		
		axios.post('api/', formData)
			.then(res => {
				this.setState({
					succeed: true
				})
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div className="col-6">
				<div className="form-group">
					<label>Expert Name</label>
					<input
						type="text"
						name="name"
						value={this.state.data.name}
						onChange={this.formOnChange}
						className={
							this.state.errors && this.state.errors.name
								? 'form-control is-invalid'
								: 'form-control'
						}
						aria-describedby="textHelp"
						placeholder="Expert Name"
					/>
					<div className="invalid-feedback">
						{this.state.errors && this.state.errors.name}
					</div>
				</div>
				<div className="form-group">
					<label>University</label>
					<input
						type="text"
						name="university"
						value={this.state.data.university}
						onChange={this.formOnChange}
						className={
							this.state.errors && this.state.errors.university
								? 'form-control is-invalid'
								: 'form-control'
						}
						aria-describedby="textHelp"
						placeholder="University"
					/>
					<div className="invalid-feedback">
						{this.state.errors && this.state.errors.university}
					</div>
				</div>
				<div className="form-group">
					<label>Department</label>
					<input
						type="text"
						name="department"
						value={this.state.data.department}
						onChange={this.formOnChange}
						className={
							this.state.errors && this.state.errors.department
								? 'form-control is-invalid'
								: 'form-control'
						}
						aria-describedby="textHelp"
						placeholder="Department"
					/>
					<div className="invalid-feedback">
						{this.state.errors && this.state.errors.department}
					</div>
				</div>
				<div className="form-group text-center">
					<label className="d-flex align-items-center">
						Rateing
						<small className="text-danger ml-3">
							{this.state.errors && this.state.errors.rate}
						</small>
					</label>
					<StarRatings
						rating={this.state.data.rate}
						starRatedColor="#f8db40"
						starDimension="35px"
						starSpacing="5px"
						changeRating={this.changeRating}
						numberOfStars={5}
					/>
				</div>
				<div className="form-group pt-3">
					<div className="custom-file">
						<input
							type="file"
							name="img"
							onChange={this.handlerFile}
							className="custom-file-input"
							id="customFile"
						/>
						<label
							className="custom-file-label"
							htmlFor="customFile"
						>
							{this.state.data.img || 'Expert Profile Image'}
						</label>
					</div>
				</div>

				<h3 className="mt-5 mb-3">Tutorial Information</h3>
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={this.state.data.title}
						onChange={this.formOnChange}
						className={
							this.state.errors && this.state.errors.title
								? 'form-control is-invalid'
								: 'form-control'
						}
						aria-describedby="textHelp"
						placeholder="Title"
					/>
					<div className="invalid-feedback">
						{this.state.errors && this.state.errors.title}
					</div>
				</div>
				<div className="form-group">
					<label>Hours</label>
					<input
						type="number"
						name="hours"
						value={this.state.data.hours}
						onChange={this.formOnChange}
						className={
							this.state.errors && this.state.errors.hours
								? 'form-control is-invalid'
								: 'form-control'
						}
						aria-describedby="textHelp"
						placeholder="Hours"
					/>
					<div className="invalid-feedback">
						{this.state.errors && this.state.errors.hours}
					</div>
				</div>
				<div className="form-group">
					<label>Price</label>
					<input
						type="number"
						name="price"
						value={this.state.data.price}
						onChange={this.formOnChange}
						className={
							this.state.errors && this.state.errors.price
								? 'form-control is-invalid'
								: 'form-control'
						}
						aria-describedby="textHelp"
						placeholder="Price"
					/>
					<div className="invalid-feedback">
						{this.state.errors && this.state.errors.price}
					</div>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						value={this.state.data.description}
						onChange={this.formOnChange}
						className={
							this.state.errors && this.state.errors.description
								? 'form-control is-invalid'
								: 'form-control'
						}
						rows="5"
					/>
					<div className="invalid-feedback">
						{this.state.errors && this.state.errors.description}
					</div>
				</div>
				<div className="form-group text-right">
					<button
						type="button"
						onClick={this.addExpert}
						className="btn btn-lg btn-primary"
					>
						Save
					</button>
				</div>
				{this.state.succeed && <Redirect to='/'/>}
			</div>
		);
	}
}

export default connect(null, { title })(Add);
