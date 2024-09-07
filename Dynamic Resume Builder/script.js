document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeDisplay = document.getElementById('resumeDisplay');
    // Add additional education fields
    var addEducationBtn = document.getElementById('addEducation');
    var educationFields = document.getElementById('educationFields');
    addEducationBtn.addEventListener('click', function () {
        var educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry');
        educationEntry.innerHTML = "\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" class=\"degree\" required>\n  \n        <label for=\"institution\">Institution:</label>\n        <input type=\"text\" class=\"institution\" required>\n  \n        <label for=\"year\">Graduation Year:</label>\n        <input type=\"text\" class=\"year\" required>\n      ";
        educationFields.appendChild(educationEntry);
    });
    // Add additional work experience fields
    var addWorkExperienceBtn = document.getElementById('addWorkExperience');
    var workFields = document.getElementById('workFields');
    addWorkExperienceBtn.addEventListener('click', function () {
        var workEntry = document.createElement('div');
        workEntry.classList.add('work-entry');
        workEntry.innerHTML = "\n        <label for=\"jobTitle\">Job Title:</label>\n        <input type=\"text\" class=\"jobTitle\" required>\n  \n        <label for=\"company\">Company:</label>\n        <input type=\"text\" class=\"company\" required>\n  \n        <label for=\"yearsWorked\">Years Worked:</label>\n        <input type=\"text\" class=\"yearsWorked\" required>\n      ";
        workFields.appendChild(workEntry);
    });
    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Capture personal info
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        // Capture education info
        var educationEntries = document.querySelectorAll('.education-entry');
        var educationData = Array.from(educationEntries).map(function (entry) { return ({
            degree: entry.querySelector('.degree').value,
            institution: entry.querySelector('.institution').value,
            year: entry.querySelector('.year').value
        }); });
        // Capture work experience
        var workEntries = document.querySelectorAll('.work-entry');
        var workData = Array.from(workEntries).map(function (entry) { return ({
            jobTitle: entry.querySelector('.jobTitle').value,
            company: entry.querySelector('.company').value,
            yearsWorked: entry.querySelector('.yearsWorked').value
        }); });
        // Capture skills
        var skills = document.getElementById('skills').value.split(',');
        // Generate the resume dynamically
        var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <h3>Education</h3>\n        <ul>\n      ");
        educationData.forEach(function (edu) {
            resumeHTML += "<li>".concat(edu.degree, ", ").concat(edu.institution, " (").concat(edu.year, ")</li>");
        });
        resumeHTML += '</ul>';
        resumeHTML += "\n        <h3>Work Experience</h3>\n        <ul>\n      ";
        workData.forEach(function (work) {
            resumeHTML += "<li>".concat(work.jobTitle, " at ").concat(work.company, " (").concat(work.yearsWorked, ")</li>");
        });
        resumeHTML += '</ul>';
        resumeHTML += "\n        <h3>Skills</h3>\n        <ul>\n      ";
        skills.forEach(function (skill) {
            resumeHTML += "<li>".concat(skill.trim(), "</li>");
        });
        resumeHTML += '</ul>';
        // Hide the form and display the resume
        form.style.display = 'none';
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.style.display = 'block';
    });
});
