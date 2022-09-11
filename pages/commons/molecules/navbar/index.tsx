import { FC } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';

const Navbar: FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "56px",
                borderBottom: "1px solid #EBEBEB",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}
        >
            <Grid
                container
                padding="0 24px"
            >
                <Grid container xs={2} sm={4} md={4} alignItems="center">
                    AOU AOU
                </Grid>
                <Grid item xs={2} sm={4} md={4} justifyContent="center" alignItems="center">
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={[]}
                        size="small"
                        renderInput={(params) => <TextField {...params} label="Search" />}
                    />
                </Grid>
                <Grid container xs={2} sm={4} md={4} justifyContent="flex-end" alignItems="center">
                    <Avatar>H</Avatar>
                </Grid>
            </Grid>
        </Box>
    )
}

export { Navbar }
