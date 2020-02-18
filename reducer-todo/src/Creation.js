import React, { useState, useReducer } from 'react';
import { simpRed, initState } from './reducers/simpReducer';
console.log(initState)
const Title = () => {
    const [state, dispatch] = useReducer(simpRed, initState);
    console.log(dispatch)
    const [newTitleText, setNewTitleText] = useState('');
    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };
    return (
        <div>
            <h1>
                {state.item}{' '}
            </h1>
            {!state.completed ? (

                <button onClick={() => dispatch({ type: 'TOGGLE_COMPLETED' })} className="far fa-edit">

                    click to add more
                    </button>


            ) : (
                    <div>
                        <input
                            className="title-input"
                            type="text"
                            name="newText"
                            value={newTitleText}
                            onChange={handleChanges}
                        />

                        <button
                            onClick={() => {
                                dispatch({ type: 'UPDATE_COMPLETED', payload: newTitleText });
                            }}
                        >
                            Update List
          </button>
                    </div>
                )}
        </div>
    );
};

export default Title;
