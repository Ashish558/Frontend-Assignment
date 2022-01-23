import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import ticket from '../../icons/ticket.svg'
import ticketClicked from '../../icons/ticket-clicked.svg'
import arrowRight from '../../icons/arrow-right.svg'
import CardBorder from './cardBorder'
import { useGlobalContext } from '../../../context'

export function SingleCard({ name, img, label, isClicked }) {
    const { updateCardsTicket } = useGlobalContext()

    return (
        <div style={{ zIndex: '10', background: '#111229', position: 'relative', borderRadius: '8px' }}>
            <Card
                sx={{ background: '#111229', position: 'relative', minWidth: '230px', zIndex: '5', borderRadius: '8px' }}
            >
                <CardMedia
                    component="img"
                    image={img}
                    alt="person"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='span' bgcolor='#E5C558' fontSize='13px' font-family='Nunito' color='#682F26' px='6px' py='2px' mb='16px' sx={{ display: 'inline-block', lineHeight: 'normal' }}>
                        {label}
                    </Typography>
                    <Typography variant="h5" fontSize='19px' component="h2" fontFamily='Libre_Baskerville' color='#fff'>
                        {name}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: '16px', mb: '16px' }}>
                    <Button variant="text" sx={{ px: 0, pr: '4px', fontSize: '13px', fontFamily: 'Nunito', fontWeight: 'bold' }} endIcon={<img src={arrowRight} alt='arrow-right' />} >Read More</Button>
                    <img onClick={() => updateCardsTicket(name)} src={isClicked ? ticketClicked : ticket} style={{cursor : 'pointer'}} alt='ticket-icon' />
                </CardActions>

            </Card>
            <CardBorder />
        </div>
    )
}
