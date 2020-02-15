// @flow
import React, {Fragment} from 'react';
import css from './styles.css';

type Props = {
    direction: string,
};

const Pacman = ({direction}: Props) => (
    <Fragment>
        <div className={`pacman ${direction}`} />
    </Fragment>
);

export default Pacman;
