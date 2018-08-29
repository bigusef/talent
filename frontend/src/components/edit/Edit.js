import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

import { title } from '../../actions';
import '../add/add.scss';

class Edit extends Component {
	state = {
		expert: {
			name: this.props.expert.name,
			university: this.props.expert.university,
			department: this.props.expert.department,
            rate: this.props.expert.rate,
			title: this.props.expert.tutorial.title,
			hours: this.props.expert.tutorial.hours,
			price: this.props.expert.tutorial.price,
			description: this.props.expert.tutorial.description
		},
		errors: null,
		succeed: false
	};

	componentDidMount() {
		this.props.title(`Edit ${this.state.expert.name}`);
	}

	formOnChange = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			expert: { ...this.state.expert, [name]: value },
			errors: { ...this.state.errors, [name]: null }
		});
	};

	changeRating = newRating => {
		this.setState({
			expert: { ...this.state.expert, rate: newRating },
			errors: { ...this.state.errors, rate: null }
		});
	};

	handlerFile = e => this.setState({img: e.target.files[0] });

	validateDate = () => {
		const { expert } = this.state;
		const errors = {};

		if (!expert.name) {
			errors.name = 'Name is Required';
		}

		if (!expert.university) {
			errors.university = 'University is Required';
		}

		if (!expert.department) {
			errors.department = 'Department is Required';
		}

		if (expert.rate <= 0) {
			errors.rate = 'Rate is Required';
		}

		if (!expert.title) {
			errors.title = 'Tutorial Title is Required';
		}

		if (!expert.hours) {
			errors.hours = 'Tutorial Hours is Required';
		}

		if (!expert.price) {
			errors.price = 'Tutorial Price is Required';
		}

		if (!expert.description) {
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
		formData.append('name', this.state.expert.name);
		formData.append('university', this.state.expert.university);
		formData.append('department', this.state.expert.department);
		formData.append('rate', this.state.expert.rate);
		formData.append('tutorial.title', this.state.expert.title);
		formData.append('tutorial.hours', this.state.expert.hours);
		formData.append('tutorial.price', this.state.expert.price);
		formData.append('tutorial.description', this.state.expert.description);

		if(this.state.img) {
			formData.append('img', this.state.img);
		}

		axios.defaults.xsrfCookieName = 'csrftoken';
		axios.defaults.xsrfHeaderName = 'X-CSRFToken';

		axios.put(`api/${this.props.expert.pk}/`, formData)
			.then(res => {
				this.redirect()
			})
			.catch(error => console.log(error));
	};

	redirect = () => {
		this.setState({
			succeed: true
		});
	}

	render() {
		return (
			<div className="col-6">
				<div className="form-group">
					<label>Expert Name</label>
					<input
						type="text"
						name="name"
						value={this.state.expert.name}
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
						value={this.state.expert.university}
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
						value={this.state.expert.department}
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
						rating={this.state.expert.rate}
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
							{this.state.expert.img || 'Expert Profile Image'}
						</label>
					</div>
				</div>

				<h3 className="mt-5 mb-3">Tutorial Information</h3>
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={this.state.expert.title}
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
						value={this.state.expert.hours}
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
						value={this.state.expert.price}
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
						value={this.state.expert.description}
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
				<div className="form-group d-flex">
					<button
						type="button"
						onClick={this.addExpert}
						className="btn btn-lg btn-primary"
					>
						Save
					</button>
					<button type='button' onClick={this.redirect} className="btn btn-lg btn-secondary ml-auto">Cancel</button>
				</div>
				{this.state.succeed && <Redirect to="/" />}
			</div>
		);
	}
}

const mapStateToProps = state => ({ expert: state.global.expert });

export default connect(
	mapStateToProps,
	{ title }
)(Edit);
