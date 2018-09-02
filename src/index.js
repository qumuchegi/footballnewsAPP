import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import footballAPP from './Reducer';//根reducer
import thunk from 'redux-thunk';
import APP from './APP';
import './Css/index.css';



let store=createStore(footballAPP,applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
     <APP/>
	</Provider>
	, document.getElementById('root')
	);
 