import { Card, CardActions, CardContent, createStyles, Grid, Grow, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { Blog } from '../../model/Blog';

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