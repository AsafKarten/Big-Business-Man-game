import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Busi1 from '../images/Busi1.jpg';
import Busi2 from '../images/Busi2.jpg';
import Busi3 from '../images/Busi3.jpg';
import Busi4 from '../images/Busi4.jpg';

class AddBusi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            value: 0,
            location: '',
            phone: '',
            employes: 0,
            stock:false,
            image:'',
        }
       
    }
    //on change functions:
    newBname = (e) => {
        this.setState({ name: e.target.value });
    }
    newValue = (e) => {
        this.setState({ value: e.target.value });
    }
    newAddress = (e) => {
        this.setState({ location: e.target.value });
    }
    newPhone = (e) => {
        this.setState({ phone: e.target.value });
    }
    setEmployes = (e) => {
        this.setState({ employes: e.target.value });
    }
    setStock = (e) => {
        if(this.state.stock===false){
            this.setState({ stock:true });
        }
        else{
            this.setState({ stock:false });
        }     
    }
   //check detailes and send function
   checkNewBusiness = () => {
       if(this.props.counter === 0)
       {
           this.state.image = Busi1
       }
       else if(this.props.counter === 1)
       {
        this.state.image = Busi2
       }
       else if(this.props.counter === 2)
       {
        this.state.image = Busi3
       }
       else
       {
        this.state.image = Busi4
       }
    let details = {name:this.state.name, value:this.state.value, location:this.state.location, phone:this.state.phone, employes:this.state.employes, stock:this.state.stock, image:this.state.image}
    this.setState({name:"",value:0,location:"",phone:"", employes:0, stock:false})
    this.props.setNewBusiness(details)
    this.props.history.push({
        pathname: '/business' 
      });
   }
    render() {
        return (
            <div>
                <nav>
                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', listStyle: 'none', minHeight: '50px', backgroundColor: 'green', color: 'yellow' }}>
                        <Link to="/profile" style={{ color: 'yellow' }}>
                            <li >Profile</li>
                        </Link>
                        <Link to="/shop" style={{ color: 'yellow' }}>
                            <li >Shop</li>
                        </Link>
                        <Link to="/business" style={{ color: 'yellow' }}>
                            <li >Business</li>
                        </Link>
                        <Link to="community" style={{ color: 'yellow' }}>
                            <li>Community</li>
                        </Link>
                        <Link to="/" style={{ color: 'yellow' }}>
                            <li>Log out</li>
                        </Link>
                    </ul>
                </nav>
                <div style={{ textAlign: 'center' }}>
                    <h1>Create new business</h1>
                    <h3>earn more money</h3>
                </div>
                <div style={{ width: '50%', marginLeft: '25%' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>New business</Form.Label>
                            <Form.Control onChange={this.newBname} value={this.state.name} type="text" placeholder="business name" />
                            <Form.Text className="text-muted">
                                a good name is guarantee for success.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">business value
                        <Form.Control onChange={this.newValue} value={this.state.value} type="number" placeholder="business value" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={this.newPhone} value={this.state.phone} type="text" placeholder="business phone" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={this.newAddress} value={this.state.location} type="text" placeholder="business location" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">Employes
                        <Form.Control onChange={this.setEmployes} value={this.state.employes} type="number" placeholder="Employes" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check value={this.state.stock} onClick={this.setStock} type="checkbox" label="stock exchange" />
                        </Form.Group>
                        <Button  onClick={this.checkNewBusiness} variant="success">Submit</Button>
                            
                        
                    </Form>
                </div>

            </div>
        )
    }
}

export default withRouter(AddBusi)