// @flow
import React from 'react';

import {getRandomInt} from '../../utils';

import './styles.scss';

const Ground = ({algaeCount = 10}) => {
    const algaes = new Array(algaeCount).fill(0);

    return (
        <div className="ground">
            <div className="algaes">
                {algaes.map((algae, index) => {
                    const j = getRandomInt(algaeCount);
                    return <div key={index} className={`algae aalgae-${j}`}/>;
                })}
            </div>
        </div>
    );
};

export default Ground;
