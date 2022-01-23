import { Box } from '@mui/material'
import React from 'react'

export default function CardBorder(props) {

    return (
        <Box sx={{
            position: 'absolute',
            top: '-7px',
            right: '-7px',
            height: '100%',
            width: '100%',
            background: 'linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%);',
            borderRadius: '8px',
            zIndex:'-1'
        }}>
        </Box >
    )
}

