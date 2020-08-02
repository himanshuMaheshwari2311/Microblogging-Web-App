import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Card, CardContent, Typography, CardActions, Grow } from '@material-ui/core';
import { Blog } from '../../model/Blog';


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
        },
        pos: {
            marginBottom: 12,
        },
    }),
);

interface BlogProps {
    tag: string;
}

const blogs: Blog[] = [
    {
        'title': 'FastAPI microblog backend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'micro-services']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
    {
        'title': 'FastAPI microblog backend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'micro-services']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
    {
        'title': 'FastAPI microblog frontend',
        'category': 'General',
        'message': 'This is so cool',
        'timestamp': '22-01-2020 14:15:03',
        'author': 'stark',
        'tags': ['fastapi', 'front-end']
    },
]

const Blogs: React.FC<BlogProps> = ({ tag }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {blogs.map((blog, index) => (
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
                                <CardActions>
                                    <Typography className={classes.cardAction} gutterBottom>
                                        {blog.timestamp}
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grow>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Blogs;