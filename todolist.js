function ToDoList(props){
  return (
    <ul className='listContainer'>
      {
        props.listItems.map(
          (item,index)=>(
            <li key={index}>
              <span className='XElement' onClick={()=>props.onRemoveItem(item)}>&times;</span>&nbsp;
              {item}
            </li>
            )
        )
      }
    </ul>
  )
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      toDoListItems : [],
      itemToAddToList: '',
    }
    this.removeItemFromList = this.removeItemFromList.bind(this)
    this.addItemToList = this.addItemToList.bind(this)
    this.getItemForList = this.getItemForList.bind(this)
  }
    removeItemFromList(itemToRemove){
      this.setState(
        (currentState)=>{
          return{
            toDoListItems : currentState.toDoListItems.filter((items)=> items!== itemToRemove)
        }
      }
      )
    }

    addItemToList(){
      this.setState(
        (currentState)=>{
          return {
            toDoListItems: currentState.toDoListItems.concat([this.state.itemToAddToList]),
            itemToAddToList: ''
          }
        }
      )
    }
    getItemForList(itemEvent){
      this.setState(
        {itemToAddToList :itemEvent.target.value}
      )
    }
  render(){
    return(
      <div id='mainContainer'>
        <p>My To Do List</p>
        <div id='inputContainer'>
          <input type='text' placeholder='I want to ...' name='toDoListItems' value={this.state.itemToAddToList} onChange={this.getItemForList}/>&nbsp;&nbsp;
          <button id='add' onClick={this.addItemToList}>Add</button>
        </div>
        <div id='listContainer'>
          <ToDoList listItems={this.state.toDoListItems} onRemoveItem={this.removeItemFromList}/>
        </div>
      </div>
        )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
