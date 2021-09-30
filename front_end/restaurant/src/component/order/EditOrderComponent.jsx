import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditMenuComponent extends Component {

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
                <h2 className="text-center">Edit Menu</h2>
                <form>

                    <div className="form-group">
                        <label>Category Name:</label>
                        <input type="text" placeholder="veg, non-veg" name="name" className="form-control"  defaultValue={this.state.name}/>
                    </div>

                    <div className="form-group">
                    <label>Sub Category:</label>
                    <input type="text" placeholder="parahta, burger" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                    <label>Dish Name:</label>
                    <input placeholder="alu paratha, etc" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                    <label>Unit Cost:</label>
                    <input type="number" placeholder="In Rs" name="usertype" className="form-control" value={this.state.usertype} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Update</button>
                </form>
            </div>
        );
    }
}

export default EditMenuComponent;