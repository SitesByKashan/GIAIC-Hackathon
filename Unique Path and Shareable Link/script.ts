document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm') as HTMLFormElement | null;
  const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement | null;
  const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement | null;
  const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement | null;
  const copyLinkBtn = document.getElementById('copyLinkBtn') as HTMLButtonElement | null;
  const linkDisplay = document.getElementById('linkDisplay') as HTMLParagraphElement | null;

  if (form && resumeContainer && resumeDisplay && downloadBtn && copyLinkBtn && linkDisplay) {
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
          <h2 style="color: #007bff">${name}</h2>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <h3 style="color: #007bff">Education</h3>
          <ul>${educationList}</ul>
          <h3 style="color: #007bff">Work Experience</h3>
          <ul>${workList}</ul>
          <h3 style="color: #007bff">Skills</h3>
          <ul>${skills}</ul>
        </div>
      `;

      resumeContainer.style.display = 'block';
      form.style.display = 'none';  // Hide the form
      downloadBtn.style.display = 'inline-block';  // Show the download button
      copyLinkBtn.style.display = 'inline-block';  // Show the copy link button

      // Generate a unique URL based on the user's name
      const uniqueUrl = `https://giaichackathon.vercel.app/Unique%20Path%20and%20Shareable%20Link/index.html?name=${encodeURIComponent(name)}`;
      
      // Show the unique URL
      linkDisplay.textContent = `Shareable URL: ${uniqueUrl}`;
      linkDisplay.style.display = 'block';

      // Add copy link button functionality
      copyLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueUrl)
          .then(() => {
            alert('Link copied to clipboard!');
          })
          .catch(err => {
            console.error('Failed to copy link: ', err);
          });
      });
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
