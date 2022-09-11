import type { NextPage } from 'next'
import { ShowCard } from 'commons/organisms/card'
import { TransparentButton } from 'commons/atoms/button'
import { BUTTON_TYPE } from 'commons/atoms/button/transparent/constants'
import { Navbar } from 'commons/molecules/navbar'
import Grid from '@mui/material/Grid';
import Sidebar from 'commons/organisms/sidebar'
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Box flexDirection='row' display="flex">
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Grid container md={12}>
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Home
