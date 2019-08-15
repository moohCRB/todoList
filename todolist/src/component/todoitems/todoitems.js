import React,{Component} from 'react';


const TodoItems = (props) => {
    const {items , deleteItem} = props;
    const ListItems = items.map(item =>{
        return(
            <div key={item.id}>
                <span>{item.prenom}</span>
                <span>{item.age}</span>
                <span onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    return (
        <div className="ListItems">
            {ListItems}
        </div>
    )
}
export default TodoItems 