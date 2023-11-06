
export function Form2({ formData, setFormData }){
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
    <div className='heading' >Employment</div> 
<br /><br /><br />
<label className="form2Label">MOST RECENT JOB </label>
<div className='name'>
<br /><br />
    <input className='JobTitle formPt2'
            type="text"
            value={formData.JobTitle}
            onChange={(e) => handleFieldChange('JobTitle', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Job Title') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.JobTitle === 'Job Title') {
                clearInput('JobTitle'); e.target.style.color = 'black'
              }}} 
          /> 


<input className='CompanyName formPt2'
            type="text"
            value={formData.CompanyName}
            onChange={(e) => handleFieldChange('CompanyName', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'CompanyName') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.CompanyName === 'Company Name') {
                clearInput('CompanyName'); e.target.style.color = 'black'
              }}} 
          /> 


<input className='FromTill6 formPt2'
            type="text"
            value={formData.FromTill}
            onChange={(e) => handleFieldChange('FromTill', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Month Year - Month Year') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.FromTill === 'Month Year - Month Year') {
                clearInput('FromTill'); e.target.style.color = 'black'
              }}} 
          /> 
</div>


<br />
<label>List Core responsibilities</label>

<li><input className='JobR formPt2'
            type="text"
            value={formData.responsibilities}
            onChange={(e) => handleFieldChange('responsibilities', e.target.value)}
            
       
          />
</li>

          
<li><input className='JobR2 formPt2'
            type="text"
            value={formData.responsibilities2}
            onChange={(e) => handleFieldChange('responsibilities2', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Core responsibility #2') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.responsibilities2 === 'Core responsibility #2') {
                clearInput('responsibilities2'); e.target.style.color = 'black'
              }}} 
          />
</li>


<li><input className='JobR2 formPt2'
            type="text"
            value={formData.responsibilities3}
            onChange={(e) => handleFieldChange('responsibilities3', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Core responsibility #3') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.responsibilities3 === 'Core responsibility #3') {
                clearInput('responsibilities3'); e.target.style.color = 'black'
              }}} 
          />
</li>

<li><input className='JobR3 formPt2'
            type="text"
            value={formData.responsibilities4}
            onChange={(e) => handleFieldChange('responsibilities4', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Core responsibility #4') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.responsibilities4 === 'Core responsibility #4') {
                clearInput('responsibilities4'); e.target.style.color = 'black'
              }}} 
          />
</li>


<br /><br />
<label className="form2Label">2ND MOST RECENT </label>
<br />
<div className='name'>
<br /><br />
    <input className='JobTitle formPt2'
            type="text"
            value={formData.JobTitle2}
            onChange={(e) => handleFieldChange('JobTitle2', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Job Title') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.JobTitle2 === 'Job Title') {
                clearInput('JobTitle2'); e.target.style.color = 'black'
              }}} 
          /> 


<input className='CompanyName formPt2'
            type="text"
            value={formData.CompanyName2}
            onChange={(e) => handleFieldChange('CompanyName2', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'CompanyName') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.CompanyName2 === 'Company Name') {
                clearInput('CompanyName2'); e.target.style.color = 'black'
              }}} 
          /> 


<input className='FromTill6 formPt2'
            type="text"
            value={formData.FromTill2}
            onChange={(e) => handleFieldChange('FromTill2', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Month Year - Month Year') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.FromTill2 === 'Month Year - Month Year') {
                clearInput('FromTill2'); e.target.style.color = 'black'
              }}} 
          /> 
</div>
<br />

<label>Older job, less relevancy, fewer bullet points. </label>

<li><input className='JobR formPt2'
            type="text"
            value={formData.responsibilities21}
            onChange={(e) => handleFieldChange('responsibilities21', e.target.value)}
             
          />
</li>

          
<li><input className='JobR2 formPt2'
            type="text"
            value={formData.responsibilities22}
            onChange={(e) => handleFieldChange('responsibilities22', e.target.value)}
             
          />
</li>


<li><input className='JobR3 formPt2'
              type="text"
              value={formData.responsibilities23}
              onChange={(e) => handleFieldChange('responsibilities23', e.target.value)}
               
            />
</li>



<br /><br />
<br />
<div className='name'>
<br /><br />
    <input className='JobTitle formPt2'
            type="text"
            value={formData.JobTitle3}
            onChange={(e) => handleFieldChange('JobTitle3', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'Job Title') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.JobTitle3 === 'Job Title') {
                clearInput('JobTitle3'); e.target.style.color = 'black'
              }}} 
          /> 


<input className='CompanyName formPt2'
            type="text"
            value={formData.CompanyName3}
            onChange={(e) => handleFieldChange('CompanyName3', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'CompanyName') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.CompanyName3 === 'Company Name') {
                clearInput('CompanyName3'); e.target.style.color = 'black'
              }}} 
          /> 


<input className='FromTill6 formPt2'
            type="text"
            value={formData.FromTill3}
            onChange={(e) => handleFieldChange('FromTill3', e.target.value)}
            onInput={(e) => {
              if (e.target.value != 'FromTill') {
                e.target.style.color = 'black'; 
              }}}
            onClick={(e) => {
              if (formData.FromTill3 === 'Month Year - Month Year') {
                clearInput('FromTill3'); e.target.style.color = 'black'
              }}} 
          /> 
</div>
<br />
<li><input className='JobR formPt2'
             type="text"
             value={formData.responsibilities31}
             onChange={(e) => handleFieldChange('responsibilities31', e.target.value)}
              
           />
</li>
<li><input className='JobR3 formPt2'
              type="text"
              value={formData.responsibilities32}
              onChange={(e) => handleFieldChange('responsibilities32', e.target.value)}
               
            />
</li>
    </>
)

}