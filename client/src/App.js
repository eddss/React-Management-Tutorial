import React, { Component } from 'react';
import './App.css';
import Customer from './Components/Customer';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080
  }
});

const customers = [{
  id: "1",
  image: "http://www.newscj.com/news/photo/201001/31870_28928_182.jpg",
  name: "홍길동",
  birth: "961122",
  gender: "남",
  job : "도둑",
},
{
  id: "2",
  image: "https://inthestatus.com/jkwp/wp-content/uploads/2020/04/%EA%B3%A0%EA%B8%B8%EB%8F%99_6120200415092553.jpg",
  name: "고길동",
  birth: "710304",
  gender: "남",
  job : "모름",
},
{
  id: "3",
  image: "https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=201001131408300020936dgame_1.jpg",
  name: "손오공",
  birth: "850613",
  gender: "남",
  job : "무직",
}]


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
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
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(customer=>{
              return(
                <Customer 
                  key={customer.id} 
                  id={customer.id} 
                  image={customer.image} 
                  name={customer.name} 
                  birth={customer.birth} 
                  gender={customer.gender} 
                  job={customer.job}
                >
                </Customer>
              );
            })}
          </TableBody>
        </Table>      
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
