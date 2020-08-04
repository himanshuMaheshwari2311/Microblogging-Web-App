import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export const Loader: FC = () => {
    return <>
        <Grid item xs={12}>
            <Skeleton height={'140px'} variant='rect' animation='wave' />
        </Grid>
        <br></br>
    </>
}