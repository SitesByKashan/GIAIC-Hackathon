document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
  
    // Add additional education fields
    const addEducationBtn = document.getElementById('addEducation') as HTMLButtonElement;
    const educationFields = document.getElementById('educationFields') as HTMLDivElement;
  
    addEducationBtn.addEventListener('click', () => {
      const educationEntry = document.createElement('div');
      educationEntry.classList.add('education-entry');
      educationEntry.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" class="degree" required>
  
        <label for="institution">Institution:</label>
        <input type="text" class="institution" required>
  
        <label for="year">Graduation Year:</label>
        <input type="text" class="year" required>
      `;
      educationFields.appendChild(educationEntry);
    });
  
    // Add additional work experience fields
    const addWorkExperienceBtn = document.getElementById('addWorkExperience') as HTMLButtonElement;
    const workFields = document.getElementById('workFields') as HTMLDivElement;
  
    addWorkExperienceBtn.addEventListener('click', () => {
      const workEntry = document.createElement('div');
      workEntry.classList.add('work-entry');
      workEntry.innerHTML = `
        <label for="jobTitle">Job Title:</label>
        <input type="text" class="jobTitle" required>
  
        <label for="company">Company:</label>
        <input type="text" class="company" required>
  
        <label for="yearsWorked">Years Worked:</label>
        <input type="text" class="yearsWorked" required>
      `;
      workFields.appendChild(workEntry);
    });
  
    // Handle form submission
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
  
      // Capture personal info
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
  
      // Capture education info
      const educationEntries = document.querySelectorAll('.education-entry');
      const educationData = Array.from(educationEntries).map(entry => ({
        degree: (entry.querySelector('.degree') as HTMLInputElement).value,
        institution: (entry.querySelector('.institution') as HTMLInputElement).value,
        year: (entry.querySelector('.year') as HTMLInputElement).value
      }));
  
      // Capture work experience
      const workEntries = document.querySelectorAll('.work-entry');
      const workData = Array.from(workEntries).map(entry => ({
        jobTitle: (entry.querySelector('.jobTitle') as HTMLInputElement).value,
        company: (entry.querySelector('.company') as HTMLInputElement).value,
        yearsWorked: (entry.querySelector('.yearsWorked') as HTMLInputElement).value
      }));
  
      // Capture skills
      const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  
      // Generate the resume dynamically
      let resumeHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <ul>
      `;
      educationData.forEach(edu => {
        resumeHTML += `<li>${edu.degree}, ${edu.institution} (${edu.year})</li>`;
      });
      resumeHTML += '</ul>';
  
      resumeHTML += `
        <h3>Work Experience</h3>
        <ul>
      `;
      workData.forEach(work => {
        resumeHTML += `<li>${work.jobTitle} at ${work.company} (${work.yearsWorked})</li>`;
      });
      resumeHTML += '</ul>';
  
      resumeHTML += `
        <h3>Skills</h3>
        <ul>
      `;
      skills.forEach(skill => {
        resumeHTML += `<li>${skill.trim()}</li>`;
      });
      resumeHTML += '</ul>';
  
      // Hide the form and display the resume
      form.style.display = 'none';
      resumeDisplay.innerHTML = resumeHTML;
      resumeDisplay.style.display = 'block';
    });
  });
  