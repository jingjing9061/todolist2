import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './Todolist';
import { Provider } from 'react-redux';//连接器
import store from './store';

// provider连接器可以获取store的内容 provider将store提供给内部组件
const App = (
	<Provider store={store}>
		<TodoList/>
	</Provider>
);

ReactDOM.render(App, document.getElementById('root'));
