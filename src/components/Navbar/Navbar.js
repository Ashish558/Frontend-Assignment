
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import search from '../../components/icons/search.svg'
import basket from '../../components/icons/basket.svg'
import hamburger from '../../components/icons/hamburger.svg'
import { Box, Stack, Typography } from '@mui/material';
import { useGlobalContext } from '../../context';
import useWindowDimensions from '../useWindowDimensions';

const styles = {
    text: {
        cursor: 'pointer',
        color: '#fff'
    },
    icon: {
        px: 1, cursor: 'pointer'
    }
}
const Navbar = () => {
    const { maxContainerWidth } = useGlobalContext()
    const { width } = useWindowDimensions()

    return (
        <AppBar
            position="relative"
            color="default"
            elevation={0}
            sx={{ background: 'transparent', zIndex: '1000' }}
        >
            <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <img src='./assets/logo.png' alt='logo' />
                {width > maxContainerWidth ? (
                    <Stack direction='row' spacing={5} >
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Open-Sans', color: '#fff', cursor: 'pointer' }} >
                            <Box
                                component="img"
                                sx={styles.icon}
                                src={search} />
                            search
                        </Typography>
                        <Typography sx={styles.text} >
                            Help
                        </Typography>
                        <Typography sx={styles.text} >
                            Account
                        </Typography>
                        <Box
                            component="img"
                            sx={styles.icon}
                            src={basket} />

                    </Stack>
                ) : (
                    <Stack direction='row' spacing={1} >
                        <Box
                            component="img"
                            sx={styles.icon} 
                            src={search} />
                        <Box
                            component="img"
                            sx={styles.icon}
                            src={basket} />
                        <Box
                            component="img"
                            sx={styles.icon}
                            src={hamburger} />
                    </Stack>
                )}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar