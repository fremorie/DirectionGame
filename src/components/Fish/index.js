// @flow
import React, {Fragment} from 'react';
import './styles.scss';

type Props = {
    direction: string,
};

const Fish = ({direction}: Props) => (
    <Fragment>
        <div className={`fish ${direction}`} />
    </Fragment>
);

export default Fish;
