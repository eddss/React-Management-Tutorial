import React, { Component } from 'react';
import './App.css';
import Customer from './Components/Customer';
import CustomerAdd from './Components/CustomerAdd';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { debounce } from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
});




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      completed: 0
    };
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => {
        this.setState({customers: res})
        console.log(res);
      }
    )
    .catch(err => alert(err))
  }
  

  componentDidMount() {
    this.timer = setInterval(this.progress, 100);
    this.callApi()
    .then(res => {
        this.setState({customers: res})
        console.log(res);
        clearInterval(this.timer);
      }
    )
    .catch(err => alert(err))
  }

  callApi = async() => {
    const response = await fetch('api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed :  completed >= 100 ? 0 : completed + 1});
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
                <TableCell>삭제</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(customer=>{
                return(
                  <Customer 
                    key={customer.ID} 
                    id={customer.ID} 
                    image={customer.IMAGE} 
                    name={customer.NAME} 
                    birth={customer.BIRTH} 
                    gender={customer.GENDER} 
                    job={customer.JOB}
                    stateRefresh={this.stateRefresh}
                  >
                  </Customer>
                );
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}></CircularProgress>
                </TableCell>
              </TableRow>}
            </TableBody>
          </Table>      
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}></CustomerAdd>
      </>
    );
  }
}

export default withStyles(styles)(App);
