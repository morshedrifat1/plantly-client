import React from 'react';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
    const tips = useLoaderData();
    return (
        <div>
            {tips.title}
        </div>
    );
};

export default TipsDetails;