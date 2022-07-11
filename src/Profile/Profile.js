import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card} from 'react-bootstrap';
const Profile = (props) => {
  return (
<div>
    
   
{props.children}
{props.handleName(props.name)}
<Card border="primary" style={{width: '30rem', textAlign: 'center', marginLeft: '450px', borderRadius: '10%'}}>
        <Card.Header  style={{ textShadow:' 5px 5px white',color:'blue', background:'black',fontFamily:'Open Sans Condensed,sansSerif' ,fontSize: '35px'}}>{props.name}</Card.Header>
        <Card.Body style={{background:'lightgray'}}>
          <Card.Title style={{color:'blue', background:'',fontFamily:'fangsong' ,fontSize: '25px'}}>{props.profession}</Card.Title>
          <Card.Text style={{fontFamily:'fangsong' ,fontSize: '18px'}}>
          {props.bio} 
          </Card.Text>
        </Card.Body>
      </Card>
      <br /><br /> <br /> <br /><br /><br />  
    </div>
    
  )











}

export default Profile
