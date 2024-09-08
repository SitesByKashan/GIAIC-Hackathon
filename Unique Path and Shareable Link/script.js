document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeContainer = document.getElementById('resumeContainer');
    var resumeDisplay = document.getElementById('resumeDisplay');
    var downloadBtn = document.getElementById('downloadBtn');
    if (form && resumeContainer && resumeDisplay && downloadBtn) {
        var addEducationBtn = document.getElementById('addEducation');
        var educationFields_1 = document.getElementById('educationFields');
        addEducationBtn === null || addEducationBtn === void 0 ? void 0 : addEducationBtn.addEventListener('click', function () {
            var newEducationEntry = document.createElement('div');
            newEducationEntry.className = 'education-entry';
            newEducationEntry.innerHTML = "\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" class=\"degree\" required>\n        <label for=\"institution\">Institution:</label>\n        <input type=\"text\" class=\"institution\" required>\n        <label for=\"year\">Graduation Year:</label>\n        <input type=\"text\" class=\"year\" required>\n      ";
            educationFields_1 === null || educationFields_1 === void 0 ? void 0 : educationFields_1.appendChild(newEducationEntry);
        });
        var addWorkExperienceBtn = document.getElementById('addWorkExperience');
        var workFields_1 = document.getElementById('workFields');
        addWorkExperienceBtn === null || addWorkExperienceBtn === void 0 ? void 0 : addWorkExperienceBtn.addEventListener('click', function () {
            var newWorkEntry = document.createElement('div');
            newWorkEntry.className = 'work-entry';
            newWorkEntry.innerHTML = "\n        <label for=\"jobTitle\">Job Title:</label>\n        <input type=\"text\" class=\"jobTitle\" required>\n        <label for=\"company\">Company:</label>\n        <input type=\"text\" class=\"company\" required>\n        <label for=\"yearsWorked\">Years Worked:</label>\n        <input type=\"text\" class=\"yearsWorked\" required>\n      ";
            workFields_1 === null || workFields_1 === void 0 ? void 0 : workFields_1.appendChild(newWorkEntry);
        });
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
            resumeDisplay.innerHTML = "\n        <div class=\"resume\" contenteditable=\"true\">\n          <h2>".concat(name, "</h2>\n          <p>Email: ").concat(email, "</p>\n          <p>Phone: ").concat(phone, "</p>\n          <h3>Education</h3>\n          <ul>").concat(educationList, "</ul>\n          <h3>Work Experience</h3>\n          <ul>").concat(workList, "</ul>\n          <h3>Skills</h3>\n          <ul>").concat(skills, "</ul>\n        </div>\n      ");
            resumeContainer.style.display = 'block';
            form.style.display = 'none'; // Hide the form
            downloadBtn.style.display = 'inline-block'; // Show the download button
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
