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
import React, { useState } from 'react';
import { Blogs } from '../blogs/Blogs';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { categories } from '../../constant/blog-type.const';
import { Blog } from '../../model/Blog';
import searchBlog from '../../service/SearchBlog';

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
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
            color: theme.palette.secondary.main,
            fontFamily: 'monospace',
            fontSize: '12pt',
            width: '150px',
        },
        iconButton: {
            padding: 10,
            color: theme.palette.secondary.main,
            fontSize: '13pt',
        },
        span: {
            display: 'flex',
            flexGrow: 3,
        },
    }),
);

const Sidenav: React.FC = () => {
    const classes = useStyles();
    const [tag, setTag] = useState('General');
    const [search, setSearch] = useState('');
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const updateTag = (tag: string) => {
        setTag(tag);
    }

    const setSearchText = (event: any) => {
        setSearch(event.target.value);
    }

    const searchBlogHandle = () => {
        searchBlog(search).then(blogs => {
            setBlogs(blogs.data);
        });
        console.log(blogs);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h3" noWrap className={classes.typography}>
                        Microblog
                    </Typography>
                    <span className={classes.span}></span>
                    <InputBase
                        className={classes.input}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={setSearchText}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={searchBlogHandle}>
                        <SearchIcon />
                    </IconButton>
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
                    {categories.map((text, index) => (
                        <ListItem button key={index} onClick={() => updateTag(text)}>
                            <ListItemIcon className={classes.listIcon}><LibraryBooks /></ListItemIcon>
                            <ListItemText primary={text} classes={{ primary: classes.listText }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <Blogs category={tag} />
            </main>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left">
                <List>
                    {categories.map((text, index) => (
                        <ListItem button key={index} onClick={() => updateTag(text)}>
                            <ListItemIcon className={classes.listIcon}><LibraryBooks /></ListItemIcon>
                            <ListItemText primary={text} classes={{ primary: classes.listText }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

export default Sidenav;