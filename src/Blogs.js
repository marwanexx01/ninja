import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Blogs({blogObj,title}) {
  return (
    <div className={title}>
      <h1>{title}</h1>
      <div className="card-container">
        {blogObj.map((list) => (
        <div key={list.id}>
          <Card  sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/800"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {list.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {list.body}
                </Typography>
                <p className="author">By { list.authore}</p>
              </CardContent>
            </CardActionArea>
          </Card>
      </div>
      ))}
      </div>
    </div>
  );
}
