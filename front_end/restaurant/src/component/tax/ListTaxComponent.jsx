import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListTaxComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            taxes: [],
            message: null
        }
        this.deleteTax = this.deleteTax.bind(this);
        this.editTax = this.editTax.bind(this);
        this.addTax = this.addTax.bind(this);
        this.reloadTaxList = this.reloadTaxList.bind(this);
    }

    componentDidMount() {
        this.reloadTaxList();
    }

    reloadTaxList() {
        ApiService.fetchTax()
            .then((resp) => {
                this.setState({taxes: resp.data})
                console.log(this.state.taxes);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }

    deleteTax(taxId) {
        ApiService.deleteTax(taxId)
           .then(res => {
               this.setState({message : 'Tax deleted successfully.'});
               this.setState({taxes: this.state.taxes.filter(tax => tax.taxId !== taxId)});
           })

    }

    editTax(taxId) {
        window.localStorage.setItem("taxId", taxId);
        this.props.history.push('/editTax');
    }

    addTax() {
        window.localStorage.removeItem("taxId");
        this.props.history.push('/addTax');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Tax Details</h2>
                <div class="btn-toolbar text-center well">
                <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4" style={{width:'100px',marginLeft:'auto', marginRight:'auto'}} onClick={() => this.addTax()}> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Tax</button>
                {/* <button className="btn btn-primary btn-color btn-bg-color btn-ls col-xs-4 " style={{width:'100px',marginLeft:'800px'}} onClick={() => this.Home()} > <span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</button> */}
                </div>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th className="hidden">taxId</th>
                        <th>Tax name</th>
                        <th>Tax %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.taxes.map(
                        tax =>
                                    <tr key={tax.taxId}>
                                        <td>{tax.taxName}</td>
                                        <td>{tax.percentage_tax}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteTax(tax.taxId)}><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
                                         </td>
                                          <td> 
                                               <button className="btn btn-success" onClick={() => this.editTax(tax.taxId)} style={{marginLeft: '10px'}}><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button>
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




export default ListTaxComponent;