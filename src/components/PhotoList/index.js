import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap'


const PhotoList = ({ category }) => {
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Horiseon',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Tasty Events',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Whiskey Inventory',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);


  // const currentPhotos = photos.filter((photo) => photo.category === category);



  return (

    <div>
      <Container fliud>
        <Row>
        {photos.map((project, i) => (
          <Col md={4} className='projects'>
            <h1 className='text-center'>{project.name}</h1>
            <Image
              src={require(`../../assets/${category}/${i}.png`)}
              alt={project.name}
              className="img-thumbnail mx-1"
              key={project.name}
            />
          </Col>
        ))}
        </Row>
      </Container>
    </div>

  );
};

export default PhotoList;