var resumeForm = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
var resumeDisplay = document.getElementById('resumeDisplay');
var downloadBtn = document.getElementById('downloadBtn');
var copyLinkBtn = document.getElementById('copyLinkBtn');
var linkDisplay = document.getElementById('linkDisplay');
// Add event listener for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Hide form after submission
    resumeForm.style.display = 'none';
    resumeContainer.style.display = 'block';
    // Generate the resume
    generateResume();
    // Scroll to the resume section
    resumeContainer.scrollIntoView({ behavior: 'smooth' });
});
// Function to generate the resume based on form input
function generateResume() {
    // Retrieve user inputs from form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var educationEntries = Array.from(document.getElementsByClassName('education-entry')).map(function (entry) {
        return {
            degree: entry.getElementsByClassName('degree')[0].value,
            institution: entry.getElementsByClassName('institution')[0].value,
            year: entry.getElementsByClassName('year')[0].value
        };
    });
    var workEntries = Array.from(document.getElementsByClassName('work-entry')).map(function (entry) {
        return {
            jobTitle: entry.getElementsByClassName('jobTitle')[0].value,
            company: entry.getElementsByClassName('company')[0].value,
            yearsWorked: entry.getElementsByClassName('yearsWorked')[0].value
        };
    });
    var skills = document.getElementById('skills').value.split(',');
    // Clear the resume display before appending new content
    resumeDisplay.innerHTML = '';
    // Create and append personal information
    var personalInfoSection = "\n    <h2 contenteditable=\"true\">".concat(name, "</h2>\n    <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n    <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n  ");
    resumeDisplay.innerHTML += personalInfoSection;
    // Create and append education section
    var educationSection = "\n    <h3 contenteditable=\"true\">Education</h3>\n    <ul>\n      ".concat(educationEntries.map(function (entry) { return "<li contenteditable=\"true\">".concat(entry.degree, " from ").concat(entry.institution, " (").concat(entry.year, ")</li>"); }).join(''), "\n    </ul>\n  ");
    resumeDisplay.innerHTML += educationSection;
    // Create and append work experience section
    var workExperienceSection = "\n    <h3 contenteditable=\"true\">Work Experience</h3>\n    <ul>\n      ".concat(workEntries.map(function (entry) { return "<li contenteditable=\"true\">".concat(entry.jobTitle, " at ").concat(entry.company, " (").concat(entry.yearsWorked, ")</li>"); }).join(''), "\n    </ul>\n  ");
    resumeDisplay.innerHTML += workExperienceSection;
    // Create and append skills section
    var skillsSection = "\n     <div class=\"resume-section\">\n                <h3 contenteditable=\"true\">Skills</h3>\n                <ul>\n                    ".concat(skills.map(function (skill) { return "\n                        <li contenteditable=\"true\">".concat(skill.trim(), "</li>\n                    "); }).join(''), "\n                </ul>\n            </div>\n  ");
    resumeDisplay.innerHTML += skillsSection;
}
// Add new education entry dynamically
var addEducationBtn = document.getElementById('addEducation');
addEducationBtn.addEventListener('click', function () {
    var educationFields = document.getElementById('educationFields');
    var newEntry = document.createElement('div');
    newEntry.classList.add('education-entry');
    newEntry.innerHTML = "\n    <label for=\"degree\">Degree:</label>\n    <input type=\"text\" class=\"degree\" required>\n    <label for=\"institution\">Institution:</label>\n    <input type=\"text\" class=\"institution\" required>\n    <label for=\"year\">Graduation Year:</label>\n    <input type=\"text\" class=\"year\" required>\n  ";
    educationFields.appendChild(newEntry);
});
// Add new work experience entry dynamically
var addWorkExperienceBtn = document.getElementById('addWorkExperience');
addWorkExperienceBtn.addEventListener('click', function () {
    var workFields = document.getElementById('workFields');
    var newEntry = document.createElement('div');
    newEntry.classList.add('work-entry');
    newEntry.innerHTML = "\n    <label for=\"jobTitle\">Job Title:</label>\n    <input type=\"text\" class=\"jobTitle\" required>\n    <label for=\"company\">Company:</label>\n    <input type=\"text\" class=\"company\" required>\n    <label for=\"yearsWorked\">Years Worked:</label>\n    <input type=\"text\" class=\"yearsWorked\" required>\n  ";
    workFields.appendChild(newEntry);
});
// Add event listener for download button to trigger print for PDF download
downloadBtn.addEventListener('click', function () {
    window.print(); // Use browser's print dialog, which includes PDF option
});
// Generate unique shareable link (just for example purposes)
copyLinkBtn.addEventListener('click', function () {
    var username = document.getElementById('name').value;
    var uniqueUrl = "https://giaichackathon.vercel.app/Unique%20Path%20and%20Shareable%20Link/index.html?user=".concat(encodeURIComponent(username));
    linkDisplay.textContent = "Shareable Link: ".concat(uniqueUrl);
    linkDisplay.style.display = 'block';
    // Copy to clipboard
    navigator.clipboard.writeText(uniqueUrl)
        .then(function () {
        alert('Link copied to clipboard!');
    })
        .catch(function (err) {
        console.error('Could not copy link: ', err);
    });
});
