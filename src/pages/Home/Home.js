import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

import { Hero } from '../../components/Hero/hero';
import { Upcomingshows } from '../../components/Upcoming Shows/UpcomingShows';
import Reviews from '../../components/Reviews/Reviews';

export default function Home() {

   return (
      < >
         <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
         <CssBaseline />
         <Hero />
         <main className='main'>
            <Upcomingshows />
            <Reviews />
         </main>
      </>
   )
}

