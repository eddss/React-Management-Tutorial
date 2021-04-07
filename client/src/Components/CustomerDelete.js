import React, { Component } from 'react';
import { post } from 'axios';

class CustomerDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birth: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: "DELETE"
        }).then((response) => {
            this.props.stateRefresh();
        });        
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }

  
}

export default CustomerDelete