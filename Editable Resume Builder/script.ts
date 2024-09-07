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
    form.addEventListener('submit', (e) => {
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
<div style="text-align: center; margin-bottom: 20px;">
    <h2 style="color: #007bff;" contenteditable="true">${name}</h2>
    <p contenteditable="true">Email: ${email}</p>
    <p contenteditable="true">Phone: ${phone}</p>
</div>
<div style="margin-bottom: 20px;">
    <h3 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Education</h3>
    <ul style="list-style-type: none; padding: 0;">
        ${educationData.map(item => `
            <li style="padding: 8px 0; border-bottom: 1px solid #ddd;" contenteditable="true">
                ${item.degree}, ${item.institution} (${item.year})
            </li>
        `).join('')}
    </ul>
</div>
<div style="margin-bottom: 20px;">
    <h3 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Work Experience</h3>
    <ul style="list-style-type: none; padding: 0;">
        ${workData.map(item => `
            <li style="padding: 8px 0; border-bottom: 1px solid #ddd;" contenteditable="true">
                ${item.jobTitle} at ${item.company} (${item.yearsWorked})
            </li>
        `).join('')}
    </ul>
</div>
<div>
    <h3 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Skills</h3>
    <ul style="list-style-type: none; padding: 0;">
        ${skills.map(skill => `
            <li style="padding: 8px 0; border-bottom: 1px solid #ddd;" contenteditable="true">
                ${skill.trim()}
            </li>
        `).join('')}
    </ul>
</div>
`;

        resumeDisplay.innerHTML = resumeHTML;

        // Show resume and hide form
        form.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });

    // Make resume editable directly
    resumeDisplay.addEventListener('input', () => {
        console.log('Resume content changed.');
    });
});
