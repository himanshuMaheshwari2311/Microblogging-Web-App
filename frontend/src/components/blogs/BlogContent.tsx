import React, { FC } from 'react';
import { PageState } from '../../constant/page-state.const';
import { Blog } from '../../model/Blog';
import { BlogItem } from './BlogItem';
import { Grid } from '@material-ui/core';
import { Loader } from '../common/Loader';

interface BlogContentProps {
    loading: PageState
    blogs: Blog[]
}

export const BlogContent: FC<BlogContentProps> = ({ loading, blogs }) => {
    switch (loading) {
        case PageState.LOADING:
            return <>
                {blogs.map((blog, index) => (
                    <BlogItem key={index} index={index} {...blog} />
                ))}
            </>
        case PageState.ERROR:
            return <>
                Error
            </>
        case PageState.LOADING:
            return <Grid item xs={12}>
                <Loader />
                <Loader />
            </Grid>
        default:
            return <></>
    }
}
