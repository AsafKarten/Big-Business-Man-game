import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import background from '../images/background.png';

class Messages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    //functions
    //send buying details to App
    deleteMessage = (index) => {

        this.props.setDelete(index);
    }
    replyMessage=(m)=>{
      this.props.setReplyMessage(m)
    }
    render() {
        return (
            <div>
                <nav>
                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', listStyle: 'none', minHeight: '50px', backgroundColor: 'green', color: 'yellow' }}>
                        <Link to="/profile" style={{ color: 'yellow' }}>
                            <li >Profile</li>
                        </Link>
                        <Link to="/business" style={{ color: 'yellow' }}>
                            <li>Business</li>
                        </Link>
                        <Link to="/add-new-business" style={{ color: 'yellow' }}>
                            <li>+Business</li>
                        </Link>
                        <Link to="community" style={{ color: 'yellow' }}>
                            <li>Community</li>
                        </Link>
                        <Link to="/" style={{ color: 'yellow' }}>
                            <li>Log out</li>
                        </Link>
                    </ul>
                </nav>

                <div style={{ textAlign: 'center'  }}>
                    <h3>Messages</h3>
                </div>

            <div>
                
                <div >
                {this.props.users.filter((u)=>u.username === this.props.loggedUser).map((user,i)=>
                <div key={i}>
                    <h5 style={{ textAlign: 'center' }}>{user.username} mail box</h5>

                    <div style={{display: 'flex',flexWrap:'wrap',justifyContent:'space-around', margin:20}}>
                {user.messages.map((m,index)=>
                <Card style={{ width: '25%' ,marginLeft:10 }} key = {index}>
                     <Card.Body>
                         <Card.Title>{m.title}</Card.Title>
                         <Card.Text style={{borderBottom:'1px grey Solid', paddingBottom:'4%'}}>
                             {m.description}<br/>
                             from:{m.sender}
                         </Card.Text>
                         <Button variant="success" onClick={()=> this.replyMessage(m)} style={{marginRight:'6%'}}>Reply</Button>
                         <Button variant="danger" onClick={()=> this.deleteMessage(index)}>delete</Button>
                     </Card.Body>
                </Card>  
                )}
                </div>
                        </div>
                    )}
                </div>
        </div>
             
                <div style={{ textAlign: 'center' , marginTop:'20%'}}>
                <Link to="/profile">
                    <Button variant="link">back 2 profile</Button>
                </Link>
                </div>
                
            </div >    
        )
    }
}
export default withRouter(Messages) 