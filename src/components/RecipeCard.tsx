import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { Recipe } from '../interface/Recipe';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './links.css'

export const RecipeCard = ({ name, youtube, website, cuisine, image }: Recipe) => {
    return (
        <Card sx={{ width: 350, height: 250, marginTop: "2%", marginBottom: "2%", position: "relative" }}>
            {image && <CardMedia
                sx={{ height: 100 }}
                image={image}
                title="Recipe image"
            />}
            <CardContent sx={{ position: "absolute", top: "50%" }}>
                {name && <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>}
                {cuisine && <Typography variant="body2" color="text.secondary">
                    {cuisine}
                </Typography>}
            </CardContent>
            <CardActions sx={{ position: "absolute", bottom: 0 }}>
                {website && <a className='website' href={website} target="_blank" rel="noreferrer">
                    <LanguageIcon />
                </a>}
                {youtube && <a className='youtube' href={youtube} target="_blank" rel="noreferrer">
                    <YouTubeIcon />
                </a>}
            </CardActions>
        </Card>
    )
}