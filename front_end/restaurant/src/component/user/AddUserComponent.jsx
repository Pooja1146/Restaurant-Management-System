import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            password: '',
            email: '',
            contactNo: '',
            createdOn: '',
            usertype: '',
            // createdOn: '{new Date(). toLocaleString() + ""}',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, password: this.state.password, email: this.state.email, contactNo: this.state.contactNo, createdOn: this.state.createdOn, usertype: this.state.usertype};
        ApiService.addUser(user)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/getAllUsers');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/getAllUsers');
            })
            
    }

    // currentDate=function MyFunction() {
    //     var tempDate = new Date();
    //     return tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() ;
    //   }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="col-sm-4">
                <h2 className="text-center">Add User</h2>
                <form>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" placeholder="userName" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>User Type:</label>
                    <input placeholder="admin, waiter, cashier" name="usertype" className="form-control" value={this.state.usertype} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Contact:</label>
                    <input type="number" placeholder="Contact Number" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>CreatedOn</label>
                    <input type="date"  name="createdOn" className="form-control" value={this.state.createdOn} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddUserComponent;