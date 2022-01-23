import React, { useState, useContext } from 'react'
import like from './components/icons/like.svg'
import calendar from './components/icons/calendar.svg'
import { cardsData, reviewsData } from './data'


const dashboards = [
   {
      icon: like,
      number: '465',
      label: 'Likes everyday'
   },
   {
      icon: calendar,
      number: '745',
      label: ' Online Events'
   },
   {
      icon: calendar,
      number: '590',
      label: ' Online Events'
   },
   {
      icon: calendar,
      number: '896',
      label: ' Online Events'
   },
]

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
   const [cards, setCards] = useState(cardsData)
   // const [reviews, setReviews] = useState(reviewsData)
   const maxContainerWidth = 1100


   const updateCardsTicket = (name) => {
      const tempCards = cards.map(card=> {
         if(card.name === name) return {...card, isClicked: !card.isClicked}
         return {...card}
      })
      setCards(tempCards)
   }


   return (
      <AppContext.Provider
         value={{
            dashboards, maxContainerWidth,
            cards, reviews: reviewsData ,
            updateCardsTicket
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider }
