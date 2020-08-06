import { Button, Card, CardActions, CardContent, createStyles, Grid, Grow, InputBase, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { PageState } from '../../constant/page-state.const';
import { Blog } from '../../model/Blog';
import getBlogsByCategory from '../../service/GetBlogsByCategory';
import postBlog from '../../service/PostBlogs';
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
            fontSize: '13pt',
            width: '100%',
        },
        title: {
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
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(PageState.LOADING);
        getBlogsByCategory(category)
            .then(blogs => {
                setBlog(blogs.data.reverse());
                setTimeout(() => {
                    setLoading(PageState.LOADED);
                }, 1000);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(PageState.ERROR);
            });
    }, [category]);

    const setMessageContent = (event: any) => {
        setMessage(event.target.value);
    }

    const setTitleContent = (event: any) => {
        setTitle(event.target.value);
    }

    const handlePost = () => {
        let blog : Blog = {
            title: title,
            author: 'stark',
            message: message,
            category: category,
            timestamp: '2020-08-01 17:15:26'
        };
        postBlog(blog).then(blog => {
            console.log(blog);
            let updatedBlogs: Blog[] = [blog.data , ...blogs ];
            setBlog(updatedBlogs);
        });
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}> 
                <Grid item xs={12} >
                    <Grow in={true} timeout={500}>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardContent>
                                <InputBase
                                    className={classes.title}
                                    placeholder="Title"
                                    inputProps={{ 'aria-label': 'title' }}
                                    onChange={setTitleContent}
                                />
                                <InputBase
                                    className={classes.input}
                                    placeholder="Post your thoughts here"
                                    inputProps={{ 'aria-label': 'search' }}
                                    autoFocus={true}
                                    multiline={true}
                                    onChange={setMessageContent}
                                />
                            </CardContent>
                            <CardActions className={classes.cardAction}>
                                <Button className={classes.postButton} onClick={handlePost}>Post</Button>
                            </CardActions>
                        </Card>
                    </Grow>
                </Grid>
                <BlogContent loading={loading} blogs={blogs} errorMessage={error} category={category} />
            </Grid>
        </div >
    );
}