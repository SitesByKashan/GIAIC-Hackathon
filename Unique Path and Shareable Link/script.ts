document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm') as HTMLFormElement | null;
  const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement | null;
  const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement | null;
  const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement | null;

  if (form && resumeContainer && resumeDisplay && downloadBtn) {
    const addEducationBtn = document.getElementById('addEducation') as HTMLButtonElement | null;
    const educationFields = document.getElementById('educationFields') as HTMLDivElement | null;

    addEducationBtn?.addEventListener('click', () => {
      const newEducationEntry = document.createElement('div');
      newEducationEntry.className = 'education-entry';

      newEducationEntry.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" class="degree" required>
        <label for="institution">Institution:</label>
        <input type="text" class="institution" required>
        <label for="year">Graduation Year:</label>
        <input type="text" class="year" required>
      `;

      educationFields?.appendChild(newEducationEntry);
    });

    const addWorkExperienceBtn = document.getElementById('addWorkExperience') as HTMLButtonElement | null;
    const workFields = document.getElementById('workFields') as HTMLDivElement | null;

    addWorkExperienceBtn?.addEventListener('click', () => {
      const newWorkEntry = document.createElement('div');
      newWorkEntry.className = 'work-entry';

      newWorkEntry.innerHTML = `
        <label for="jobTitle">Job Title:</label>
        <input type="text" class="jobTitle" required>
        <label for="company">Company:</label>
        <input type="text" class="company" required>
        <label for="yearsWorked">Years Worked:</label>
        <input type="text" class="yearsWorked" required>
      `;

      workFields?.appendChild(newWorkEntry);
    });

    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;

      const educationEntries = document.querySelectorAll('.education-entry');
      const educationList = Array.from(educationEntries).map(entry => {
        const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
        const institution = (entry.querySelector('.institution') as HTMLInputElement).value;
        const year = (entry.querySelector('.year') as HTMLInputElement).value;
        return `<li>${degree} from ${institution} (${year})</li>`;
      }).join('');

      const workEntries = document.querySelectorAll('.work-entry');
      const workList = Array.from(workEntries).map(entry => {
        const jobTitle = (entry.querySelector('.jobTitle') as HTMLInputElement).value;
        const company = (entry.querySelector('.company') as HTMLInputElement).value;
        const yearsWorked = (entry.querySelector('.yearsWorked') as HTMLInputElement).value;
        return `<li>${jobTitle} at ${company} (${yearsWorked})</li>`;
      }).join('');

      const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

      resumeDisplay.innerHTML = `
        <div class="resume" contenteditable="true">
          <h2>${name}</h2>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <h3>Education</h3>
          <ul>${educationList}</ul>
          <h3>Work Experience</h3>
          <ul>${workList}</ul>
          <h3>Skills</h3>
          <ul>${skills}</ul>
        </div>
      `;

      resumeContainer.style.display = 'block';
      form.style.display = 'none';  // Hide the form
      downloadBtn.style.display = 'inline-block';  // Show the download button
    });

    downloadBtn.addEventListener('click', () => {
      if (resumeDisplay) {
        const name = (document.getElementById('name') as HTMLInputElement).value;

        // Save original body content
        const originalContent = document.body.innerHTML;

        // Set print content
        document.body.innerHTML = `
          <html>
            <head>
              <title>${name}'s Resume</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                .resume {
                  padding: 20px;
                  max-width: 800px;
                  margin: 20px auto;
                  border: 1px solid #ccc;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                  background-color: #fff;
                  color: #333;
                }
                h2 {
                  font-size: 2em;
                  margin-bottom: 10px;
                  color: #007bff;
                }
                p {
                  font-size: 1.2em;
                  margin: 5px 0;
                }
                h3 {
                  font-size: 1.5em;
                  margin-top: 20px;
                  color: #333;
                }
                ul {
                  list-style: disc;
                  margin-left: 20px;
                }
                li {
                  font-size: 1.1em;
                }
              </style>
            </head>
            <body>
              ${resumeDisplay.innerHTML}
            </body>
          </html>
        `;

        // Trigger print dialog
        window.print();

        // Restore original content
        document.body.innerHTML = originalContent;
      }
    });
  }
});
