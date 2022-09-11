import { FC } from 'react'
import Box from '@mui/material/Box';
import Accordion from 'commons/molecules/accordion'
import { boxContainer } from './sidebar.styled'

export const Sidebar: FC = () => {
    return (
        <Box sx={boxContainer}>
            <Accordion />
        </Box>
    )
}
