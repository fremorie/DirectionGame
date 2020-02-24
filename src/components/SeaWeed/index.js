// @flow
import React from 'react';

import {ALGEAS_COUNT} from '../../constants';
import {getRandomInt} from '../../utils';

import './styles.scss';
import seaweed from './algea.svg';

type Props = {
    algeasCount: number,
};

const SeaWeed = ({algeasCount = ALGEAS_COUNT}: Props) => {
    const algeas = new Array(algeasCount).fill(0);

    return (
        <div className="seaWeed">
            {seaweed}
            <img src="./algea.svg" height="100" width="100" />
            {
                algeas.map((algea, index) =>
                    <div key={index} className={`algea algea-${getRandomInt(algeasCount)}`}/>
                )
            }
        </div>
    );
};

export default SeaWeed;
