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

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
    minWidth: 1080
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  progress: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
});




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      completed: 0,
      searchKeyword: ''
    };
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0,
      searchKeyword: ''
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

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)
  }

  render() {
    const filteredComponents = (data) => {
      
      data = data.filter((c) => {
        return c.NAME.indexOf(this.state.searchKeyword) > -1;
      });
      
      console.log("######");
      console.log(data);
      return data.map((customer) =>{
        return <Customer 
            key={customer.ID} 
            id={customer.ID} 
            image={customer.IMAGE} 
            name={customer.NAME} 
            birth={customer.BIRTH} 
            gender={customer.GENDER} 
            job={customer.JOB}
            stateRefresh={this.stateRefresh}
          ></Customer>
      })
    }

    const { classes } = this.props;
    const cellList = [{
      "colname": "번호",
      "width": "100px"
    },{
      "colname": "프로필 이미지",
      "width": "100%"
    },{
      "colname": "이름",
      "width": "200px"
    },{
      "colname": "생년월일",
      "width": "150px"
    },{
      "colname": "성별",
      "width": "100px"
    },{
      "colname": "직업",
      "width": "200px"
    },{
      "colname": "설정",
      "width": "100px"
    }
    ]
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              고객 관리 시스템
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="검색하기"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
              />
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.menu}>
          <CustomerAdd stateRefresh={this.stateRefresh}></CustomerAdd>
        </div>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <colgroup>
              <col style={{width:'100px'}}/>
              <col style={{width:'20%'}}/>
              <col style={{width:'200px'}}/>
              <col style={{width:'200px'}}/>
              <col style={{width:'100px'}}/>
              <col style={{width:'200px'}}/>
              <col style={{width:'100px'}}/>
            </colgroup>
            <TableHead>
              <TableRow>
                {
                  cellList.map((c, index) => {
                    return(
                      <TableCell className={classes.TableHead} width={c.width} key={index}>{c.colname}</TableCell>      
                  )})
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ?
                filteredComponents(this.state.customers) : 
              <TableRow>
                <TableCell colSpan="7" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}></CircularProgress>
                </TableCell>
              </TableRow>}
            </TableBody>
          </Table>      
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
