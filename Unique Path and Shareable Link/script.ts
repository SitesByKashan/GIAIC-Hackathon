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
    <h3 contenteditable="true">Education</h3>
    <ul>
      ${educationEntries.map(entry => `<li contenteditable="true">${entry.degree} from ${entry.institution} (${entry.year})</li>`).join('')}
    </ul>
  `;
  resumeDisplay.innerHTML += educationSection;

  // Create and append work experience section
  const workExperienceSection = `
    <h3 contenteditable="true">Work Experience</h3>
    <ul>
      ${workEntries.map(entry => `<li contenteditable="true">${entry.jobTitle} at ${entry.company} (${entry.yearsWorked})</li>`).join('')}
    </ul>
  `;
  resumeDisplay.innerHTML += workExperienceSection;

  // Create and append skills section
  const skillsSection = `
     <div class="resume-section">
                <h3 contenteditable="true">Skills</h3>
                <ul>
                    ${skills.map(skill => `
                        <li contenteditable="true">${skill.trim()}</li>
                    `).join('')}
                </ul>
            </div>
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
  const uniqueUrl = `https://giaichackathon.vercel.app/Unique%20Path%20and%20Shareable%20Link/index.html?user=${encodeURIComponent(username)}`;
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
