import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import SMessage from '../images/SMessage.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class Uprofile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    buyNow =(username,name,i)=>{
        
        this.props.setTrade(username,name,i);
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
                      <Link to="/profile" style={{color:'yellow'}}>
                      <li>Profile</li>
                      </Link>
                      <Link to="/" style={{color:'yellow'}}>
                      <li>Log out</li>
                      </Link>
                  </ul>
              </nav>
              <div style={{textAlign:'right'}}>  
              <Link to="send-message">
                          <img  style={{width:'6%', height:'6%', marginRight:'6%'}} src={SMessage} />  
              </Link>   
                </div>
              <div style={{textAlign:'center'}}>
              
             </div>
             {this.props.users.filter((u)=>u.username === this.props.friend).map((user,index)=>
                <div key={index} style={{textAlign:'center'}}>
                    <img src={user.pImage} style={{width:'20%', height:'20%', marginBottom:'1%', marginTop:'3%'}}/>
                    <h5>{user.username}</h5>
                    <h5>{user.equity} Million U.S.D</h5>  
                </div>
            )}
            <br/>
            <br/>
            <div style={{textAlign:'center'}}>
                <h5>{this.props.friend} Business on sale</h5>
            </div>
                {this.props.users.filter((u)=>u.username === this.props.friend).map((user,index)=>
                <div style={{display:'flex', flexWrap:'wrap'}}key={index}>
                    
                {user.onSale.map((b,i)=>
                <Card style={{ width: '25%' ,marginLeft:10 }} key = {i}>
                    <Card.Img variant="top" src={b.image}/>
                     <Card.Body>
                         <Card.Title>business name: {b.name}</Card.Title>
                         <Card.Text style={{borderBottom:'1px grey Solid', paddingBottom:'4%'}}>
                             owner: {user.username}<br/>
                             location: {b.location}<br/>
                             phone: {b.phone}<br/>
                             employes: {b.employes}<br/>
                             value: {b.value},000,000 $<br/>
                         </Card.Text>
                         <Button variant="primary"  onClick={()=> this.buyNow(user.username,b.name,i)}>Buy</Button>
                     </Card.Body>
                </Card>  
                )}
                </div>
                        
                    )}

                    <br/>
                    <br/>
                     <div style={{textAlign:'center'}}>
                      <h5>{this.props.friend} Business </h5>
                   </div>
                       {this.props.users.filter((u)=>u.username === this.props.friend).map((user,index)=>
                <div style={{display:'flex', flexWrap:'wrap'}}key={index}>
                    
                {user.business.map((b,i)=>
                <Card style={{ width: '25%' ,marginLeft:10 }} key = {i}>
                    <Card.Img variant="top" src={b.image}/>
                     <Card.Body>
                         <Card.Title>business name: {b.name}</Card.Title>
                         <Card.Text style={{borderBottom:'1px grey Solid', paddingBottom:'4%'}}>
                             owner: {user.username}<br/>
                             location: {b.location}<br/>
                             phone: {b.phone}<br/>
                             employes: {b.employes}<br/>
                             value: {b.value},000,000 $<br/>
                         </Card.Text>
                     </Card.Body>
                </Card>  
                )}
                </div>
                        
                    )}
               </div>
           
        )
    }
}

export default withRouter(Uprofile) 
 