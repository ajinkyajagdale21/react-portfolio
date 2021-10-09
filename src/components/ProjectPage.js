import React from 'react'
import {projects} from '../data/projects'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,CardActions } from '@mui/material'
let id=0;
  export  function ProjectPage() {
    return(
        <>
        <h1 className="heading">Projects</h1>
          <div className="blog-page">
          
          {
              projects.map(project=>
                <Card sx={{ maxWidth: 345 }} style={{margin:'1rem 2rem',backgroundColor:"white"}} key={project.pid} >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt="green iguana"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {project.projectName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.ProjectDetails}
                  </Typography>
                </CardContent>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                {project.TechStack.map(item=>
                <div style={{padding:"0rem 0.5rem"}} key={++id}>{item}</div>
                )}
                </div>
                
                <CardActions>
                <a className="link" href={project.liveLink}> <Button size="small" color="primary">
                  Live
                  </Button></a>
                  <a className="link" href={project.repo}> <Button size="small" color="primary">
                  code 
                  </Button></a>
                </CardActions>
              </Card>)
          }
          </div>
        </>          
      )
  }
