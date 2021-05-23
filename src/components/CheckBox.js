import React,{Component}from 'react';

class CheckBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }
    
    handleChange(e){
        const {checked} = e.target;
        this.setState({checked});
        this.props.OnChange(checked);
    }

    render(){
        return(<input type="checkbox" checked={this.state.checked} onChange= {this.handleChange.bind(this)}/>); 
    }

}
export default CheckBox;