import { useState  } from 'react';
import './userForm.css'
import gitlogo from '../assets/gitlogo.png'


export function UserForm({ formData, setFormData }) {

  
    const [showInput, setShowInput] = useState(false);
  
    // Define a function to toggle between button and input field
    const toggleInput = () => {
      setShowInput(!showInput);
    };





    // Handle changes for any form field
    const handleFieldChange = (fieldName, value) => {
      setFormData({
        ...formData,
        [fieldName]: value,
      });
    };
    
    const clearInput = (fieldName) => {
      setFormData({
        ...formData,
        [fieldName]: '', // Clear the value of the specified field
      });
    };

    return (
      <>
        <div className='heading' >Personal Information</div> 
<br />
<span className='subheading'>Simply add your details to create and download your free CV in minutes.</span>
<br />
<br /><br />

        <div className='name'>
       <div className='Firstname'></div>
        <div>
          <label>FIRST NAME </label> <br />
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleFieldChange('firstName', e.target.value)}
        
            
          /> 
        </div> 
        <div className='surname'>
          <label>SURNAME</label> <br />
          <input
            type="text"
            value={formData.SName}
            onChange={(e) => handleFieldChange('SName', e.target.value)}
          />

        </div> </div>
<br /> 
<input className='Location formPt2'
            type="text"
            value={formData.FormLocation}
            onChange={(e) => handleFieldChange('FormLocation', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Location') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.FormLocation === 'Location') {
                clearInput('FormLocation'); e.target.style.color = 'black'
              }}} 
          /> 

<br />

<br />
          <input className='Email formPt2'
            type="text"
            value={formData.Email}
            onChange={(e) => handleFieldChange('Email', e.target.value)}
            onInput={(e) => {
              if (e.target.value != ' Phone Number 07XX XXX XXX') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.Email === ' Email  eg. Example@gmail.com') {
                clearInput('Email'); e.target.style.color = 'black'
              }}} 
          /> 
<br /> <br />
          <input className='Phone formPt2'
            type="text"
            value={formData.Phone}

            onChange={(e) => { handleFieldChange('Phone', e.target.value) ;
            }}
            onInput={(e) => {
              if (e.target.value != ' Phone Number 07XX XXXX XXX') {
                e.target.style.color = 'black'; 
              }}}
              
            onClick={(e) => { 
            if (formData.Phone == ' Phone Number 07XX XXXX XXX') {
            clearInput('Phone'); e.target.style.color = 'black'}}}
          /> 

<div className='placeholder'>
<div className='githubButton'>
      {showInput ? (
        <input className='formPt2 gbInput'
          type="text"
          value={formData.Gitfield}
          onChange={(e) => handleFieldChange('Gitfield', e.target.value) }
          onBlur={toggleInput} // Hide input field when user clicks away
          placeholder="Enter GitHub Repository URL"
        />


      ) : (
        <button className='gitbutton' onClick={toggleInput}>
         <img src={gitlogo} alt="" />
        </button>
      )}
    </div>
    </div>

          

         
      </>
    );
  }