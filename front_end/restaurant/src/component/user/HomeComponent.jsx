import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import mystore from '../../stores/mystore';
import Image from "./login_wallpaper.jpg";
export default class HomeComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            email:"",
            password:"",
            errors: {
                emailerror:"",
                pwderror:""
            },
            emailvalid: false,
            // pwdvalid: false,
            formvalid: false,
            user:{},
            display:"none",
            
        }
    }

    handleChange = (e) =>{
        const emailregex = /^[A-Za-z0-9.]{3,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,5}$/;
        const input = e.target;
        const nm = input.name;
        const val = input.value;
        let errors = this.state.errors;
        let emailflag = this.state.emailvalid;
       
        
        switch(nm)
        {
            case 'email':
                if(!emailregex.test(val))
                {
                    errors.emailerror = "Invalid email";
                    emailflag = false;
                }
                else
                {
                    errors.emailerror ="";
                    emailflag = true;
                }    
                break;
           
            default:
        } 
        this.setState({errors,[nm]: val,emailvalid: emailflag, formvalid: this.state.emailvalid})
    }

    submitReq = (e) => {
        e.preventDefault();
        alert("form is being submitted.....");
        
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        };
        alert(this.state.password);
       
            fetch("http://localhost:8080/login",reqData)
            .then(resp => resp.text())
            .then(data => {

                if(data === "admin")
                {
                    mystore.dispatch({type: 'adminLog_In'});
                //    this.props.history.push("/admin");
                 
                }
                else if(data === "waiter")
                {
                   mystore.dispatch({type: 'wtrLog_In'});
                    //  this.props.history.push("/waiter");
                }
                   
                else if(data === "cashier"){
                    mystore.dispatch({type: 'ctrLog_In'});
                    // this.props.history.push("/cashier");
                }else{
                    this.setState({display:" "});
                    // this.props.history.push("/login");
                }
            });
    }


    render(){          
        return(
            <div  style={{backgroundImage: 'url('+Image+')',backgroundSize: "cover", backgroundPosition: "center"}} >
                <br/>
                
            <center>
                <div class="container-fluid " style={{height:500}}>
                    <div>
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-4 bg-light">
                                <form >
                                    <div className="form-group" >
					                    <label for="email"></label>
					                    <input type="text" id="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="password"></label>
                                        <input  type="password" id="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                    <br/>
                                    <div class="row form-group">
                                            <div class="col-sm-12">
                                                <button disabled={!this.state.formvalid} onClick={this.submitReq} class="btn btn-primary w-100">Log IN</button>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                    </form>
                                    <p style={{display:this.state.display, color:"red", fontSize:"20px" }}>Login failed...try again!!!</p>
                                    <div class="col-sm-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            <br/>
            <br/>
            
            </div>
        );
    }
}



// class="bg_image"
//         style={{
//           backgroundImage: 'url('+Image+')',
//           backgroundSize: "cover",
//           height: "100vh",
//           color: "#f5f5f5",
//           opacity: ""
//         }}



