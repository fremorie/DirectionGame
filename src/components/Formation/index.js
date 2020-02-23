// @flow
import React, {Fragment} from 'react';
import {compose, withProps} from 'recompose';

import './styles.scss';

import {generateFormation} from '../../utils';

import Fish from '../Fish';

const Formation = ({formation}) => {
    return (
        <div className="formation">
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

const enhance = compose(
    withProps(() => (
        {
            formation: generateFormation({nRows: 7, maxItemsPerRow: 7}),
        }),
    ),
);

export default enhance(Formation);
