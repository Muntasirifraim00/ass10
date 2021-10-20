import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            {/* <img src={serviceId} class="card-img-top" alt="."/> */}
        </div>
    );
};

export default Booking;