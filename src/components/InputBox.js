import React from 'react';
import * as KeyCode from 'keycode-js';

 class InputBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : props.value || ''
        }
    }
    
    handleChange(e) {
        this.setState({value: e.target.value});
        
    }

    handleKeyUp(e){
        if(e.keyCode === KeyCode.KEY_RETURN){

        }
    }
    render(){
        return(
            <input type="text" className="form-control add-todo" 
            placeholder="Add New" 
            value= {this.state.value}
            onKeyUp= {this.handleKeyUp.bind(this)}
            onChange={this.handleChange.bind(this)}/>
        )
        
    }
        

}

export default InputBox;