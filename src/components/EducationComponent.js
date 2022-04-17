import React from 'react';
import "./EducationComponent.css";

const EducationComponent = () => {
    return <div className="educationcomponent">
        <h2 class="greentext">EDUCATION</h2>
        <div class="school">
            <p><b>Doctor of Medicine (M.D.)</b> - Lugansk State Medical University, Ukraine</p>
            <p class="ancillary">SEPTEMBER 2008 - JUNE 2014</p>
        </div>

        <div class="school">
            <p><b>User Experience Nanodegree</b> - Udacity</p>
            <p class="ancillary">JUNE 2020</p>
        </div>

        <div class="school">
            <p><b>Responsive Web Design Certification</b> - Free Code Camp</p>
            <p class="ancillary">DECEMBER 2021</p>
        </div>

        <div class="school">
            <p><b>Javascript Algorithms and Data Structures</b> - Free Code Camp</p>
            <p class="ancillary">MARCH 2022</p>
        </div>

    </div>
}

export default EducationComponent;