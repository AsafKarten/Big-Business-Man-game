import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import { Link, withRouter } from 'react-router-dom';
import Money1 from '../images/Money1.jpg'
import Money2 from '../images/Money2.jpg'
import Money3 from '../images/Money3.jpg'
import background from '../images/background.png'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    //on change functions:
    insertUsername = (e) => {
        this.setState({ username: e.target.value });
    };
    insertPassword = (e) => {
        this.setState({ password: e.target.value });
    };
    //send login request function://fix here hestory.push to profile
    sendLoginDetails = () => {
        if (this.state.username === "" || this.state.password === "") {
            alert('Field cannot be an empty');
            return;
        }
        let details = { username: this.state.username, password: this.state.password }
        this.props.logIn(details);
        this.setState({ username: "", password: "" });//fix here
    };

    render() {
        return (
            <div style={{ textAlign: 'center' , backgroundImage: `url(${background})`, backgroundSize:'cover'}}>
                <h1>Big Business Man app</h1>
                <h3>Login</h3>
                <div style={{width:'40%', height:'40%', marginLeft:'30%'}}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                               className="d-block w-100"
                                src={Money1}
                                alt="First slide"
                                
                            />
                            <Carousel.Caption>
                                <h3>Earn more money</h3>
                                <p>With "Big business man app"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Money2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Create new Business</h3>
                                <p>With "Big business man app"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Money3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Trade with other billionaires</h3>
                                <p>With "Big business man app"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <Form style={{ width: '40%', marginRight: '30%', marginLeft: '30%' }}>
                    <Form.Group controlId="formBasicusername">
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text" value={this.state.username} onChange={this.insertUsername} placeholder="Enter username" />
                        <Form.Text className="text-muted">
                            We'll never share your username with anyone else.
                             </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.insertPassword} placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.sendLoginDetails}>Login</Button>
                    <br /><br /> Don't have an account yet?
                 <Link to="/registration">
                        <Button variant='link'>Sign Up</Button>
                    </Link>
                </Form>
            </div>
        );
    }
}

export default withRouter(Login);