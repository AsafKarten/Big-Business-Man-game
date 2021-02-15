import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Community extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    viewProfile=(username)=>{
        this.props.pushProfile(username)
        this.props.history.push({
            pathname: '/user-profile' 
          
          });
       
    }

    render() {
        return (
            <div>
                <nav>
                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', listStyle: 'none', minHeight: '50px', backgroundColor: 'green', color: 'yellow' }}>
                        <Link to="/shop" style={{ color: 'yellow' }}>
                            <li >Shop</li>
                        </Link>
                        <Link to="/business"  style={{ color: 'yellow' }}>
                            <li >Business</li>
                        </Link>
                        <Link to="/add-new-business"  style={{ color: 'yellow' }}>
                            <li >+Business</li>
                        </Link>
                        <Link to="/profile" style={{ color: 'yellow' }}>
                            <li>Profile</li>
                        </Link>
                        <Link to="/" style={{ color: 'yellow' }}>
                            <li>Log out</li>
                        </Link>
                    </ul>
                </nav>
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    {this.props.users.filter((u) => u.username !== this.props.loggedUser).map((user, index) =>
                        <Card key={index} style={{ width: '18rem', marginLeft: '10%' }} key={index}>
                            <Card.Img variant="top" src={user.pImage} />
                            <Card.Body>
                                <Card.Title>{user.username}</Card.Title>
                                <Card.Text>
                                    Value: {user.equity},000,000 $
                                 </Card.Text>
                                <Button onClick={()=>this.viewProfile(user.username)} variant="primary">Veiw profile</Button>
                            </Card.Body>
                        </Card>

                    )}
                </div>
            </div>

        )
    }
}

export default withRouter(Community) 