

export function Form3({ formData, setFormData }){
    const handleFieldChange = (fieldName, value) => {
        setFormData({
          ...formData,
          [fieldName]: value,
        });
      };

      const clearInput = (fieldName) => {
        setFormData({
          ...formData,
          [fieldName]: '', 
        });
      };

return (
    <>
    <div className='heading' >Education & Skills </div> 
    
    <br /> <br /><br />
    <label className="form2Label">EDUCATION </label> <br />
<input className='University formPt2'
            type="text"
            value={formData.University}
            onChange={(e) => handleFieldChange('University', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'University') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.University === 'University') {
                clearInput('University'); e.target.style.color = 'black'
              }}} 
          /> 
<br />
    

<div className='uniDetails '>
  

          <input className='formPt2 course3'
            type="text"
            value={formData.course}
            onChange={(e) => handleFieldChange('course', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Course') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.course === 'Course') {
                clearInput('course'); e.target.style.color = 'black'
              }}} 
        />
      

      
          <input className='formPt2 date'
            type="text"
            value={formData.date}
            onChange={(e) => handleFieldChange('date', e.target.value)}
            onInput={(e) => {
              if (e.target.grade != 'Month Year - Month Year') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.date === 'Month Year - Month Year') {
                clearInput('date'); e.target.style.color = 'black'
              }}} 
          />

      </div>

<br /><br /><br />
<label className="form2Label">SKILLS </label>
    
    <br />
    <input className='Skills formPt2'
            type="text"
            value={formData.Skills1}
            onChange={(e) => handleFieldChange('Skills1', e.target.value)}
  
          /> 
        <input className='Skills formPt2'
            type="text"
            value={formData.Skills2}
            onChange={(e) => handleFieldChange('Skills2', e.target.value)}


          /> 
    
    </>)}