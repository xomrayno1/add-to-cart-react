import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector,useDispatch } from 'react-redux';
import {addToDo} from '../action/Todo'

ToDoApp.propTypes = {
    
};

function ToDoApp(props) {
    const [text, setText] = useState();
    const tests = useSelector(state => state.item);
    const dispatch = useDispatch();
    const handleOnClickedAddItem = () => {
        dispatch(addToDo(text));
        setText('')
    }
    return (
        <div>
            <input placeholder="Nhập..." 
                value={text} 
                onChange={(e)=>setText(e.target.value)}
                    />
            <button onClick={handleOnClickedAddItem}>Add</button>
            <ul>
                {
                    tests.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ToDoApp;