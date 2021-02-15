import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    //functions
    //send buying details to App
    buyNow =(username,name,i,index)=>{
        
        this.props.setTrade(username,name,i,index);
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
                    <div style={{ textAlign: 'center' }}>
                        <h1>Shop</h1>
                    </div>
                </nav>
                <div>
                {this.props.users.filter((u)=>u.onSale !== undefined && u.username !== this.props.loggedUser).map((user,index)=>
                <div style={{display:'flex', flexWrap:'wrap'}}key={index}>
                    
                {user.onSale.map((b,i)=>
                <Card style={{ width: '25%' ,marginLeft:10 }} key = {i}>
                     <Card.Body>
                         <Card.Img variant="top" src={b.image}/>
                         <Card.Title>business name: {b.name}</Card.Title>
                         <Card.Text style={{borderBottom:'1px grey Solid', paddingBottom:'4%'}}>
                             owner: {user.username}<br/>
                             location: {b.location}<br/>
                             phone: {b.phone}<br/>
                             employes: {b.employes}<br/>
                             value: {b.value},000,000 $<br/>
                         </Card.Text>
                         <Button variant="primary" onClick={()=> this.buyNow(user.username,b.name,i,index)}>Buy</Button>
                     </Card.Body>
                </Card>  
                )}
                </div>
                        
                    )}
               </div>
            </div>    
        )
    }
}

export default withRouter(Shop)