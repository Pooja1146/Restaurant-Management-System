import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListMenuComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menu: [],
            message: null
        }
        this.deleteMenu = this.deleteMenu.bind(this);
        this.editMenu = this.editMenu.bind(this);
        this.addMenu = this.addMenu.bind(this);
        this.reloadMenuList = this.reloadMenuList.bind(this);
    }

    componentDidMount() {
        this.reloadMenuList();
    }

    reloadMenuList() {
        ApiService.fetchMenu()
            .then((resp) => {
                this.setState({menu: resp.data})
                console.log(this.state.menu);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }

    deleteMenu(CategoryId) {
        ApiService.deleteMenu(CategoryId)
           .then(res => {
               this.setState({message : 'Menu deleted successfully.'});
               this.setState({menu: this.state.menu.filter(menu => menu.CategoryId !== CategoryId)});
           })

    }

    editMenu(CategoryId) {
        window.localStorage.setItem("CategoryId", CategoryId);
        this.props.history.push('/editMenu');
    }

    addMenu() {
        window.localStorage.removeItem("CategoryId");
        this.props.history.push('/addMenu');
    }
    // Home() {
    //     this.props.history.push('/waiter');
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Menu Card</h2>
                <div class="btn-toolbar text-center well">
                <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4" style={{width:'100px',marginLeft:'auto',marginRight:'auto'}} onClick={() => this.addMenu()}> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Menu</button>
                {/* <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4 " style={{width:'100px',marginLeft:'800px'}} onClick={() => this.Home()} > <span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</button> */}
                </div>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">categoryId</th>
                            <th>Category Name</th>
                            <th>Sub Category</th>
                            <th>Dish Name</th>
                            <th>Unit Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.menu.map(
                                menu =>
                                    <tr key={menu.categoryId}>
                                        <td>{menu.categoryName}</td>
                                        <td>{menu.submenu.subCategory}</td>
                                        <td>{menu.submenu.dishes.dishName}</td>
                                        <td>{menu.submenu.dishes.unitCost}</td>
                                        {/* <td>{menu.subMenu.map(subMenu=>
                                           <td> {subMenu.subCategory}</td>
                                           <td> {subMenu.dishes.map(dishes=>
                                            <td>{dishes.DishName}</td>)}</td>
                                           )}
                                        </td>

                                        {/* <td>{menu.subMenu.map(subMenu=>
                                            subMenu.dishes.map(dishes=>
                                            <td>{dishes.DishName}</td>))}
                                        </td> */}

                                        {/* <td>{menu.subMenu.map(subMenu=>
                                            subMenu.dishes.map(dishes=>
                                            dishes.UnitCost))}
                                        </td> */} 

                                        {/* <td>{menu.subMenu.dishes.DishName}</td>
                                        <td>{menu.subMenu.dishes.UnitCost}</td> */}
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteMenu(menu.CategoryId)}><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
                                         </td>
                                          <td> 
                                               <button className="btn btn-success" onClick={() => this.editMenu(menu.CategoryId)} style={{marginLeft: '10px'}}><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button>
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




export default ListMenuComponent;