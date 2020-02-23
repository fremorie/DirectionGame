// @flow
import React, {type Node} from 'react';
import {withHandlers, withProps, compose} from 'recompose';
import {connect} from 'react-redux';

// utils
import {generateFormation, getRandomInt} from '../../utils';
import type {InitialState} from '../../types';
import {ARROWS} from '../../constants';

// actions
import {processAnswer as processAnswerAction} from '../../actions';

// components
import Ground from '../Ground';
import Formation from '../Formation';
import Bubbles from '../Bubbles';

// styles
import './styles.scss';

type MappedProps = {
    level: number,
    scoreBoard: boolean[],
};

type EnhancedProps = MappedProps & {
    processAnswer: () => void,
    formation: string[],
    targetDirection: string,
    formationCss: string,
}

type Props = {
    bubblesCount: number,
    children: Node[],
} & EnhancedProps;

const Aquarium = ({bubblesCount = 10, formation, onKeyDown}: Props) => {
    const bubbles = new Array(bubblesCount).fill(0);

    return (
        <div className="aquarium" tabIndex="0" onKeyDown={onKeyDown}>
            <Bubbles bubblesCount={bubblesCount} />
            <Formation formation={formation} />
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
    withProps(() => {
        const {formation, targetDirection} = generateFormation({nRows: 7, maxItemsPerRow: 7});

        return {
            formation,
            targetDirection,
        }
    }),
    withHandlers({
        onKeyDown: ({processAnswer, targetDirection, formationCss}) => e => {
            const arrowKeyPressed = e.keyCode.toString();

            if (ARROWS.hasOwnProperty(arrowKeyPressed)) {
                const isAnswerCorrect = ARROWS[arrowKeyPressed] === targetDirection;
                processAnswer(isAnswerCorrect);

                // delete and add class to restart the formation animation
                const formation = document.querySelector('.formation');
                formation.classList.remove('animated');
                void formation.offsetWidth;
                formation.classList.add('animated');
            }
        },
    })
);

export default enhance(Aquarium);
