import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((resp) => {
                this.setState({users: resp.data})
                console.log(this.state.users);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.userId !== userId)});
           })

    }

    editUser(userId) {
        window.localStorage.setItem("userId", userId);
        this.props.history.push('/editUser');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/addUser');
    }
    // Home() {
    //     this.props.history.push('/admin');
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <div class="btn-toolbar text-center well">
                <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4" style={{width:'100px',marginLeft:'auto', marginRight:'auto'}} onClick={() => this.addUser()}> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add User</button>
                {/* <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4 " style={{width:'100px',marginLeft:'800px'}} onClick={() => this.Home()} > <span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</button> */}
                </div>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">userId</th>
                            <th>user name</th>
                            <th>email</th>
                            <th>cantact number</th>
                            <th>user type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.userId}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contactNo}</td>
                                        <td>{user.usertype}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.userId)}><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
                                         </td>
                                          <td> 
                                               <button className="btn btn-success" onClick={() => this.editUser(user.userId)} style={{marginLeft: '10px'}}><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <span></span>
            </div>
            
        );
    }

}




export default ListUserComponent;