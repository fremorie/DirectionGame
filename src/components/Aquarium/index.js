// @flow
import React from 'react';

// utils
import {getRandomInt} from '../../utils';

// components
import Ground from '../Ground';

// styles
import './styles.scss';

const Aquarium = ({bubblesCount = 10, children}) => {
    const bubbles = new Array(bubblesCount).fill(0);

    return (
        <div className="aquarium">
            <div className="bubbles">
                {
                    bubbles.map((bubble, index) =>
                        <div key={index} className={`bubble bubble-${getRandomInt(bubblesCount)}`}/>
                    )
                }
            </div>
            {children}
            <Ground />
        </div>
    );
};

export default Aquarium;
