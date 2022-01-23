import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

const styles = {
    title: {
        fontFamily: 'Libre_Baskerville',
        color: 'rgba(255,255,255)',
        ['@media (min-width:1100px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '60px'
        }
    },
    subTitle: {
        fontFamily: 'Nunito', 
        color: 'rgba(255,255,255, 0.6)' ,
        ['@media (min-width:1100px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '20px'
        }
    }
}
export function Content(props) {

    return (
        <Box component="div"
            sx={{ px: '14px' }}
        >
            <Typography variant='h3' component='h2'
                sx={styles.title} gutterBottom >
                Cari Cari
            </Typography>
            <Typography component='h2'
                sx={styles.subTitle} >
                Live from their sofa to yours. Get closer to your favorite artists, and never miss out.
            </Typography>
        </Box>
    )
}
