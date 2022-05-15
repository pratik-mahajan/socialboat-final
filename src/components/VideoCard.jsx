import React from 'react';
import { Card } from 'react-bootstrap';

const CardStyle={ 
  width: '23rem', 
  margin: '10px'};
const tagStyle={fontSize: "17px", 
  backgroundColor: "#FF0000", 
  borderRadius:"10px", 
  margin:'5px', 
  padding:'3px'};

export default function VideoCard(props) {
  return (<Card bg='dark' text='light' className="mb-2" style={CardStyle}>
            <Card.Body className="align-items-center">
              <video preload="metadata" src={props.video} alt={props.heading} width="315" height="auto" poster controls controlsList='nodownload'>
                <source src={props.video+'#t=15'} type="video/mp4"></source>         
              </video>
              <h5>Tags: </h5>
              <span>
                {(props.tags).map((tag) => (
                    <span key={tag} style={tagStyle}>
                    {'  '+tag+'  '}  
                    </span>
                ))}
              </span>
            </Card.Body>
          </Card>
  )
//   return null;
}