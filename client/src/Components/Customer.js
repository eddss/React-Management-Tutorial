import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Customer extends Component {
    /*shouldComponentUpdate(newProps, newState) {
        debugger;
        console.log(this.props);
        console.log(newProps);
        if(this.props.id === newProps.id) {
            return false;
        }

        return true;
    }*/
    render() {
        return(   
            <> 
                {/* <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}></CustomerProfile>
                <CustomerInfo birth={this.props.birth} gender={this.props.gender} job={this.props.job}></CustomerInfo> */}
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birth}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell><CustomerDelete id={this.props.id} stateRefresh={this.props.stateRefresh}></CustomerDelete></TableCell>
                </TableRow>
            </>
        );
        
    }
}
/*
class CustomerProfile extends Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name} ({this.props.id})</h2>
            </div>  
        );
    }
}

class CustomerInfo extends Component {
    render() {
        return(
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>  
        );
    }
}*/

export default Customer;