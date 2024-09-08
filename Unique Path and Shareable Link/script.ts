// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('resumeForm') as HTMLFormElement | null;
//   const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement | null;
//   const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement | null;
//   const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement | null;
//   const copyLinkBtn = document.getElementById('copyLinkBtn') as HTMLButtonElement | null;
//   const linkDisplay = document.getElementById('linkDisplay') as HTMLParagraphElement | null;

//   if (form && resumeContainer && resumeDisplay && downloadBtn && copyLinkBtn && linkDisplay) {
//     form.addEventListener('submit', (e: Event) => {
//       e.preventDefault();

//       const name = (document.getElementById('name') as HTMLInputElement).value;
//       const email = (document.getElementById('email') as HTMLInputElement).value;
//       const phone = (document.getElementById('phone') as HTMLInputElement).value;

//       const educationEntries = document.querySelectorAll('.education-entry');
//       const educationList = Array.from(educationEntries).map(entry => {
//         const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
//         const institution = (entry.querySelector('.institution') as HTMLInputElement).value;
//         const year = (entry.querySelector('.year') as HTMLInputElement).value;
//         return `<li>${degree} from ${institution} (${year})</li>`;
//       }).join('');

//       const workEntries = document.querySelectorAll('.work-entry');
//       const workList = Array.from(workEntries).map(entry => {
//         const jobTitle = (entry.querySelector('.jobTitle') as HTMLInputElement).value;
//         const company = (entry.querySelector('.company') as HTMLInputElement).value;
//         const yearsWorked = (entry.querySelector('.yearsWorked') as HTMLInputElement).value;
//         return `<li>${jobTitle} at ${company} (${yearsWorked})</li>`;
//       }).join('');

//       const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

//       resumeDisplay.innerHTML = `
//         <div class="resume" contenteditable="true">
//           <h2 style="color: #007bff">${name}</h2>
//           <p>Email: ${email}</p>
//           <p>Phone: ${phone}</p>
//           <h3 style="color: #007bff">Education</h3>
//           <ul>${educationList}</ul>
//           <h3 style="color: #007bff">Work Experience</h3>
//           <ul>${workList}</ul>
//           <h3 style="color: #007bff">Skills</h3>
//           <ul>${skills}</ul>
//         </div>
//       `;

//       resumeContainer.style.display = 'block';
//       form.style.display = 'none';  // Hide the form
//       downloadBtn.style.display = 'inline-block';  // Show the download button
//       copyLinkBtn.style.display = 'inline-block';  // Show the copy link button

//       // Generate a unique URL based on the user's name
//       const uniqueUrl = `https://giaichackathon.vercel.app/Unique%20Path%20and%20Shareable%20Link/index.html?name=${encodeURIComponent(name)}`;
      
//       // Show the unique URL
//       linkDisplay.textContent = `Shareable URL: ${uniqueUrl}`;
//       linkDisplay.style.display = 'block';

//       // Add copy link button functionality
//       copyLinkBtn.addEventListener('click', () => {
//         navigator.clipboard.writeText(uniqueUrl)
//           .then(() => {
//             alert('Link copied to clipboard!');
//           })
//           .catch(err => {
//             console.error('Failed to copy link: ', err);
//           });
//       });
//     });

//     downloadBtn.addEventListener('click', () => {
//       if (resumeDisplay) {
//         const name = (document.getElementById('name') as HTMLInputElement).value;

//         // Save original body content
//         const originalContent = document.body.innerHTML;

//         // Set print content
//         document.body.innerHTML = `
//           <html>
//             <head>
//               <title>${name}'s Resume</title>
//               <style>
//                 body {
//                   font-family: Arial, sans-serif;
//                   margin: 0;
//                   padding: 0;
//                   box-sizing: border-box;
//                 }
//                 .resume {
//                   padding: 20px;
//                   max-width: 800px;
//                   margin: 20px auto;
//                   border: 1px solid #ccc;
//                   border-radius: 8px;
//                   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//                   background-color: #fff;
//                   color: #333;
//                 }
//                 h2 {
//                   font-size: 2em;
//                   margin-bottom: 10px;
//                   color: #007bff;
//                 }
//                 p {
//                   font-size: 1.2em;
//                   margin: 5px 0;
//                 }
//                 h3 {
//                   font-size: 1.5em;
//                   margin-top: 20px;
//                   color: #333;
//                 }
//                 ul {
//                   list-style: disc;
//                   margin-left: 20px;
//                 }
//                 li {
//                   font-size: 1.1em;
//                 }
//               </style>
//             </head>
//             <body>
//               ${resumeDisplay.innerHTML}
//             </body>
//           </html>
//         `;

//         // Trigger print dialog
//         window.print();

//         // Restore original content
//         document.body.innerHTML = originalContent;
//       }
//     });
//   }
// });

// Select form and resume container elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;
const copyLinkBtn = document.getElementById('copyLinkBtn') as HTMLButtonElement;
const linkDisplay = document.getElementById('linkDisplay') as HTMLParagraphElement;

// Add event listener for form submission
resumeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Hide form after submission
  resumeForm.style.display = 'none';
  resumeContainer.style.display = 'block';

  // Generate the resume
  generateResume();

  // Scroll to the resume section
  resumeContainer.scrollIntoView({ behavior: 'smooth' });
});

// Function to generate the resume based on form input
function generateResume() {
  // Retrieve user inputs from form fields
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  
  const educationEntries = Array.from(document.getElementsByClassName('education-entry')).map((entry) => {
    return {
      degree: (entry.getElementsByClassName('degree')[0] as HTMLInputElement).value,
      institution: (entry.getElementsByClassName('institution')[0] as HTMLInputElement).value,
      year: (entry.getElementsByClassName('year')[0] as HTMLInputElement).value
    };
  });

  const workEntries = Array.from(document.getElementsByClassName('work-entry')).map((entry) => {
    return {
      jobTitle: (entry.getElementsByClassName('jobTitle')[0] as HTMLInputElement).value,
      company: (entry.getElementsByClassName('company')[0] as HTMLInputElement).value,
      yearsWorked: (entry.getElementsByClassName('yearsWorked')[0] as HTMLInputElement).value
    };
  });

  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  // Clear the resume display before appending new content
  resumeDisplay.innerHTML = '';

  // Create and append personal information
  const personalInfoSection = `
    <h2 contenteditable="true">${name}</h2>
    <p contenteditable="true"><strong>Email:</strong> ${email}</p>
    <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
  `;
  resumeDisplay.innerHTML += personalInfoSection;

  // Create and append education section
  const educationSection = `
    <h3>Education</h3>
    <ul>
      ${educationEntries.map(entry => `<li contenteditable="true">${entry.degree} from ${entry.institution} (${entry.year})</li>`).join('')}
    </ul>
  `;
  resumeDisplay.innerHTML += educationSection;

  // Create and append work experience section
  const workExperienceSection = `
    <h3>Work Experience</h3>
    <ul>
      ${workEntries.map(entry => `<li contenteditable="true">${entry.jobTitle} at ${entry.company} (${entry.yearsWorked})</li>`).join('')}
    </ul>
  `;
  resumeDisplay.innerHTML += workExperienceSection;

  // Create and append skills section
  const skillsSection = `
    <h3>Skills</h3>
    <p contenteditable="true">${skills.join(', ')}</p>
  `;
  resumeDisplay.innerHTML += skillsSection;
}

// Add new education entry dynamically
const addEducationBtn = document.getElementById('addEducation') as HTMLButtonElement;
addEducationBtn.addEventListener('click', () => {
  const educationFields = document.getElementById('educationFields') as HTMLDivElement;
  const newEntry = document.createElement('div');
  newEntry.classList.add('education-entry');
  newEntry.innerHTML = `
    <label for="degree">Degree:</label>
    <input type="text" class="degree" required>
    <label for="institution">Institution:</label>
    <input type="text" class="institution" required>
    <label for="year">Graduation Year:</label>
    <input type="text" class="year" required>
  `;
  educationFields.appendChild(newEntry);
});

// Add new work experience entry dynamically
const addWorkExperienceBtn = document.getElementById('addWorkExperience') as HTMLButtonElement;
addWorkExperienceBtn.addEventListener('click', () => {
  const workFields = document.getElementById('workFields') as HTMLDivElement;
  const newEntry = document.createElement('div');
  newEntry.classList.add('work-entry');
  newEntry.innerHTML = `
    <label for="jobTitle">Job Title:</label>
    <input type="text" class="jobTitle" required>
    <label for="company">Company:</label>
    <input type="text" class="company" required>
    <label for="yearsWorked">Years Worked:</label>
    <input type="text" class="yearsWorked" required>
  `;
  workFields.appendChild(newEntry);
});

// Add event listener for download button to trigger print for PDF download
downloadBtn.addEventListener('click', () => {
  window.print(); // Use browser's print dialog, which includes PDF option
});

// Generate unique shareable link (just for example purposes)
copyLinkBtn.addEventListener('click', () => {
  const username = (document.getElementById('name') as HTMLInputElement).value;
  const uniqueUrl = `${window.location.origin}/UniquePathAndShareableLink/index.html?user=${encodeURIComponent(username)}`;
  linkDisplay.textContent = `Shareable Link: ${uniqueUrl}`;
  linkDisplay.style.display = 'block';

  // Copy to clipboard
  navigator.clipboard.writeText(uniqueUrl)
    .then(() => {
      alert('Link copied to clipboard!');
    })
    .catch(err => {
      console.error('Could not copy link: ', err);
    });
});
