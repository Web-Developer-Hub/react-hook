import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';

const Counter = () => {
    const [steps, setSteps] = useState(0);

    const handleClickIncreas = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

    const handleClickDecrease = () => {
        if (steps !== 0) {
            const newSteps = steps - 1;
            setSteps(newSteps);
        }
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div>
            <h1 className=" text-success">Steps: {steps}</h1>
            <div>
                <button className="btn btn-outline-success mx-2" onClick={handleClickIncreas}>Increase</button>
                <button className="btn btn-outline-danger mx-2" onClick={handleClickDecrease}>Decreas</button>
            </div>
            <Data></Data>
        </div>
    );
};

export default Counter;