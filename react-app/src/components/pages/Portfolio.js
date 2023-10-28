import React from 'react';
import challenge3 from '../../pics/challenge_3_thumbnail.png';
import challenge5 from '../../pics/challenge_5_thumbnail.png';
import challenge9 from '../../pics/challenge_9_thumbnail.png';
import project1 from '../../pics/project_1_thumbnail.png';
import project2 from '../../pics/project_2_thumbnail.png';
import project3 from '../../pics/project_3_thumbnail.png';

export default function Contact() {
  return (
    <div>
      <h1>Portfolio</h1>
      <img src={challenge3} alt="challenge 3"/>
      <img src={challenge5} alt="challenge 5"/>
      <img src={challenge9} alt="challenge 9"/>
      <img src={project1} alt="project 1"/>
      <img src={project2} alt="project 2"/>
      <img src={project3} alt="project 3"/>
    </div>
  );
}