// @flow

import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {testAction} from './actions';

// components
import Formation from './components/Formation';
import Aquarium from './components/Aquarium';

const App = ({simpleAction}) => {
    return (
        <div className="Game">
            <Aquarium>
                <Formation />
            </Aquarium>
            <button onClick={simpleAction}>Test redux action</button>
        </div>
    );
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(testAction())
});

const enhance = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default enhance(App);
