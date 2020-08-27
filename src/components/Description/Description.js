import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Description.css';
const Description = (props) => {
    const { name, img, price } = props.course;
    return (
        <div className='course'>
            <div className="course-img">
                <img src={img} alt="" />
            </div>
            <div className="course-name">
                <h3>{name}</h3>
                <br />
                <p>Price:${price}</p>
                <br />
                <button onClick={() => props.handleEnrollNow(props.course)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
            </div>
        </div>
    );
};

export default Description;