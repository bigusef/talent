import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import _ from 'lodash';

import './add.scss';
import { title } from '../../actions/global';

class Add extends Component {
	state = {
		data: {
			name: '',
			university: '',
			department: '',
			img: '',
			rate: 0,
			tutorial: {
				title: '',
				hours: '',
				price: '',
				description: ''
			}
		},
		errors: null
	};

	componentDidMount() {
		this.props.title('Add New Talent');
	}

	changeRating = newRating => {
		this.setState({
			data: { ...this.state.data, rate: newRating },
			errors: { ...this.state.errors, rate:null}
		});
	};

	formOnChange = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			data: { ...this.state.data, [name]: value },
			errors: { ...this.state.errors, [name]:null}
		});
	};

	formOnChangeTutorial = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			data: {
				...this.state.data,
				tutorial: {
					...this.state.data.tutorial,
					[name]: value
				}
			},
			errors: { ...this.state.errors, [name]:null}
		});
	};

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

		if (!data.tutorial.title) {
			errors.title = 'Tutorial Title is Required';
		}

		if (!data.tutorial.hours) {
			errors.hours = 'Tutorial Hours is Required';
		}

		if (!data.tutorial.price) {
			errors.price = 'Tutorial Price is Required';
		}

		if (!data.tutorial.description) {
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

		console.log(this.state.data);
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
						<small className="text-danger ml-3">{this.state.errors && this.state.errors.rate}</small>
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
							value={this.state.data.img}
							onChange={this.formOnChange}
							className="custom-file-input"
							id="customFile"
						/>
						<label
							className="custom-file-label"
							htmlFor="customFile"
						>
							Expert Profile Image
						</label>
					</div>
				</div>

				<h3 className='mt-5 mb-3'>Tutorial Information</h3>
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={this.state.data.tutorial.title}
						onChange={this.formOnChangeTutorial}
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
						value={this.state.data.tutorial.hours}
						onChange={this.formOnChangeTutorial}
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
						value={this.state.data.tutorial.price}
						onChange={this.formOnChangeTutorial}
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
						value={this.state.data.tutorial.description}
						onChange={this.formOnChangeTutorial}
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
			</div>
		);
	}
}

export default connect(
	null,
	{ title }
)(Add);
