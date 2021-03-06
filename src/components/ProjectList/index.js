import React, { useState }  from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'


const ProjectList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Whiskey Inventory',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://whiskey-inventory.herokuapp.com/',
      github: 'https://github.com/jpd61/project2-group8'
    },
    {
      name: 'Tasty Events',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://andysanchez726.github.io/Tasty-Events/',
      github: 'https://github.com/AndySanchez726/Tasty-Events'
    },
    {
      name: 'Fretboard Scale App',
      category: 'projects',
      link: 'https://andysanchez726.github.io/fretboard-scale-app/',
      github: 'https://github.com/AndySanchez726/fretboard-scale-app'
    },
    {
      name: 'Frame It',
      category: 'projects',
      description: 'Lorem ipsum',
      link: 'https://cryptic-peak-35227.herokuapp.com/',
      github: 'https://github.com/saul10huerta/frame-it'
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://andysanchez726.github.io/run-buddy/',
      github: 'https://github.com/AndySanchez726/run-buddy'
    },
    {
      name: 'Horiseon',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://andysanchez726.github.io/Week-1-Challenge-Horiseon/',
      github: 'https://github.com/AndySanchez726/Week-1-Challenge-Horiseon'
    },
  ]);


  return (

    <div>
      <Container fluid id='projects'>
        <Row>
        {photos.map((project, i) => (
          <Col md={4} className='projects'>
          <div className='single-project'>
              <h5 className='text-center'>{project.name}</h5>
              <a href={project.link} target='_blank'>
                <Image
                  src={require(`../../assets/projects/${i}.png`)}
                  alt={project.name}
                  className="project-image"
                  key={project.name}
                />
              </a>
              <a href={project.github} target='_blank'>
                <h6 className='m-3'>Repository</h6>
              </a>
            </div>
          </Col>
          
        ))}
        </Row>
      </Container>
    </div>

  );
};

export default ProjectList;