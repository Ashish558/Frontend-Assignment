import { Box, Typography } from '@mui/material'
import React from 'react'
import left from '../icons/left.svg'
import right from '../icons/right.svg'

export function Header({ title }) {
    console.log(title)
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '30px' }}>

            <Typography position='relative' variant='h5' fontFamily='Libre_Baskerville' color='#fff' font-weight='normal' pb='15px'>
                {title}
                <Box sx={{ position: 'absolute', bottom: '0', left: '0', width: '48px', height: '3px', background: 'rgba(2, 89, 235, 1)', borderRadius: '16px' }}></Box>
            </Typography>
            {title === 'Reviews' ?
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component='p' fontFamily='Nunito' color='#fff' mr='30px' >
                        1 / 
                        <Typography  variant='span' fontFamily='Nunito' color='#fff' pl='2px' sx={{opacity: '0.6', display: 'inline-block'}} >
                         12
                        </Typography>
                    </Typography>
                    <Box component='img' mr='19px' src={left} />
                    <img src={right} alt='right-icon' />
                </Box>
                :
                <Typography variant='p' size='14px' color='rgba(229, 197, 88, 1)' fontFamily='Nunito'  >
                    View all
                </Typography>
            }
        </Box>
    )
}
