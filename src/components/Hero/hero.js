import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box } from '@mui/material'
import { Content } from './content'
import { Dashboard } from './dashboard/dashboard'
import useWindowDimensions from '../useWindowDimensions'

export function Hero(props) {
    const { width } = useWindowDimensions()
    return (
        <Container maxWidth='false' sx={{ px: 0, height: '100vh', zIndex: '10', position: 'relative' }}>
            
            <div className='bg-img-container'>
                <Box
                    component="div"
                    sx={{
                        position: 'absolute',
                        top: '0', left: '0',
                        height: '100%',
                        width: '100%',
                        background: 'linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%);'
                    }}
                />
                <img src={width < 550 ? './assets/bg.png' : './assets/bg-expanded.png'} className='bg-img' alt='background' />
            </div>

            <Box sx={{maxWidth:'1100px', height:'100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', margin: '0 auto' }}>
                <Navbar />
                <Content />
                <Dashboard />
            </Box>

        </Container>
    )
}
