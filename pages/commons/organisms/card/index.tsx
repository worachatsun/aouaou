import { FC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { CardActionArea } from '@mui/material';

export const ShowCard: FC = () => {
    return (
        <Card sx={{ maxWidth: 214, borderRadius: 5, borderColor: "EBEBEB", margin: "24px 24px 0 0", maxHeight: "280px" }} variant="outlined">
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" color="#FF8D29">
                        Collection
                    </Typography>
                    <Typography variant="h5" component="div">
                        Nike off white
                    </Typography>
                </CardContent>
                <img
                    loading="lazy"
                    height="100px"
                    src="https://www.pngitem.com/pimgs/m/246-2469410_off-white-x-low-nike-x-off-white.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Grid container spacing={2} columns={16}>
                        <Grid xs={8} alignItems="start" display="flex" flexDirection="column">
                            <Typography variant="body2" color="#FF8D29">
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
    )
}
