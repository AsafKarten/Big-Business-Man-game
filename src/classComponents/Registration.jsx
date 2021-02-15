import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom';
import Avatar2 from '../images/Avatar2.jpg';
import Avatar4 from '../images/Avatar4.jpg';
import Avatar3 from '../images/Avatar3.jpg';
import Trump from '../images/Trump.jpg';
import OilRig from '../images/OilRig.jfif'
import Diamonds from '../images/Diamonds.jfif'
import Tesla from '../images/Tesla.jpg';
import SpaceX from '../images/SpaceX.jpg';




class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            cPassword: '',
            equity: 0,
            pImage:"",
            
        }
    }
    //Consts
    
    //on change functions:
    newUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    newPass = (e) => {
        this.setState({ password: e.target.value });
    }
    confirmPass = (e) => {
        this.setState({ cPassword: e.target.value });
    }
    newEquity = (e) => {
        this.setState({ equity: e.target.value });
    }
    newImage = (e) => {
        this.setState({ pImage: e.target.value });
    }
    
    //chek info and send props function 
    checkUserInfo = () => {
        let check = this.props.users.find((u)=>u.username === this.state.username );
        if(check !== undefined){
            let tempC = this.state.username
           alert("the user name " + tempC +" is unavilable")
            return;   
        }
        if (this.state.password !== this.state.cPassword) {
            alert("The confirm password is not match!");
            return;
        }
        if (this.state.password === "" || this.state.username === "") {
            alert("Field cannot be an empty");
            return;
        }
        if (this.state.equity <= 0) {
            alert("only users with at least 1 million dollar can register");
            return;
        }
        if(this.state.pImage === ""){
            if(this.props.counter===0){
                this.state.pImage= Avatar2                 
            }
            else if(this.props.counter===1){         
                this.state.pImage= Avatar3        
            }
            else if (this.props.counter ===2){
                this.state.pImage= Trump 
            }
            else{
              this.state.pImage= Avatar4        
            }     
        }
        
        let user = { username: this.state.username, password: this.state.password, equity:this.state.equity, pImage: this.state.pImage, business: [], onSale:[],messages:[] };
        console.log(user);
        if(user.username === "Trump")
        {
            let Rig = {name:"Trump Oil Rigs",value:150,location:"U.S.A",phone:"*2020",employes:15000,stock:true,image:OilRig}
            let Diamond = {name:"Trump Diamonds",value:90,location:"U.S.A",phone:"*9999",employes:7500,stock:false,image:Diamonds}
            user.business.push(Rig)
            user.business.push(Diamond)
        }
        if(user.username === "Elon")
        {
            let tesla = {name:"Tesla Motors",value:970,location:"U.S.A",phone:"*1234",employes:12,stock:true,image:Tesla}
            let spacex = {name:"Space X",value:90,location:"U.S.A",phone:"*0000",employes:1300,stock:false,image:SpaceX}
            user.business.push(tesla)
            user.business.push(spacex)
        }
        this.props.addUser(user);
        this.setState({ username: "", password: "", cPassword: "", equity: 0, pImage: "" });
        this.props.history.push({
            pathname: '/'
            
        });
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h1>Registration</h1>
                    <p>Welcome to</p>
                    <h3>Big Business Man app</h3>
                </div>
                <br /><br />
                <Form style={{ width: '30%', marginRight: '35%', marginLeft: '35%' }}>
                    <Form.Group controlId="formBasicusername">
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text" value={this.state.username} onChange={this.newUsername} placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.newPass} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" value={this.state.cPassword} onChange={this.confirmPass} placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicusername">
                        <Form.Label>equity</Form.Label>
                        <Form.Text className="text-muted">
                          1 = 1 million U.S.D
                             </Form.Text>
                        <Form.Control type="number" value={this.state.equity} onChange={this.newEquity} placeholder="equity" />
                        <Form.Text className="text-muted">
                            This app is only for billionaires
                             </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" type="image" value={this.state.pImage} onChange={this.newImage} label="Set a profile picture" />
                    </Form.Group>

                    <Button onClick={this.checkUserInfo}> Register</Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(Registration);