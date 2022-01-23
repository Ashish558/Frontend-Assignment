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
            background: 'linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)',
            borderRadius: '8px',
            zIndex:'-1'
        }}>
        </Box >
    )
}
