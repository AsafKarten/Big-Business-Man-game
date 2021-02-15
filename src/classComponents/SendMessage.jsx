import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SendMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            description:''
        }
    }
      //on change functions:
      newTitle = (e) => {
        this.setState({title: e.target.value});
    };
    newDescription = (e) => {
        this.setState({description: e.target.value});
    };
    //add new note function:
    sendNewMessage = () => {
        if(this.state.title === "" || this.state.description === ""){
            alert("Field cannot be an empty");
            return
        }
        let message =  {title: this.state.title , description: this.state.description, sender:this.props.loggedUser, getter:this.props.friend }
        this.props.setMessage(message);
        console.log(message);
        alert("Your note " + this.state.title + " sent to " + this.props.friend);
        this.setState({ title:"", description:"" });
        

    }

   

    render() { 
        return ( 
            <div>
                 <div style={{textAlign:'center',width:'60%' ,marginRight:'20%' , marginLeft:'20%',  marginTop:'15%'}}>
               <h3>send massage to: {this.props.friend}</h3>
                <Form.Group>
                 <Form.Control type="text" placeholder="Title" value={this.state.title} onChange={this.newTitle} />
                 <br /> 
                 <Form.Control type="text" placeholder="Description" value={this.state.description} onChange={this.newDescription}/>
                </Form.Group>
                 <Button variant="success" onClick={this.sendNewMessage}>Send</Button><br/><br/>
                 <Link to="/user-profile">
                 <Button variant="link">Return</Button>
                 </Link>
                </div>  
               </div> 
           
        );
    }

}
export default withRouter(SendMessage) 