// @flow
import React from 'react';

import './styles.scss';

import Fish from '../Fish';

const Formation = ({formation}) => {
    return (
        <div className="formation animated">
            {formation.map((row, i) => (
                <div key={i} className="row">
                    {row.map((direction, j) => (
                        <Fish key={j} direction={direction} />
                    ))}
                </div>
            ))}
        </div>
    )
};

export default Formation;
