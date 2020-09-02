import React, { useState }  from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'


const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Whiskey Inventory',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://whiskey-inventory.herokuapp.com/'
    },
    {
      name: 'Tasty Events',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://andysanchez726.github.io/Project-1/'
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://andysanchez726.github.io/run-buddy/'
    },
    {
      name: 'Horiseon',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://andysanchez726.github.io/Week-1-Challenge-Horiseon/'
    }
  ]);


  return (

    <div>
      <Container fliud>
        <Row>
        {photos.map((project, i) => (
          <Col md={4} className='projects'>
            <h5 className='text-center'>{project.name}</h5>
            <a href={project.link} target='_blank'>
              <Image
                src={require(`../../assets/projects/${i}.png`)}
                alt={project.name}
                className="project-image"
                key={project.name}
              />
            </a>
          </Col>
        ))}
        </Row>
      </Container>
    </div>

  );
};

export default PhotoList;