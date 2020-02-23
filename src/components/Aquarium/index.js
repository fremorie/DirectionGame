// @flow
import React, {type Node} from 'react';
import {withHandlers, compose} from 'recompose';
import {connect} from 'react-redux';

// utils
import {getRandomInt} from '../../utils';
import type {InitialState} from '../../types';
import {ARROWS} from '../../constants';

// actions
import {processAnswer as processAnswerAction} from '../../actions';

// components
import Ground from '../Ground';

// styles
import './styles.scss';

type MappedProps = {
    level: number,
    scoreBoard: boolean[],
};

type EnhancedProps = MappedProps & {
    processAnswer: () => void,
}

type Props = {
    bubblesCount: number,
    children: Node[],
} & EnhancedProps;

const Aquarium = ({bubblesCount = 10, children, onKeyDown}: Props) => {
    const bubbles = new Array(bubblesCount).fill(0);

    return (
        <div className="aquarium" tabIndex="0" onKeyDown={onKeyDown}>
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

const mapStateToProps = ({level, scoreBoard}: InitialState): MappedProps => ({
    level,
    scoreBoard,
});

const mapDispatchToProps = dispatch => ({
    processAnswer: payload => dispatch(processAnswerAction(payload)),
});

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withHandlers({
        onKeyDown: ({processAnswer}) => e => {
            console.log('ololo');
            console.log({e});
            console.log(e.keyCode);
            if (ARROWS.hasOwnProperty(e.keyCode.toString())) {
                console.log('пойдет в стейт', ARROWS[e.keyCode]);
                processAnswer(ARROWS[e.keyCode]);
            }
        },
    })
);

export default enhance(Aquarium);
