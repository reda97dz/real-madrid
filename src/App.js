import React, {useState, useEffect} from 'react'
// import Games from './Components/Games'
import gameService from './Services/games'
import MainContent from './Components/MainContent'
import Squad from './Components/Squad'
// import standingsService from './Services/standings'

import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  // drawer: {
  //   // [theme.breakpoints.up("sm")]: {
  //   //   width: drawerWidth,
  //   //   flexShrink: 0
  //   // }
  // },
  // appBar: {
  //   // marginLeft: drawerWidth,
  //   // [theme.breakpoints.up("sm")]: {
  //   //   width: `calc(100% - ${drawerWidth}px)`
  //   // }
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   // [theme.breakpoints.up("sm")]: {
  //   //   display: "none"
  //   // }
  // },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    paddingTop: theme.spacing(9),
    flexGrow: 20,
    padding: theme.spacing(2)
  }
}))

const App = (props) => {
  // const [upcomingGamesList, setUpcomingGamesList] = useState([])
  // const [finishedGamesList, setFinishedGamesList] = useState([])

  // const hook = () => {
  //   gameService.upcomingGames().then(games => setUpcomingGamesList(games))
  //   gameService.finishedGames().then(games => setFinishedGamesList(games))
  // }
  // useEffect(hook, [])

  const classes = useStyles();
  
  const { container } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <div className={classes.toolbar}>
        <Divider />
        <List>
          {['Squad'].map((text, index)=>(
            <ListItem key={text} component={Link} to={'/'+text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )

  return (
    <div className={classes.root}>

      <CssBaseline/>
      <AppBar position='fixed' className={classes.appBar} >
        <Toolbar>
          <IconButton
          edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <Typography>
            All things Real Madrid
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <nav  className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer 
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Switch>
              <Route exact path="/" render={() => <MainContent />} />
              <Route path="/Squad" render={() => <Squad /> } />
              <Route path="/Starred" render={() => <div>Page starred</div>}/>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
        
      

    </div>
  )
}

export default App
