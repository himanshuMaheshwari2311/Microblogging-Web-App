import { blue, orange, red } from '@material-ui/core/colors';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/WarningOutlined';
import React, { FC } from 'react';
import { Status } from './status.const';
interface StatusIconProps {
    type: Status
}
export const StatusIcon: FC<StatusIconProps> = ({ type }) => {
    switch (type) {
        case 'error':
            return <ErrorIcon style={{ color: red[500] }} />
        case 'warn':
            return <WarningIcon style={{ color: orange[500] }} />
        case 'info':
        default:
            return <InfoIcon style={{ color: blue[500] }} />
    }
}