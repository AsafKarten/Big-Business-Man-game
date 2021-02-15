import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Plus from '../images/Plus.ico'

class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    //send note to delete function
    sellBusiness = (name, index) => {
        this.props.addToStore(name, index);
    };

    //un sell a business

    unSale =(i,name)=>{
        this.props.returnBusiness(i,name)
    };

    render() {
        return (


            <div>
                <nav>
                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', listStyle: 'none', minHeight: '50px', backgroundColor: 'green', color: 'yellow' }}>
                        <Link to="/shop" style={{ color: 'yellow' }}>
                            <li >Shop</li>
                        </Link>
                        <Link to="/profile" style={{ color: 'yellow' }}>
                            <li >Profile</li>
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
                        <h1>Business</h1>
                    </div>
                </nav>
                <div style={{ textAlign: 'right' }}>
                    <Link to="/add-new-business">
                        <img style={{ width: '6%', height: '6%', marginRight: '6%' }} src={Plus} alt="" />
                    </Link>
                </div>

                {this.props.users.filter((u) => u.username === this.props.loggedUser).map((user, i) =>
                    <div style={{}} key={i}>
                        
                        <h5 style={{textAlign:'center'}}>Owner {user.username}</h5>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: 20 }}>
                            {user.business.map((b, index) =>
                                <Card style={{ width: '25%', marginLeft: 10 }} key={index}>
                                    <Card.Img variant="top" src={b.image}/>
                                    <Card.Body>
                                        <Card.Title>business name: {b.name}</Card.Title>
                                        <Card.Text style={{ borderBottom: '1px grey Solid', paddingBottom: '4%' }}>
                                            location: {b.location}<br />
                             phone: {b.phone}<br />
                             employes: {b.employes}<br />
                             value: {b.value},000,000 $<br />
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.sellBusiness(b.name, index)}>Sell</Button>
                                    </Card.Body>
                                </Card>
                            )}
                        </div>
                    </div>
                )}

                <br/>
                    <br/>
                     <div style={{textAlign:'center'}}>
                      <h5>{this.props.loggedUser} Business on sale </h5>
                   </div>
                {this.props.users.filter((u) => u.username === this.props.loggedUser).map((user, i) =>
                    <div style={{}} key={i}>
                        

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: 20 }}>
                            {user.onSale.map((b, index) =>
                                <Card style={{ width: '25%', marginLeft: 10 }} key={index}>
                                    <Card.Img variant="top" src={b.image}/>
                                    <Card.Body>
                                        <Card.Title>business name: {b.name}</Card.Title>
                                        <Card.Text style={{ borderBottom: '1px grey Solid', paddingBottom: '4%' }}>
                                            location: {b.location}<br />
                             phone: {b.phone}<br />
                             employes: {b.employes}<br />
                             value: {b.value},000,000 $<br />
                                        </Card.Text>
                                        <Button variant="warning" onClick={() => this.unSale(i,b.name)}>unSell</Button>
                                    </Card.Body>
                                </Card>
                            )}
                        </div>
                    </div>
                )}
            </div>


        )
    }
}

export default withRouter(Business) 