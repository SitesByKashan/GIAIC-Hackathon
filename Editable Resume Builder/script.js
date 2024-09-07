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
        var resumeHTML = "\n<div style=\"text-align: center; margin-bottom: 20px;\">\n    <h2 style=\"color: #007bff;\" contenteditable=\"true\">".concat(name, "</h2>\n    <p contenteditable=\"true\">Email: ").concat(email, "</p>\n    <p contenteditable=\"true\">Phone: ").concat(phone, "</p>\n</div>\n<div style=\"margin-bottom: 20px;\">\n    <h3 style=\"color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;\">Education</h3>\n    <ul style=\"list-style-type: none; padding: 0;\">\n        ").concat(educationData.map(function (item) { return "\n            <li style=\"padding: 8px 0; border-bottom: 1px solid #ddd;\" contenteditable=\"true\">\n                ".concat(item.degree, ", ").concat(item.institution, " (").concat(item.year, ")\n            </li>\n        "); }).join(''), "\n    </ul>\n</div>\n<div style=\"margin-bottom: 20px;\">\n    <h3 style=\"color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;\">Work Experience</h3>\n    <ul style=\"list-style-type: none; padding: 0;\">\n        ").concat(workData.map(function (item) { return "\n            <li style=\"padding: 8px 0; border-bottom: 1px solid #ddd;\" contenteditable=\"true\">\n                ".concat(item.jobTitle, " at ").concat(item.company, " (").concat(item.yearsWorked, ")\n            </li>\n        "); }).join(''), "\n    </ul>\n</div>\n<div>\n    <h3 style=\"color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;\">Skills</h3>\n    <ul style=\"list-style-type: none; padding: 0;\">\n        ").concat(skills.map(function (skill) { return "\n            <li style=\"padding: 8px 0; border-bottom: 1px solid #ddd;\" contenteditable=\"true\">\n                ".concat(skill.trim(), "\n            </li>\n        "); }).join(''), "\n    </ul>\n</div>\n");
        resumeDisplay.innerHTML = resumeHTML;
        // Show resume and hide form
        form.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });
    // Make resume editable directly
    resumeDisplay.addEventListener('input', function () {
        console.log('Resume content changed.');
    });
});
