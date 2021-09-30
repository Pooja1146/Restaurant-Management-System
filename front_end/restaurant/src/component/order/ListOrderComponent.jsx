import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListOrderComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            order: [],
            message: null
        }
        this.deleteOrder = this.deleteOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.reloadOrderList = this.reloadOrderList.bind(this);
    }

    componentDidMount() {
        this.reloadOrderList();
    }

    reloadOrderList() {
        ApiService.fetchOrder()
            .then((resp) => {
                this.setState({order: resp.data})
                console.log(this.state.order);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }

    deleteOrder(orderId) {
        ApiService.deleteOrder(orderId)
           .then(res => {
               this.setState({message : 'Order deleted successfully.'});
               this.setState({order: this.state.order.filter(order => order.orderId !== orderId)});
           })

    }

    editOrder(orderId) {
        window.localStorage.setItem("orderId", orderId);
        this.props.history.push('/editOrder');
    }

    addOrder() {
        window.localStorage.removeItem("orderId");
        this.props.history.push('/addOrder');
    }

    generateBill() {
        // window.localStorage.removeItem("orderId");
        // this.props.history.push('/generateBill');
    }
    // Home() {
    //     this.props.history.push('/admin');generateBill
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Order Area</h2>
                <div class="btn-toolbar text-center well">
                <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4" style={{width:'100px',marginLeft:'auto', marginRight:'auto'}} onClick={() => this.addOrder()}> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Order</button>
                {/* <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4 " style={{width:'100px',marginLeft:'800px'}} onClick={() => this.Home()} > <span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</button> */}
                </div>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">orderId</th>
                            <th>tableNo</th>
                            <th>orderDate</th>
                            <th>waiter</th>
                            <th>cost</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.order.map(
                                order =>
                                    <tr key={order.orderId}>
                                        <td>{order.tableNo}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.waiter.name}</td>
                                        <td>{order.cost}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteOrder(order.orderId)}><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
                                         </td>
                                          <td> 
                                               <button className="btn btn-success" onClick={() => this.editOrder(order.orderId)} style={{marginLeft: '10px'}}><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button>
                                        </td>
                                        <td> 
                                               <button className="btn btn-success" onClick={() => this.generateBill(order.orderId)} style={{marginLeft: '10px'}}><span class="glyphicon glyphicon-transfer" aria-hidden="true"></span> generate Bill</button>
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




export default ListOrderComponent;