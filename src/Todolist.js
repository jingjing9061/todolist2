import React, { Component } from 'react';
import { connect } from 'react-redux';//获取store的内容


//无状态组件 性能>react 组件 不允许生命周期钩子函数
const TodoList = (props) => {
	const { inputValue,changeInputValue,handleDelete,list} = props;
	return (
		<div>	
			<div>
			  	<input value={inputValue} onChange={changeInputValue}/>
			  	<button onClick={props.handleClick}>提交</button>
			</div>
			<ul>
				{
					list.map((item,index)=>{
						return <li onClick={()=>{
							{handleDelete(index)}
						}} key={index}>{item}</li>
					})
				}
			</ul>
		</div>
	)
}

//把store里的数据映射到组件props
const mapStateToProps = (state) => {
	return {
    	inputValue: state.inputValue,
    	list:state.list
	}
}

//store.dispatch, props 把指定的action作为props注入到TodoList组件中
const mapDispatchToProps = (dispatch) =>{
	return {
		changeInputValue(e){
			const action ={
				type:'change_input_value',
				value:e.target.value
			}
			dispatch(action);
		},
		handleDelete(index){
			const action={
				type:'del_item',
				index
			}
			dispatch(action)
		},
		handleClick(e){
			const action ={
				type:'add_item'
			}
			dispatch(action)
		},
	}
}

//connect 让store和todolist做连接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);