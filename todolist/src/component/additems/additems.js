import React ,{Component }from 'react';

class AddItem extends Component {
    state = {
        age:'',
        nom:''
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
       e.preventDefault();
       this.props.addItem(this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" placeholder="saiser le prenom" id="prenom" onChange={this.handleChange} />
                    <input type = "number" placeholder="saiser l age" id="age" onChange={this.handleChange} />
                    <input type = "submit" id="add" value="Ajouter"  />
 
                </form>
            </div>
        )
    }
}
export default  AddItem