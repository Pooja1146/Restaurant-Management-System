import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            name: '',
            password: '',
            email: '',
            contactNo: '',
            usertype: ''

        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data;
                console.log(user);
                this.setState({
                userId: user.userId,
                name: user.name,
                email: user.email,
                contactNo: user.contactNo,
                usertype: user.usertype,
                password: user.password,
                createdOn:user.createdOn
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {userId:window.localStorage.getItem("userId"), name: this.state.name, password: this.state.password, email: this.state.email, contactNo: this.state.contactNo, usertype: this.state.usertype, createdOn: this.state.createdOn};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User details updated successfully.'});
                this.props.history.push('/getAllUsers');
            });
    }

    render() {
        return (
            <div className="col-sm-4">
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="name" name="name" className="form-control" readonly="true" defaultValue={this.state.name}/>
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
                    <input  name="createdOn" className="form-control" value={this.state.createdOn} readonly="true" defaultValue={this.state.createdOn}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Update</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;