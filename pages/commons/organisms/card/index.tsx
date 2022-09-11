import { FC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { CardActionArea } from '@mui/material';
import { cardMedia, cardContainer } from './card.styled'
import { COLOR } from 'global/constants';

export const ShowCard: FC = () => {
    return (
        <Card sx={cardContainer} variant="outlined">
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" color={`${COLOR.ORANGE.PRIMARY}`}>
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
                            <Typography variant="body2" color={`${COLOR.ORANGE.PRIMARY}`}>
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
                                style={cardMedia}
                            />
                            <CardMedia
                                component="img"
                                image="https://www.pngitem.com/pimgs/m/246-2469410_off-white-x-low-nike-x-off-white.png"
                                alt="green iguana"
                                style={cardMedia}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}
