import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import useWindowDimensions from '../../useWindowDimensions';
import { useGlobalContext } from '../../../context';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative"
    },
    bottom: {
        color: "#DB4CAA"
    },
    top: {
        color: "red",
        animationDuration: "550ms",
        position: "absolute",
        left: 0
    },
    circle: {
        strokeLinecap: "round"
    }
}))


export function Circleprogress(props) {
    const classes = useStyles();
    const { width }= useWindowDimensions()
    const {maxContainerWidth} = useGlobalContext()

    return (
        <div style={{ transform: 'translateY(-1px)' }}>

            <CircularProgress position='absolute'
                variant="determinate"
                className={classes.bottom}
                 size={width > maxContainerWidth ? '208px' : '165px'}
                thickness={0.3}
                {...props}
                value={60}
               
            />
        </div>
    )
}
