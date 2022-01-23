import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../../../context'
import useWindowDimensions from '../../useWindowDimensions'

import { Circleprogress } from './circleProgress'

const styles = {
    circle: {
        width: '165px',
        height: '165px',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        ['@media (min-width:1100px)']: { // eslint-disable-line no-useless-computed-key
            width: '208px',
            height: '208px',
        }
    },
    container: {
        px: '16px',
        overflowX: 'auto',
        overflowY: 'hidden',
        ['@media (min-width:800px)']: { // eslint-disable-line no-useless-computed-key
            justifyContent: 'center'
        }
    }
}

export function Dashboard(props) {
    const { dashboards } = useGlobalContext()
    const { width } = useWindowDimensions()

    return (
        <Stack direction='row'
            spacing={width > 900 ? 5 : 2}
            sx={styles.container}
        >

            {dashboards.map(dashboard => {
                return (
                    <Box position='relative' sx={styles.circle}>
                        <Circleprogress />
                        <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={dashboard.icon} alt='person' />
                            <Typography variant='h5' color="rgba(255,255,255,1)" fontFamily='Libre_Baskerville' margin={'5px 7px'} fontWeight={'lighter'} >
                                {dashboard.number}
                            </Typography>
                            <Typography variant='p' color="rgba(255,255,255,0.5)" fontFamily='Nunito' fontSize='13px' noWrap>
                                {dashboard.label}
                            </Typography>
                        </Box>
                    </Box>
                )
            })}
        </Stack>
    )
}
