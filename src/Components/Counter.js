import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, connect } from 'react-redux';

const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: counterReducer
  });

const CounterComponent = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>INCREMENTAR</button>
            <button onClick={decrement}>DECREMENTAR</button>
        </div>
    );
};

const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = { increment, decrement };

const ConnectedCounterComponent = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export const CounterApp = () => (
    <Provider store={store}>
        <ConnectedCounterComponent />
    </Provider>
);