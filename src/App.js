import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import './App.css';
import Community from './classComponents/Community';
import AddBusi from './classComponents/AddBusi';
import Business from './classComponents/Business';
import Registration from './classComponents/Registration';
import Login from './classComponents/Login';
import Shop from './classComponents/Shop';
import Profile from './classComponents/Profile';
import Uprofile from './classComponents/Uprofile';
import SendMessage from './classComponents/SendMessage';
import Messages from './classComponents/Messages';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedUser: '',
      counter: 0,
      counterB: 0,
      friend: ''
    }
  }
  //Functions
  //f1. Register New User
  addUser = (user) => {
    let temp = [...this.state.users, user];
    this.state.counter++
    if (this.state.counter === 5) {
      this.setState({ counter: 0 })
    }
    this.setState({ users: temp });

  }

  //f2. Login function
  logIn = (details) => {
    let user = this.state.users.find((u) => u.username === details.username && u.password === details.password);
    if (user === undefined) {
      alert("oops one of the details is wrong");
      return;
    }
    else {
      this.props.history.push({
        pathname: '/profile'
      });
      this.setState({ loggedUser: user.username });
    }
  }
  //f3. add business to store
  addToStore = (name, i) => {
    let user = this.state.users.find((u) => u.username === this.state.loggedUser)
    let tempB = user.business.find((b) => b.name === name)
    user.onSale.push(tempB)
    user.business.splice(i, 1)
    let index = this.state.users.indexOf(user)
    this.state.users.splice(index, 1)
    this.setState((prev) => ({
      loggedUser: user.username,
      users: [...this.state.users, user]
    }))


  }

  //f4. move business from seller to buyer
  setTrade = (username, name, i) => {
    let buyer = this.state.users.find((b) => b.username === this.state.loggedUser)
    let seller = this.state.users.find((s) => s.username === username)          
    let item = seller.onSale.find((o) => o.name === name)                  
    let price = item.value                                                 
    if (buyer.equity >= price) {                                         
      buyer.equity = buyer.equity - price                                
      let pay = seller.equity * 1 + price * 1                             
      seller.equity = pay                                                 
      seller.onSale.splice(i, 1)                                          
      let index = this.state.users.indexOf(seller)                      
      this.state.users.splice(index, 1)                                        
      buyer.business.push(item)                                           
      let indexB = this.state.users.indexOf(buyer)                         
      this.state.users.splice(indexB, 1)                                   
      this.setState((prev) => ({
        loggedUser: buyer.username,                                     
        users: [...this.state.users, seller, buyer]
      }))
    }
    else {
      alert("you don't have enough money :( ")
    }

  }
  //f5. add new business
  setNewBusiness = (details) => {
    this.state.counterB++
    if (this.state.counterB === 4) {
      this.setState({ counterB: 0 })
    }
    let user = this.state.users.find((u) => u.username === this.state.loggedUser)
    user.business.push(details)
    let index = this.state.users.indexOf(user)
    this.state.users.splice(index, 1)
    this.setState((prev) => ({
      loggedUser: user.username,
      users: [...this.state.users, user]
    }))


  }
  //f6. add cash
  addCash = () => {
    let user = this.state.users.find((u) => u.username === this.state.loggedUser)
    user.equity++
    let index = this.state.users.indexOf(user)
    this.state.users.splice(index, 1)
    this.setState((prev) => ({
      loggedUser: user.username,
      users: [...this.state.users, user]
    }))


  }
  //f7. Veiw other user profile
  pushProfile = (username) => {

    this.setState((prev) => ({
      friend: username
    }));

  }

  //f8. send other user message
  setMessage = (message) => {
    let user = this.state.users.find((u) => u.username === this.state.friend)
    user.messages = [...user.messages, message]
    let index = this.state.users.indexOf(user)
    this.state.users.splice(index, 1)
    this.setState((prev) => ({
      loggedUser: message.sender,
      friend: user.username,
      users: [...this.state.users, user]
    }))
  }
  //f9. Delete Message
  setDelete = (index) => {
    let user = this.state.users.find((u) => u.username === this.state.loggedUser)
    user.messages.splice(index, 1)
    let i = this.state.users.indexOf(user)
    this.state.users.splice(i, 1)
    this.setState((prev) => ({
      loggedUser: user.username,
      friend: '',
      users: [...this.state.users, user]
    }))
  }
  //f10. set Reply Message
  setReplyMessage = (m) => {
    this.setState((prev) => ({
      friend: m.sender,
      loggedUser: m.getter
    }));
    this.props.history.push({
      pathname: '/send-message'

    });
  }
  //f11. return business from on sell 
  returnBusiness = (i, name) => {
    let user = this.state.users.find((u) => u.username === this.state.loggedUser)
    let tempB = user.onSale.find((b) => b.name === name)
    user.business.push(tempB)
    user.onSale.splice(i, 1)
    let index = this.state.users.indexOf(user)
    this.state.users.splice(index, 1)
    this.setState((prev) => ({
      loggedUser: user.username,
      users: [...this.state.users, user]
    }))
  }

  render() {
    return (
      <div >

        <Switch>
          <Route exact path="/" render={() => <Login logIn={this.logIn} />} />
          <Route exact path="/registration" render={() => <Registration addUser={this.addUser} users={this.state.users} counter={this.state.counter} />} />
          <Route exact path="/profile" render={() => <Profile addCash={this.addCash} loggedUser={this.state.loggedUser} users={this.state.users} />} />
          <Route exact path="/business" render={() => <Business returnBusiness={this.returnBusiness} addToStore={this.addToStore} loggedUser={this.state.loggedUser} users={this.state.users} />} />
          <Route exact path="/add-new-business" render={() => <AddBusi setNewBusiness={this.setNewBusiness} loggedUser={this.state.loggedUser} users={this.state.users} counter={this.state.counterB}/>} />
          <Route exact path='/community' render={() => <Community pushProfile={this.pushProfile} loggedUser={this.state.loggedUser} users={this.state.users}  />} />
          <Route exact path="/shop" render={() => <Shop setTrade={this.setTrade} loggedUser={this.state.loggedUser} users={this.state.users} />} />
          <Route exact path="/user-profile" render={() => <Uprofile setTrade={this.setTrade} friend={this.state.friend} loggedUser={this.state.loggedUser} users={this.state.users} />} />
          <Route exact path="/send-message" render={() => <SendMessage setMessage={this.setMessage} friend={this.state.friend} loggedUser={this.state.loggedUser} users={this.state.users} />} />
          <Route exact path="/messages" render={() => <Messages setDelete={this.setDelete} setReplyMessage={this.setReplyMessage} friend={this.state.friend} loggedUser={this.state.loggedUser} users={this.state.users} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
