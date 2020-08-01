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
import Blogs from '../Blogs/Blogs';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
        listText: {
            fontSize: '12pt'
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
                    <Typography variant="h4" noWrap>
                        Blog
            </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <List>
                    {['General', 'Machine Learning', 'Front End', 'Back End', 'Desgin Patterns', 'Cloud', 'Technology'].map((text, index) => (
                        <ListItem button key={text} onClick={() => updateTag(text)}>
                            <ListItemIcon><LibraryBooks /></ListItemIcon>
                            <ListItemText primary={text} classes={{primary: classes.listText}}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <Blogs tag={tag}/>
            </main>
        </div>
    );
}

export default Sidenav;