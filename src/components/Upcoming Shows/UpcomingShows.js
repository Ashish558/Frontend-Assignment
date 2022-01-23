import React from 'react'
import { Container, Stack } from '@mui/material'
import { Header } from '../Header/header'

import { useGlobalContext } from '../../context'
import { SingleCard } from './card/SingleCard'

export function Upcomingshows() {
    const { maxContainerWidth, cards } = useGlobalContext()

    const styles = {
        container: {
            maxWidth: `${maxContainerWidth}px`,
            mb: '60px',
            ['@media (min-width:1100px)']: { // eslint-disable-line no-useless-computed-key
                mb: '90px'
            }
        },
    }

    return (
        <Container maxWidth={false} sx={styles.container} >
            {/* End hero unit */}
            <Header title="Upcoming Shows" />
            <Stack direction='row' spacing={2.5} 
            wrap='nowrap'
             sx={{ overflowX: 'auto', overflowY: 'hidden', pt: '10px', pr:'10px' }}
             >
               {cards.map(card=> {
                   return <SingleCard key={card.name} {...card} />
               })}
            </Stack>
        </Container>
    )
}
