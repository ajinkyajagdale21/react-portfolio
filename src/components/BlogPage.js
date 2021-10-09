import React from 'react'
import {blogs} from '../data/blog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,CardActions } from '@mui/material'

  export  function BlogPage() {
    return(
      <>
        <h1 className="heading">Blogs</h1>
          <div className="blog-page">
          {
              blogs.map(blog=>
                <Card sx={{ maxWidth: 345 }} style={{margin:'1rem 2rem'}} key={blog.bId}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blog.coverPage}
                    alt="green iguana"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {blog.topicName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.initialLines}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {blog.date}
                  </Typography>
                </CardContent>
                <CardActions>
                <a className="link" href={blog.blogLink}> <Button size="small" color="primary">
                  Link To Blog
                  </Button></a>
                </CardActions>
              </Card>)
          }
          </div>
      </>          
      )
  }
