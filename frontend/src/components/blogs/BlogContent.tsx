import React, { FC } from 'react';
import { PageState } from '../../constant/page-state.const';
import { Blog } from '../../model/Blog';
import { BlogItem } from './BlogItem';
import { Grid } from '@material-ui/core';
import { Loader } from '../common/Loader';
import { ContentStatus } from '../common/ContentStatus/ContentStatus';

interface BlogContentProps {
    loading: PageState
    blogs: Blog[]
    errorMessage: string
    category: string
}

export const BlogContent: FC<BlogContentProps> = ({ loading, blogs, errorMessage, category }) => {
    switch (loading) {
        case PageState.LOADED:
            return <>
                {blogs === [] ?
                    <ContentStatus type={'info'} title={'No Data Found'} message={`There are no blogs for ${category}`} />
                    : blogs.map((blog, index) => (
                        <BlogItem key={index} index={index} {...blog} />
                    ))}
            </>
        case PageState.ERROR:
            return <ContentStatus type={'error'} title={'System Error'} message={errorMessage} />
        case PageState.LOADING:
            return <Grid item xs={12}>
                <Loader />
                <Loader />
            </Grid>
        default:
            return <></>
    }
}
