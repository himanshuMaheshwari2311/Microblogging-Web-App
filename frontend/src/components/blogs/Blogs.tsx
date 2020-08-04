import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, Card, CardContent, Typography, CardActions, Grow, InputBase, Button } from '@material-ui/core';
import { Blog } from '../../model/Blog';
import getBlogsByCategory from '../../service/GetBlogsByCategory';
import Skeleton from '@material-ui/lab/Skeleton';
import classes from '*.module.css';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        cardRoot: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            fontSize: '14pt',
            fontFamily: 'monospace',
            color: theme.palette.secondary.main,
        },
        content: {
            fontSize: '11pt',
            fontFamily: 'monospace',
            color: theme.palette.secondary.main,
        },
        cardAction: {
            fontSize: '10pt',
            fontFamily: 'monospace',
            color: theme.palette.secondary.main,
            marginLeft: '10px',
            flexDirection: 'row-reverse'
        },
        pos: {
            marginBottom: 12,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
            color: theme.palette.secondary.main,
            fontFamily: 'monospace',
            fontSize: '14pt',
            width: '100%',
        },
        postButton: {
            color: theme.palette.secondary.main,
            fontFamily: 'monospace',
            fontSize: '11pt',
            display: 'flex',
        },
        skeletonStyle: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.secondary.main,
            width: '100%',
            height: '100%',
        },
    }),
);

interface BlogProps {
    category: string;
}
const Loader = () => {
    return <>
        <Grid item xs={12}>
            <Skeleton height={'140px'} variant='rect' animation='wave'/>
        </Grid>
        <br></br>
    </>
}

const Blogs: React.FC<BlogProps> = ({ category }) => {
    const classes = useStyles();
    const [blogs, setBlog] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setLoading(true);
        getBlogsByCategory(category).then(blogs => {
            setBlog(blogs.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
    }, [category]);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Grow in={true} timeout={500}>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardContent>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Post your thoughts here"
                                    inputProps={{ 'aria-label': 'search' }}
                                    autoFocus={true}
                                    multiline={true}
                                />
                            </CardContent>
                            <CardActions className={classes.cardAction}>
                                <Button className={classes.postButton}>Post</Button>
                            </CardActions>
                        </Card>
                    </Grow>
                </Grid>
                {loading ?
                    <Grid item xs={12}>
                        <Loader/>
                        <Loader/>
                    </Grid>
                    :
                    blogs.map((blog, index) => (
                        <Grid item xs={12} key={index}>
                            <Grow in={true} timeout={500 * (index + 1)}>
                                <Card className={classes.cardRoot} variant="outlined" key={index}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            {blog.title}
                                        </Typography>
                                        <Typography className={classes.content} gutterBottom>
                                            {blog.message}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.cardAction}>
                                        <Typography className={classes.cardAction} gutterBottom>
                                            {blog.timestamp}
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </Grid>
                    ))}
            </Grid>
        </div >
    );
}

export default Blogs;