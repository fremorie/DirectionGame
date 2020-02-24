// @flow
import React from 'react';

// utils
import {getRandomInt} from '../../utils';

// styles
import './styles.scss';

type Props = {
    bubblesCount: number,
};

const Bubbles = ({bubblesCount}: Props) => {
    const bubbles = new Array(bubblesCount).fill(0);

    return (
        <div className="bubbles">
            {
                bubbles.map((bubble, index) =>
                    <div key={index} className={`bubble bubble-${getRandomInt(bubblesCount)}`}/>
                )
            }
        </div>
    );
};

export default Bubbles;
