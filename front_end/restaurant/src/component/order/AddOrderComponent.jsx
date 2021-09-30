import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddOrderComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            
            
                orderId: '',
                tableNo: '',
                waiter: {
                    userId:''
                },
                status:'Active',
                orderDate: '',
                cost:0,
                message: null
        }
        this.saveOrder = this.saveOrder.bind(this);
    }

    saveOrder = (e) => {
        e.preventDefault();
        let order = {tableNo: this.state.tableNo, waiter: this.state.waiter.userId, status: this.state.status, orderDate: this.state.orderDate, cost: this.state.cost};
          
        console.log(order);
        ApiService.addOrder(order)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Order added successfully.'});
                this.props.history.push('/getAllOrders');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/getAllOrders');
            })
            
    }

    // todaysDate=function MyFunction() {
    //    let tempDate = new Date();
    //     return tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() ;
    //   }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    //     (this.setState(menu => (
    //         {
    //         ...menu,
    //         categoryName: {
    //                     ...menu.categoryName
    //                     },
    //         submenu: {
    //                 subCategory:{
    //                      ...menu.submenu.subCategory
    //                             }, 
    //                 dishes: {
    //                          dishName:{
    //                              ...menu.submenu.dishes.dishName,
    //                              ...menu.submenu.dishes.unitCost
    //                                  }
    //                         }
    //                 }
    //         }
    //    )));

    render() {
        return(
            <div className="col-sm-4">
                <h2 className="text-center">Add Order</h2>
                <form>
                <div className="form-group">
                    <label>Table Number</label>
                    <input type="number" min="1" max="10"  name="tableNo" className="form-control" value={this.state.categoryName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label> Waiter Id</label>
                    <input type="number" min="1" name="userId" className="form-control" value={this.state.subCategory} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>order Date:</label>
                    <input type='date' name="orderDate" className="form-control" readonly="true" defaultValue={new Date().getUTCDate} onChange={this.onChange}/>
                </div>

                {/* <div className="form-group">
                    <label>Unit Cost</label>
                    <input placeholder="Unit Cost in Rs" name="unitCost" className="form-control" value={this.state.unitCost} onChange={this.onChange}/>
                </div> */}

                {/* <div className="form-group">
                    <label>Contact:</label>
                    <input type="number" placeholder="Contact Number" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>CreatedOn</label>
                    <input type="date"  name="createdOn" className="form-control" value={this.state.createdOn} onChange={this.onChange}/>
                </div> */}

                <button className="btn btn-success" onClick={this.saveMenu}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddOrderComponent;