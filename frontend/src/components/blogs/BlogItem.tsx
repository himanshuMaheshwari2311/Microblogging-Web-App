import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, Card, CardContent, Typography, CardActions, Grow, InputBase, Button } from '@material-ui/core';
import { Blog } from '../../model/Blog';
import getBlogsByCategory from '../../service/GetBlogsByCategory';
import Skeleton from '@material-ui/lab/Skeleton';
import classes from '*.module.css';
import { PageState } from '../../constant/page-state.const';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        }
    }),
);

interface BlogItemProps extends Blog {
    index: number
}
const Loader = () => {
    return <>
        <Grid item xs={12}>
            <Skeleton height={'140px'} variant='rect' animation='wave' />
        </Grid>
        <br></br>
    </>
}

export const BlogItem: React.FC<BlogItemProps> = ({ index, title, message, timestamp }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} >
            <Grow in={true} timeout={500 * (index + 1)}>
                <Card className={classes.cardRoot} variant="outlined" key={index}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            {title}
                        </Typography>
                        <Typography className={classes.content} gutterBottom>
                            {message}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                        <Typography className={classes.cardAction} gutterBottom>
                            {timestamp}
                        </Typography>
                    </CardActions>
                </Card>
            </Grow>
        </Grid>
    );
}