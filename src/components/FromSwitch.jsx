import React, { useState } from 'react';

import { UserForm } from  './UserForm.jsx'
import {Form2} from './UserForm2.jsx'
import './switchForms.css'
import {Form3} from './UserForm3.jsx'

const SectionRenderer = ({ currentSection, formData, setFormData, handlePreviousClick, handleNextClick }) => {
    let sectionToRender;
  
    switch (currentSection) {
      case 1:
        sectionToRender = <UserForm formData={formData} setFormData={setFormData} />;
        break;
      case 2:
        sectionToRender = <Form2 formData={formData} setFormData={setFormData} />;
        break;

      case 3:
          sectionToRender = <Form3 formData={formData} setFormData={setFormData} />;
          break;

        default:
        sectionToRender = <UserForm formData={formData} setFormData={setFormData} />;
    }
  
    return (
      <div >
        {sectionToRender}

        <div className='FBtsContainer'>
        <button className='Fbtn' onClick={handlePreviousClick}>Previous</button>
        <button className='Fbtn' onClick={handleNextClick}>Next</button> </div>
      
      </div>
    );
  };
  
  export default SectionRenderer;













