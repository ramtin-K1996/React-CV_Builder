import {Header} from '../components/header.jsx'
import './homepage.css'
import ReactImage from '../assets/React.webp';
import { SideButtons } from './smButtons.jsx';
import React, { useState } from 'react';
import { UserForm } from  '../components/UserForm.jsx'
import jsPDF from 'jspdf';
import SectionRenderer from '../components/FromSwitch.jsx'




export function MainP(){
    const [formData, setFormData] = useState({
        Email:' Email  eg. Example@gmail.com',
        Phone:' Phone Number 07XX XXXX XXX',
        FormLocation:'Location',
        JobTitle: 'Job Title',
        CompanyName: 'Company Name',
        FromTill:'Month Year - Month Year',
        JobTitle2: 'Job Title',
        CompanyName2: 'Company Name',
        FromTill2:'Month Year - Month Year',
        University:"University",
        course:"Course",
        date:"Month Year - Month Year",
        JobTitle3: 'Job Title',
        CompanyName3: 'Company Name',
        FromTill3:'Month Year - Month Year',
        Gitfield:""
     
      
      });

      const [currentSection, setCurrentSection] = useState(1);

      const handleNextClick = () => { if(currentSection<3){
        setCurrentSection(currentSection + 1);}
      };
    
      const handlePreviousClick = () => {if(currentSection>1){
        setCurrentSection(currentSection - 1);}
      };

      const generatePDF = () => {

        const doc = new jsPDF();

        function centerText(text, y) {
          const textWidth = doc.getTextWidth(text); 
          const pageWidth = doc.internal.pageSize.width;
          const x = (pageWidth - textWidth) / 2;
          doc.text(text, x, y);
        }


        function allignRight (text, y) {
          const textWidth = doc.getTextWidth(text); 
          const pageWidth = doc.internal.pageSize.width;
          const x = (pageWidth - textWidth)-5 ;
          doc.text(text, x, y);
        }




        doc.setFillColor(0, 0, 34); 
        doc.rect(2, 1, 206.5, 40, 'F'); //// (x, y, width, height, style 'F' for fill)
        doc.setTextColor(255, 255, 255); 

        doc.setFontSize(20);
        doc.setFont("times");
        centerText(`${formData.firstName} ${formData.SName} `, 15);
        doc.setFontSize(14);
        centerText(`${formData.FormLocation} | ${formData.Email} | ${formData.Phone}`, 24);
        centerText(`${formData.Gitfield}`,32)
        doc.setTextColor(0, 0, 0); 
        doc.setFontSize(15);

        doc.setFont("times", 'bold')

        doc.text(`Employment`,10,50);

        doc.setFillColor(0, 0, 0); 
        doc.rect(10, 53, 185, .5, 'F');
        doc.setFontSize(13);

        doc.text(`${formData.JobTitle}`,5,65)
        centerText(`${formData.CompanyName}`,65)

        allignRight(`${formData.FromTill}`,65)

        doc.setFont("times", 'normal');

        var splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities}`, 200);
        doc.text(5, 75, splitTitle);

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities2}`, 200);
        doc.text(5, 95, splitTitle);

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities3}`, 200);
        doc.text(5, 110, splitTitle);

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities4}`, 200);
        doc.text(5, 125, splitTitle);


        doc.setFont("times", 'bold')
        doc.text(`${formData.JobTitle2}`,5,145)
        centerText(`${formData.CompanyName2}`,145)
        allignRight(`${formData.FromTill2}`,145)
        doc.setFont("times", 'normal');

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities21}`, 200);
        doc.text(5, 155, splitTitle);

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities22}`, 200);
        doc.text(5, 165, splitTitle);

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities23}`, 200);
        doc.text(5, 175, splitTitle);

        doc.setFont("times", 'bold')
        doc.text(`${formData.JobTitle3}`,5,195)
        centerText(`${formData.CompanyName3}`,195)
        allignRight(`${formData.FromTill3}`,195)
        doc.setFont("times", 'normal');

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities31}`, 200);
        doc.text(5, 205, splitTitle);

        splitTitle = doc.splitTextToSize("\u2022 "+`${formData.responsibilities32}`, 200);
        doc.text(5, 215, splitTitle);

 
        doc.setFontSize(15);

        doc.setFont("times", 'bold')
        doc.text(`Education`,10,230);
        doc.setFillColor(0, 0, 0); 
        doc.rect(10, 233, 185, .5, 'F');
        doc.setFontSize(13);


        doc.text(`${formData.University}`,5,242)
        // doc.text(`${formData.date}`,160,242)

        allignRight(`${formData.date}`,242)

        

        doc.setFont("times", 'normal');
        doc.text("\u2022 "+`${formData.course}`,5,250)


        doc.setFontSize(15);
        doc.setFont("times", 'bold')
        doc.text('Skills',10,265)
        doc.setFillColor(0, 0, 0); 
        doc.rect(10, 268, 185, .5, 'F');
        doc.setFontSize(13);

        doc.setFont("times", 'normal');

        doc.text("\u2022 "+`${formData.Skills1}`,5,280)

        doc.text("\u2022 "+`${formData.Skills2}`,5,288)

      
        doc.save('my_cv.pdf');
      };
    return (<>
        <Header/>
        <div className='container'>
            <div className='sidemenu'>
            <div className='Reactimg'> <img src={ReactImage} alt="" /></div> <div className='cr'> Create your perfect CV</div> 
            <div className='reactButtons'> 
            <SideButtons label="Example" onClickHandler={() => setFormData({ 
              ...formData, 
              firstName: "John", SName:"Smith", Email:"Johnsmith@mail.com",Phone:"0774 8270 079", 
              FormLocation: "London",JobTitle:"Software Engineer", CompanyName:'Amazon',FromTill:' August 2022 – Present',
              responsibilities:"Full-stack software engineer with a focus on backend operations and automation, primarily working with JavaScript, NodeJS, GraphQL, and React. Utilized Postgres DB and AWS (Elastic Beanstalk, EC2, Lambdas)",
              responsibilities2:"Developed and  the migration of internal tooling to EC2, resulting in a 20% increase in engineering productivity.",
              responsibilities3:"Created an email and push notification platform to deliver real-time updates.",
              responsibilities4:"Addressed and rectified multiple high-priority security vulnerabilities impacting customer information.",

              responsibilities21:"Lead backend software engineer and architect for a white-label student loan marketplace. ",
              responsibilities22:"Used TypeScript/NodeJS to build scalable APIs on AWS Lambda and DynamoDB to serve 100k+ students",
              responsibilities23:"Implemented a secure file storage solution to safeguard user & company data, deployed Trend Micro on S3 via Terraform",
              responsibilities32:"Developed Market Reach as Backend Engineer as part of the Platforms and Monetization team",
              responsibilities31:"Enhanced performance by optimizing processes through reducing API calls and refining SQL queries",
              JobTitle2: 'Software Engineer',
              CompanyName2: 'Sparrow Lending',
              FromTill2:'Jan 2022 – July 2022',
              JobTitle3: 'Software Engineer',
              CompanyName3: 'Realtor.com',
              FromTill3:'July 2020 – September 2021',
              University:"university of london",
              course:"Computer science 2:1",
              date:"September 2017 - May 2020",
              Skills1:"Programming Languages: JavaScript, TypeScript, Java, C/C++, Python",
              Skills2:"Frameworks and Databases: React, React Native, NodeJS, MySQL, PostgreSQL, GoogleSQL, Android"
              })}/>


            <div className="ClearForm">
            <SideButtons  label="Clear Form" onClickHandler={() => {setFormData({ 
              ...formData, firstName: "",SName:"", Email:" Email  eg. Example@gmail.com",Phone:" Phone Number 07XX XXXX XXX",
              FormLocation:"Location", JobTitle:"Job Title", CompanyName:'Company Name',FromTill:'Month Year - Month Year',
              responsibilities:"",
              responsibilities2:"",
              responsibilities3:"",
              responsibilities4:"",
              responsibilities21:"",
              responsibilities22:"",
              responsibilities23:"",
              responsibilities32:"",
              responsibilities31:"",
              JobTitle2: 'Job Title',
              CompanyName2: 'Company Name',
              FromTill2:'Month Year - Month Year',
              JobTitle3: 'Job Title',
              CompanyName3: 'Company Name',
              FromTill3:'Month Year - Month Year',
              University:"University",
              course:"Course",
              date:"Month Year - Month Year",
              Skills1:"",
              Skills2:"",
              Gitfield:""
            
            })

              const elements = document.querySelectorAll('.formPt2');

              elements.forEach(element => {
                element.style.color = 'rgb(157, 152, 177)';
              });

                        }}/></div>

            
            <SideButtons onClickHandler={generatePDF} label="Print PDF"/>
            </div>
            </div>  

        <div className='x'> 
        <div className='mainContent'> 
        <SectionRenderer
        currentSection={currentSection}
        formData={formData}
        setFormData={setFormData}
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
     </div></div>  

<div className='y'>
        <div className="preview"> 
        <div className='headingContentcv'>
        <div className='headingPreview'><br /> 
        <div className='nameP'>{formData.firstName} {formData.SName}</div> 
        <br /> 
        
        <div className='info'>{formData.FormLocation} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{formData.Email}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {formData.Phone}
        <br /><br />
        {formData.Gitfield}</div>
        </div></div>
        
        <br />
        <div className='mainContentcv'>
        <div className='pprofile'>Employment </div>
        <br />
        <div className='job-info'>
          <div className='JobD'>{formData.JobTitle}</div> 
          <div className='company'>{formData.CompanyName}</div>
          <div className='jobDate'>{formData.FromTill}</div>
           </div>

        <br />
        <li>{formData.responsibilities}</li>
        <li>{formData.responsibilities2}</li>
        <li>{formData.responsibilities3}</li>
        <li>{formData.responsibilities4}</li>

        <br /><br />
        <div className='job-info'>
        <div className='JobD'>{formData.JobTitle2}</div> 
          <div className='company'>{formData.CompanyName2}</div>
          <div className='jobDate'>{formData.FromTill2}</div>
           </div>

        <br />
        <li>{formData.responsibilities21}</li>
        <li>{formData.responsibilities22}</li>
        <li>{formData.responsibilities23}</li>
        <br /><br />
        <div className='job-info'>
          <div className='JobD'>{formData.JobTitle3} </div> 
          <div className='company'>{formData.CompanyName3}</div>
          <div className='jobDate'>{formData.FromTill3}</div>
           </div>
<br />
        <li>{formData.responsibilities31}</li>
        <li>{formData.responsibilities32}</li>

        <br /><br />
        <div className='pprofile'>Education </div>
        <br />
        <div className='job-info'>
          <div className='JobD'>{formData.University}</div> 
          <div className='company'></div>
          <div className='jobDate'>{formData.date}</div>
           </div>
           <br />
           <li>{formData.course}  </li> 
           <br /><br />
        <div className='pprofile'>Skills </div>
        <br /><br />
        <li>{formData.Skills1} </li><br />
        <li>{formData.Skills2}</li>
        <br />
        </div>
        

        </div>
        </div>
        </div>
        </>)    

}











