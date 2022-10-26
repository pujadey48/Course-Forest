import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/allCourses')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div>
            <h2>all courses: {courses.length}</h2>
            <div>
                {
                    courses.map(course => <p key={course._id}><Link to={`/course/${course._id}`}>{course.title}</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;