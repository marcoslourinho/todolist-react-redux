import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => (
   <h4>você tem {props.todos.length} todos.</h4>
);

const mapStateToProps = state => ({
   todos: state.todos,
});

export default connect(mapStateToProps)(Counter);
