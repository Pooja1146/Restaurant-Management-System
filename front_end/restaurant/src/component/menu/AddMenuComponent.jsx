import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddMenuComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            
            
                categoryId: '',
                categoryName: '',
                submenu: {
                    subCategory: '',
                    dishes: {
                        dishName: '',
                        unitCost: ''
                    }
                },
                message: null
        }
        this.saveMenu = this.saveMenu.bind(this);
    }

    saveMenu = (e) => {
        e.preventDefault();
        let menu = {
                        categoryName: this.state.categoryName, 
                        submenu:{
                                    subCategory: this.state.submenu.subCategory,
                                    dishes:{
                                            dishName: this.state.submenu.dishes.dishName,
                                            unitCost: this.state.submenu.dishes.unitCost
                                            } 
                                }
                    }
          
        console.log(menu);
        ApiService.addMenu(menu)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Menu added successfully.'});
                this.props.history.push('/getAllMenus');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/getAllMenus');
            })
            
    }

    // currentDate=function MyFunction() {
    //     var tempDate = new Date();
    //     return tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() ;
    //   }

    onChange = (e) =>
        // this.setState({ [e.target.name]: e.target.value });
        (this.setState(menu => (
            {
            ...menu,
            categoryName: {
                        ...menu.categoryName
                        },
            submenu: {
                    subCategory:{
                         ...menu.submenu.subCategory
                                }, 
                    dishes: {
                             dishName:{
                                 ...menu.submenu.dishes.dishName,
                                 ...menu.submenu.dishes.unitCost
                                     }
                            }
                    }
            }
       )));

    render() {
        return(
            <div className="col-sm-4">
                <h2 className="text-center">Add Menu</h2>
                <form>
                <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" placeholder="Veg, Non-veg" name="categoryName" className="form-control" value={this.state.categoryName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label> Sub Category</label>
                    <input type="text" placeholder="Pizza, Paratha, Burger" name="subCategory" className="form-control" value={this.state.subCategory} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Dish Name:</label>
                    <input placeholder="CornPizza, Chicken Burger" name="dishName" className="form-control" value={this.state.dishName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Unit Cost</label>
                    <input placeholder="Unit Cost in Rs" name="unitCost" className="form-control" value={this.state.unitCost} onChange={this.onChange}/>
                </div>

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

export default AddMenuComponent;