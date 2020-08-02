import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import React from 'react';
import Blogs from '../blogs/Blogs';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: theme.palette.background.paper,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.background.paper,
            boxShadow: '3px 0 6px 2px rgba(0,0,0,0.1)',
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            marginTop: '56px',
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(3),
            height: 'calc(100vh - 56px)',
            overflowY: 'auto',
        },
        listText: {
            fontSize: '12pt',
            color: theme.palette.secondary.main,
            fontFamily: 'monospace',
        },
        listIcon: {
            minWidth: '30px',
            color: theme.palette.secondary.main,
        },
        typography: {
            fontFamily: 'monospace',
            color: theme.palette.secondary.main,
        }
    }),
);

const Sidenav: React.FC = () => {
    const classes = useStyles();
    const [tag, setTag] = React.useState('General');

    const updateTag = (tag: string) => {
        setTag(tag);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h3" noWrap className={classes.typography}>
                        Microblog
            </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left">
                <List>
                    {['General', 'Machine Learning', 'Front End', 'Back End', 'Desgin Patterns', 'Cloud', 'Technology'].map((text, index) => (
                        <ListItem button key={text} onClick={() => updateTag(text)}>
                            <ListItemIcon className={classes.listIcon}><LibraryBooks /></ListItemIcon>
                            <ListItemText primary={text} classes={{primary: classes.listText}}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
            <Blogs tag={tag}/>
            </main>
        </div>
    );
}

export default Sidenav;