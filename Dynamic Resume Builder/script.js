document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeDisplay = document.getElementById('resumeDisplay');
    // Add additional education fields
    var addEducationBtn = document.getElementById('addEducation');
    var educationFields = document.getElementById('educationFields');
    addEducationBtn.addEventListener('click', function () {
        var educationEntry = createEducationEntry();
        educationFields.appendChild(educationEntry);
    });
    // Add additional work experience fields
    var addWorkExperienceBtn = document.getElementById('addWorkExperience');
    var workFields = document.getElementById('workFields');
    addWorkExperienceBtn.addEventListener('click', function () {
        var workEntry = createWorkEntry();
        workFields.appendChild(workEntry);
    });
    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateForm())
            return;
        var resumeHTML = generateResumeHTML();
        resumeDisplay.innerHTML = resumeHTML;
        form.style.display = 'none';
        resumeDisplay.style.display = 'block';
    });
    // Helper functions
    function validateForm() {
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        if (!name || !email || !phone) {
            alert('Please fill out all required fields.');
            return false;
        }
        return true;
    }
    function createEducationEntry() {
        var educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry');
        educationEntry.innerHTML = "\n          <label for=\"degree\">Degree:</label>\n          <input type=\"text\" class=\"degree\" required>\n          <label for=\"institution\">Institution:</label>\n          <input type=\"text\" class=\"institution\" required>\n          <label for=\"year\">Graduation Year:</label>\n          <input type=\"text\" class=\"year\" required>\n      ";
        return educationEntry;
    }
    function createWorkEntry() {
        var workEntry = document.createElement('div');
        workEntry.classList.add('work-entry');
        workEntry.innerHTML = "\n          <label for=\"jobTitle\">Job Title:</label>\n          <input type=\"text\" class=\"jobTitle\" required>\n          <label for=\"company\">Company:</label>\n          <input type=\"text\" class=\"company\" required>\n          <label for=\"yearsWorked\">Years Worked:</label>\n          <input type=\"text\" class=\"yearsWorked\" required>\n      ";
        return workEntry;
    }
    function generateResumeHTML() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var educationEntries = document.querySelectorAll('.education-entry');
        var educationData = Array.from(educationEntries).map(function (entry) { return ({
            degree: entry.querySelector('.degree').value,
            institution: entry.querySelector('.institution').value,
            year: entry.querySelector('.year').value
        }); });
        var workEntries = document.querySelectorAll('.work-entry');
        var workData = Array.from(workEntries).map(function (entry) { return ({
            jobTitle: entry.querySelector('.jobTitle').value,
            company: entry.querySelector('.company').value,
            yearsWorked: entry.querySelector('.yearsWorked').value
        }); });
        var skills = document.getElementById('skills').value.split(',');
        return "\n          <div class=\"resume-header\">\n              <h2>".concat(name, "</h2>\n              <p>Email: ").concat(email, "</p>\n              <p>Phone: ").concat(phone, "</p>\n          </div>\n          <div class=\"resume-section\">\n              <h3>Education</h3>\n              <ul>\n                  ").concat(educationData.map(function (item) { return "\n                      <li>".concat(item.degree, ", ").concat(item.institution, " (").concat(item.year, ")</li>\n                  "); }).join(''), "\n              </ul>\n          </div>\n          <div class=\"resume-section\">\n              <h3>Work Experience</h3>\n              <ul>\n                  ").concat(workData.map(function (item) { return "\n                      <li>".concat(item.jobTitle, " at ").concat(item.company, " (").concat(item.yearsWorked, ")</li>\n                  "); }).join(''), "\n              </ul>\n          </div>\n          <div class=\"resume-section\">\n              <h3>Skills</h3>\n              <ul>\n                  ").concat(skills.map(function (skill) { return "\n                      <li>".concat(skill.trim(), "</li>\n                  "); }).join(''), "\n              </ul>\n          </div>\n      ");
    }
});
