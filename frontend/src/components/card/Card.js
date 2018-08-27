import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import TextTruncate from 'react-text-truncate';

import './card.scss';
import avartarImg from '../../images/avatar.png';

const Card = ({person}) => {
    const get_avatar = (img) => img?<img alt={person.name} className='avatar' src={img} />:<img alt={person.name} className='avatar' src={avartarImg} />

    return (
        <div className='card-item row p-3'>
            <div className='col-auto align-self-start'>
                {get_avatar(person.img)}
            </div>
            <div className='col info'>
                <h2>{person.name}</h2>
                <div className='personal-info'>
                <StarRatings
                    rating={person.rate}
                    starRatedColor="#f8db40"
                    starDimension="15px"
                    starSpacing='1px'
                    numberOfStars={5} />
                    <span>{person.tutorial.hours} hours taught</span>
                    <span>{person.department} Student</span>
                    <span>University of {person.university}</span>
                </div>
                <div>
                    <h3>{person.tutorial.title}</h3>
                    <TextTruncate
                        className='desc'
                        line={2}
                        truncateText="…"
                        text={person.tutorial.description} />
                </div>
            </div>
            <div className='col-auto ml-auto d-flex flex-column'>
                <span className='price'>
                    <span className='flaticon-euro'></span>
                    <div>{person.tutorial.price}</div>
                    <span>/h</span>
                </span>
                <div className='action-btn'>
                    <Link className='flaticon-edit' to="/add"></Link>
                    <span className='flaticon-remove'></span>
                </div>
            </div>
        </div>
    );
}

export default Card;
