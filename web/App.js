import React from 'react';
import styles from './styles/index.scss';
import logo from './logo.svg' ;
import axios from 'axios';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
        email:'',
        password:''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        event.preventDefault();
        axios.post('http://localhost:3000/api/login', { email:this.state.email, password:this.state.password })
        .then(function(response){
            alert("Login Success");
        })
        
        .catch(function (error) {
            document.getElementById("panel").style.display = "block";
            });
        }
    changeEmail(email){
        this.setState({email});
    }
    handleChangeEmail(e){
        const email=e.target.value;
        this.changeEmail(email);
    }
    changePassword(password){
        this.setState({password});
    }
    handleChangePass(e){
        const password=e.target.value;
        this.changePassword(password);
    }

    
    render() {
        return (
             <div className="bg">
                <div className="lable">
                    <div className="form">
                        <form className="login-form">
                            <img className="logo-spin" src={logo} alt={"logo"} width="180"/> 
                            <p>E-mail address</p>
                            <input onChange={this.handleChangeEmail.bind(this)}/>
                            <p>Password</p>
                            <input type="password" onChange={this.handleChangePass.bind(this)}/>
                            <div id="panel">Email or Password is incorrect</div>
                            <button onClick={(event) => this.handleClick(event)}>login</button>
                            <a className="forgotPass" >Forgot Password</a>
                            <a className="createAcc" >Create an account</a>
                        </form>
                    </div>
                 </div>
             </div>
    );
    }
}

export default App;
