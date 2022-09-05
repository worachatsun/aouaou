import { FC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { CardActionArea } from '@mui/material';

export const ShowCard: FC = () => {
    return (
        <div style={{ position: "relative" }}>
            <div style={{ width: 4, backgroundColor: 'red', height: 35, position: "absolute", top: 24, left: -4 }} />
            <Card sx={{ maxWidth: 280, borderRadius: 5, borderColor: "EBEBEB" }} variant="outlined">
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Collection
                        </Typography>
                        <Typography variant="h5" component="div">
                            Nike off white
                        </Typography>
                    </CardContent>
                    <img
                        loading="lazy"
                        height="150"
                        src="https://www.pngitem.com/pimgs/m/246-2469410_off-white-x-low-nike-x-off-white.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Grid container spacing={2} columns={16}>
                            <Grid xs={8} alignItems="start" display="flex" flexDirection="column">
                                <Typography variant="body2" color="text.secondary">
                                    Price
                                </Typography>
                                <Typography variant="h5" component="div">
                                    $295
                                </Typography>
                            </Grid>
                            <Grid xs={8} justifyContent="flex-end" display="flex" alignItems="center">
                                <CardMedia
                                    component="img"
                                    image="https://www.pngitem.com/pimgs/m/246-2469410_off-white-x-low-nike-x-off-white.png"
                                    alt="green iguana"
                                    style={{ height: 45, width: 45, border: "1px solid #EBEBEB", marginLeft: 10, borderRadius: 5 }}
                                />
                                <CardMedia
                                    component="img"
                                    image="https://www.pngitem.com/pimgs/m/246-2469410_off-white-x-low-nike-x-off-white.png"
                                    alt="green iguana"
                                    style={{ height: 45, width: 45, border: "1px solid #EBEBEB", marginLeft: 10, borderRadius: 5 }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card >
        </div>
    )
}
