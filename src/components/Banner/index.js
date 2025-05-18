// components/Banner.js
import React from 'react';
import './banner.css'
const Banner = () => {
    return (
    <section className="cta-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="cta-text">
                    <h3>GeT Started Today</h3>
                    <p>New student special! $30 unlimited Gym for the first week and 50% of our member!</p>
                </div>
                <a href="#" className="primary-btn cta-btn">book now</a>
            </div>
        </div>
    </div>
</section>
)
}
export default Banner;
