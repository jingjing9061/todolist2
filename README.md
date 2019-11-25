
npm run start

说明：
react使用 redux  provier

1.index.js文件引入react-redux中的Provider组件，传入store参数，那么在Provider中包含的组件都可以共享store参数

2.connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
在react-redux中使用connect将组件和store做连接。mapStateToProps 会将state挂载到组件的props上，
mapDispatchToProps将store.dispatch方法挂在到props上，所以通过组件的props就可以得到状态和方法。
由此可以发现TodoList实际上可以当做UI组件，而通过connect返回的是一个容器组件。


3.需要注意事件的绑定问题。
绑定事件的方法是通过绑定匿名函数，或者借助bind
<li onClick={() => {handleDelete(index);}}  key={index} > {item} </li>
<li onClick={ handleDelete.bind(this,index) }  key={index} > {item} </li>

具体用法看代码里面的注释吧
