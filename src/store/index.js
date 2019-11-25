import { createStore} from 'redux';//applyMiddleware 使用redux-thunk
import reducer from './reducer';

const store = createStore( 
	reducer
);

export default store;