import React, { useId } from 'react';
import { useParams } from 'react-router-dom';
const UserParams = () => {
    const params = useParams();
    console.log('poarams', params);

    return (
        <div>
            <h1>USer Params {params.id} </h1>
        </div>
    );
};
export default UserParams;
