import React from 'react'
import { Avatar, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { Header } from '../Header/header'
import CardBorder from './cardBorder'
import { useGlobalContext } from '../../context'

export default function Reviews() {

    const { maxContainerWidth, reviews } = useGlobalContext()
    return (
        <Container sx={{ py: 10, pt: '0', maxWidth: `${maxContainerWidth}px` }} maxWidth={false} >
            {/* End hero unit */}
            <Header title="Reviews" />
            <Stack direction='row' spacing={2.5} wrap='nowrap' sx={{ overflowX: 'auto', overflowY: 'hidden', pt: '10px', pr:'10px' }}>
                {reviews.map((review) => (
                    <div style={{ zIndex: '10', background: '#111229', position: 'relative', borderRadius: '8px' }}>
                        <Card
                            sx={{ background: '#111229', position: 'relative', minWidth: '268px', zIndex: '5', borderRadius: '8px' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: '20px' }}>
                                    <Avatar alt="Person" src={review.img} />
                                    <Box sx={{ displsy: 'flex', flexDirection: 'column', ml: '10px', justifyContent: 'center' }}>
                                        <Typography component='p' fontFamily='Quattrocento' fontSize='15px' color='#fff' >
                                            {review.name}
                                        </Typography>
                                        <div>
                                            <Typography color='rgba(229, 197, 88, 1)' sx={{ display: 'flex', alignItems: 'center' }} >
                                                <img src={review.country.img} alt='flag' />
                                                <Typography component='p' marginLeft='4px' fontSize='12px' fontFamily='Nunito' > {review.country.name}</Typography>
                                            </Typography>
                                        </div>
                                    </Box>
                                </Box>
                                <Typography component='p' fontSize='15px' fontFamily='Nunito' color='rgba(255,255,255,0.8)' mb='16px' sx={{ lineHeight: '24px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                                    laoreet adipiscing.
                                </Typography>
                            </CardContent>

                        </Card>
                        <CardBorder />
                    </div>

                ))}
            </Stack>
        </Container>
    )
}
