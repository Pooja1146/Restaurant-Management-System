import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddTaxComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
                    taxId: '',
                    taxName: '', 
                    percentage_tax: '' ,
            message: null
        }
        this.saveTax = this.saveTax.bind(this);
    }

    saveTax = (e) => {
        e.preventDefault();
        let tax = {taxName: this.state.taxName, percentage_tax: this.state.percentage_tax};
        ApiService.addTax(tax)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Tax added successfully.'});
                this.props.history.push('/getAllTaxes');
            }).catch( err=>{
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/getAllTaxes');
            })
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="col-sm-4">
                <h2 className="text-center">Add Tax</h2>
                <form>
                <div className="form-group">
                    <label>Tax Name:</label>
                    <input type="text" placeholder="Tax Name" name="taxName" className="form-control" value={this.state.taxName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Tax %:</label>
                    <input placeholder="Don't put % sign" name="percentage_tax" className="form-control" value={this.state.percentage_tax} onChange={this.onChange}/>
                </div>
                <button className="btn btn-success" onClick={this.saveTax}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddTaxComponent;