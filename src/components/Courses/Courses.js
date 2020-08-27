import React from 'react';
import fakeData from '../../fakeData/Data';
import { useState } from 'react';
import './Courses.css'
import Description from '../Description/Description';
import Cart from '../Cart/Cart';
const Courses = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handleEnrollNow = (course) => {
        console.log("added", course)
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className='d-flex justify-content-around'>
            <div className="course-details">
                {
                    courses.map(courses => <Description course={courses} handleEnrollNow={handleEnrollNow}></Description>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Courses;