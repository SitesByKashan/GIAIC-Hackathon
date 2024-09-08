// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('resumeForm') as HTMLFormElement | null;
//   const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement | null;
//   const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement | null;
//   const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement | null;
//   if (form && resumeContainer && resumeDisplay && downloadBtn) {
//     const addEducationBtn = document.getElementById('addEducation') as HTMLButtonElement | null;
//     const educationFields = document.getElementById('educationFields') as HTMLDivElement | null;
//     addEducationBtn?.addEventListener('click', () => {
//       const newEducationEntry = document.createElement('div');
//       newEducationEntry.className = 'education-entry';
//       newEducationEntry.innerHTML = `
//         <label for="degree">Degree:</label>
//         <input type="text" class="degree" required>
//         <label for="institution">Institution:</label>
//         <input type="text" class="institution" required>
//         <label for="year">Graduation Year:</label>
//         <input type="text" class="year" required>
//       `;
//       educationFields?.appendChild(newEducationEntry);
//     });
//     const addWorkExperienceBtn = document.getElementById('addWorkExperience') as HTMLButtonElement | null;
//     const workFields = document.getElementById('workFields') as HTMLDivElement | null;
//     addWorkExperienceBtn?.addEventListener('click', () => {
//       const newWorkEntry = document.createElement('div');
//       newWorkEntry.className = 'work-entry';
//       newWorkEntry.innerHTML = `
//         <label for="jobTitle">Job Title:</label>
//         <input type="text" class="jobTitle" required>
//         <label for="company">Company:</label>
//         <input type="text" class="company" required>
//         <label for="yearsWorked">Years Worked:</label>
//         <input type="text" class="yearsWorked" required>
//       `;
//       workFields?.appendChild(newWorkEntry);
//     });
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
//           <h2>${name}</h2>
//           <p>Email: ${email}</p>
//           <p>Phone: ${phone}</p>
//           <h3>Education</h3>
//           <ul>${educationList}</ul>
//           <h3>Work Experience</h3>
//           <ul>${workList}</ul>
//           <h3>Skills</h3>
//           <ul>${skills}</ul>
//         </div>
//       `;
//       resumeContainer.style.display = 'block';
//       form.style.display = 'none';  // Hide the form
//       downloadBtn.style.display = 'inline-block';  // Show the download button
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
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeContainer = document.getElementById('resumeContainer');
    var resumeDisplay = document.getElementById('resumeDisplay');
    var downloadBtn = document.getElementById('downloadBtn');
    var copyLinkBtn = document.getElementById('copyLinkBtn');
    var linkDisplay = document.getElementById('linkDisplay');
    if (form && resumeContainer && resumeDisplay && downloadBtn && copyLinkBtn && linkDisplay) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var educationEntries = document.querySelectorAll('.education-entry');
            var educationList = Array.from(educationEntries).map(function (entry) {
                var degree = entry.querySelector('.degree').value;
                var institution = entry.querySelector('.institution').value;
                var year = entry.querySelector('.year').value;
                return "<li>".concat(degree, " from ").concat(institution, " (").concat(year, ")</li>");
            }).join('');
            var workEntries = document.querySelectorAll('.work-entry');
            var workList = Array.from(workEntries).map(function (entry) {
                var jobTitle = entry.querySelector('.jobTitle').value;
                var company = entry.querySelector('.company').value;
                var yearsWorked = entry.querySelector('.yearsWorked').value;
                return "<li>".concat(jobTitle, " at ").concat(company, " (").concat(yearsWorked, ")</li>");
            }).join('');
            var skills = document.getElementById('skills').value.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
            resumeDisplay.innerHTML = "\n        <div class=\"resume\" contenteditable=\"true\">\n          <h2 style=\"color: #007bff\">".concat(name, "</h2>\n          <p>Email: ").concat(email, "</p>\n          <p>Phone: ").concat(phone, "</p>\n          <h3 style=\"color: #007bff\">Education</h3>\n          <ul>").concat(educationList, "</ul>\n          <h3 style=\"color: #007bff\">Work Experience</h3>\n          <ul>").concat(workList, "</ul>\n          <h3 style=\"color: #007bff\">Skills</h3>\n          <ul>").concat(skills, "</ul>\n        </div>\n      ");
            resumeContainer.style.display = 'block';
            form.style.display = 'none'; // Hide the form
            downloadBtn.style.display = 'inline-block'; // Show the download button
            copyLinkBtn.style.display = 'inline-block'; // Show the copy link button
            // Generate a unique URL based on the user's name
            var uniqueUrl = "https://giaichackathon.vercel.app/Unique%20Path%20and%20Shareable%20Link/index.html?name=".concat(encodeURIComponent(name));
            // Show the unique URL
            linkDisplay.textContent = "Shareable URL: ".concat(uniqueUrl);
            linkDisplay.style.display = 'block';
            // Add copy link button functionality
            copyLinkBtn.addEventListener('click', function () {
                navigator.clipboard.writeText(uniqueUrl)
                    .then(function () {
                    alert('Link copied to clipboard!');
                })
                    .catch(function (err) {
                    console.error('Failed to copy link: ', err);
                });
            });
        });
        downloadBtn.addEventListener('click', function () {
            if (resumeDisplay) {
                var name_1 = document.getElementById('name').value;
                // Save original body content
                var originalContent = document.body.innerHTML;
                // Set print content
                document.body.innerHTML = "\n          <html>\n            <head>\n              <title>".concat(name_1, "'s Resume</title>\n              <style>\n                body {\n                  font-family: Arial, sans-serif;\n                  margin: 0;\n                  padding: 0;\n                  box-sizing: border-box;\n                }\n                .resume {\n                  padding: 20px;\n                  max-width: 800px;\n                  margin: 20px auto;\n                  border: 1px solid #ccc;\n                  border-radius: 8px;\n                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                  background-color: #fff;\n                  color: #333;\n                }\n                h2 {\n                  font-size: 2em;\n                  margin-bottom: 10px;\n                  color: #007bff;\n                }\n                p {\n                  font-size: 1.2em;\n                  margin: 5px 0;\n                }\n                h3 {\n                  font-size: 1.5em;\n                  margin-top: 20px;\n                  color: #333;\n                }\n                ul {\n                  list-style: disc;\n                  margin-left: 20px;\n                }\n                li {\n                  font-size: 1.1em;\n                }\n              </style>\n            </head>\n            <body>\n              ").concat(resumeDisplay.innerHTML, "\n            </body>\n          </html>\n        ");
                // Trigger print dialog
                window.print();
                // Restore original content
                document.body.innerHTML = originalContent;
            }
        });
    }
});
