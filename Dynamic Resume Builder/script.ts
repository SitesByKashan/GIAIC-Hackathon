document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;

  // Add additional education fields
  const addEducationBtn = document.getElementById('addEducation') as HTMLButtonElement;
  const educationFields = document.getElementById('educationFields') as HTMLDivElement;

  addEducationBtn.addEventListener('click', () => {
      const educationEntry = createEducationEntry();
      educationFields.appendChild(educationEntry);
  });

  // Add additional work experience fields
  const addWorkExperienceBtn = document.getElementById('addWorkExperience') as HTMLButtonElement;
  const workFields = document.getElementById('workFields') as HTMLDivElement;

  addWorkExperienceBtn.addEventListener('click', () => {
      const workEntry = createWorkEntry();
      workFields.appendChild(workEntry);
  });

  // Handle form submission
  form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      if (!validateForm()) return;

      const resumeHTML = generateResumeHTML();
      resumeDisplay.innerHTML = resumeHTML;

      form.style.display = 'none';
      resumeDisplay.style.display = 'block';
  });

  // Helper functions
  function validateForm(): boolean {
      const name = (document.getElementById('name') as HTMLInputElement).value.trim();
      const email = (document.getElementById('email') as HTMLInputElement).value.trim();
      const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
      
      if (!name || !email || !phone) {
          alert('Please fill out all required fields.');
          return false;
      }
      return true;
  }

  function createEducationEntry(): HTMLDivElement {
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
      return educationEntry;
  }

  function createWorkEntry(): HTMLDivElement {
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
      return workEntry;
  }

  function generateResumeHTML(): string {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;

      const educationEntries = document.querySelectorAll('.education-entry');
      const educationData = Array.from(educationEntries).map(entry => ({
          degree: (entry.querySelector('.degree') as HTMLInputElement).value,
          institution: (entry.querySelector('.institution') as HTMLInputElement).value,
          year: (entry.querySelector('.year') as HTMLInputElement).value
      }));

      const workEntries = document.querySelectorAll('.work-entry');
      const workData = Array.from(workEntries).map(entry => ({
          jobTitle: (entry.querySelector('.jobTitle') as HTMLInputElement).value,
          company: (entry.querySelector('.company') as HTMLInputElement).value,
          yearsWorked: (entry.querySelector('.yearsWorked') as HTMLInputElement).value
      }));

      const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

      return `
          <div class="resume-header">
              <h2>${name}</h2>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
          </div>
          <div class="resume-section">
              <h3>Education</h3>
              <ul>
                  ${educationData.map(item => `
                      <li>${item.degree}, ${item.institution} (${item.year})</li>
                  `).join('')}
              </ul>
          </div>
          <div class="resume-section">
              <h3>Work Experience</h3>
              <ul>
                  ${workData.map(item => `
                      <li>${item.jobTitle} at ${item.company} (${item.yearsWorked})</li>
                  `).join('')}
              </ul>
          </div>
          <div class="resume-section">
              <h3>Skills</h3>
              <ul>
                  ${skills.map(skill => `
                      <li>${skill.trim()}</li>
                  `).join('')}
              </ul>
          </div>
      `;
  }
});
