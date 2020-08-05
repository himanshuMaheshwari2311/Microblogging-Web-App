import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import { Status } from './status.const';
import { StatusIcon } from './StatusIcon';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentRoot: {
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            color: theme.palette.secondary.main,
            fontFamily: 'monospace',
            padding: '10px 0'
        }
    })
)
interface ContentStatusProps {
    type: Status
    title: string
    message: string
}
export const ContentStatus: FC<ContentStatusProps> = ({ type, message, title }) => {
    const classes = useStyles();
    return <div className={classes.contentRoot}>
        <StatusIcon type={type} />
        <div>
            {title}
        </div>
        <div>
            {message}
        </div>
    </div>
}