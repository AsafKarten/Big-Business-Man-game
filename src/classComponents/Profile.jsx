import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Brifcase from '../images/Brifcase.jpg';
import Message from '../images/Message.png';



class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    getCash=()=>{
        this.props.addCash()
    }


    render() {
        return (
            <div>
              <nav>
                  <ul style={{display:'flex', alignItems:'center', justifyContent:'space-around', listStyle:'none' , minHeight:'50px', backgroundColor:'green', color:'yellow'}}>
                      <Link to="/shop" style={{color:'yellow'}}>
                      <li >Shop</li>
                      </Link>
                      <Link to="/business"  style={{color:'yellow'}}>
                      <li >Business</li>
                      </Link>
                      <Link to="/add-new-business"  style={{color:'yellow'}}>
                      <li >+ Business</li>
                      </Link>
                      <Link to="/community" style={{color:'yellow'}}>
                      <li>Community</li>
                      </Link>
                      <Link to="/" style={{color:'yellow'}}>
                      <li>Log out</li>
                      </Link>
                  </ul>
              </nav>
              <div style={{textAlign:'right'}}>  
                          <img  style={{width:'6%', height:'6%', marginRight:'6%'}} src={Brifcase} onClick={this.getCash}/>       
                </div>
                <div style={{textAlign:'right'}}> 
                    <Link to="/messages">
                      <img  style={{width:'6%', height:'6%', marginRight:'6%'}} src={Message}/>   
                      </Link> 
                              
                </div>
              <div style={{textAlign:'center'}}>
              
             </div>
             {this.props.users.filter((u)=>u.username === this.props.loggedUser).map((user,index)=>
                <div key={index} style={{textAlign:'center'}}>
                    <img src={user.pImage} style={{width:'20%', height:'20%', marginBottom:'1%', marginTop:'3%'}}/>
                    <h5>{user.username}</h5>
                    <h5>{user.equity} Million U.S.D</h5>  
                </div>
            )}
            </div >
        )
    }
}

export default withRouter(Profile) 
 