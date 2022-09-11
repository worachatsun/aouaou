import { FC } from 'react'
import Box from '@mui/material/Box';
import Accordion from 'commons/molecules/accordion'

const Sidebar: FC = () => {
    return (
        <Box
            sx={{
                width: "236px",
                height: "calc(100vh - 56px)",
                borderRight: "1px solid #EBEBEB",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                marginRight: "24px"
            }}
        >
            <Accordion />
        </Box>
    )
}

export default Sidebar
