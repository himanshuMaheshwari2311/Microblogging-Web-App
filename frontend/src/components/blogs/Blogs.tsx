import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, Card, CardContent, CardActions, Grow, InputBase, Button } from '@material-ui/core';
import { Blog } from '../../model/Blog';
import getBlogsByCategory from '../../service/GetBlogsByCategory';
import { PageState } from '../../constant/page-state.const';
import { BlogContent } from './BlogContent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        cardRoot: {
            backgroundColor: theme.palette.background.paper,
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
        cardAction: {
            fontSize: '10pt',
            fontFamily: 'monospace',
            color: theme.palette.secondary.main,
            marginLeft: '10px',
            flexDirection: 'row-reverse'
        }
    }),
);

interface BlogProps {
    category: string;
}

export const Blogs: React.FC<BlogProps> = ({ category }) => {
    const classes = useStyles();
    const [blogs, setBlog] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<PageState>(PageState.LOADING);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(PageState.LOADING);
        getBlogsByCategory(category)
            .then(blogs => {
                setBlog(blogs.data);
                setTimeout(() => {
                    setLoading(PageState.LOADED);
                }, 1000);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(PageState.ERROR);
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
                <BlogContent loading={loading} blogs={blogs} errorMessage={error} category={category} />
            </Grid>
        </div >
    );
}