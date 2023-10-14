function submitForm(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const dob = new Date(document.getElementById('dob').value);
  const country = document.getElementById('dropdown').value;
  const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
  const profession = document.getElementById('profession').value;
  const email = document.getElementById('email').value;
  const mobileNumber = document.getElementById('mobileNumber').value;

  // Validate all fields are filled
  if (!firstName || !lastName || !dob || !country || genderCheckboxes.length === 0 || !profession || !email || !mobileNumber) {
    alert('Please fill in all the fields.');
    return;
  }

  const currentDate = new Date();

  if (dob > currentDate) {
    alert('Date of Birth cannot be in the future.');
    return;
  }

  /*const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia",
   "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", 
    "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
    "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica",
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa",
    "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
    "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

    const select = document.getElementById('dropdown');

    for (let i = 0; i < countries.length; i++) {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      select.appendChild(option);
    }*/


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (mobileNumber.length>10){
    alert('Mobile number length cannot be greater than 10 digit');
    return;
  }
  const gender = Array.from(genderCheckboxes).map(checkbox => checkbox.value).join(', ');

  const popupContent = `
    <div><strong>First Name:</strong> ${firstName}</div>
    <div><strong>Last Name:</strong> ${lastName}</div>
    <div><strong>Date of Birth:</strong> ${dob}</div>
    <div><strong>Country:</strong> ${country}</div>
    <div><strong>Gender:</strong> ${gender}</div>
    <div><strong>Profession:</strong> ${profession}</div>
    <div><strong>Email:</strong> ${email}</div>
    <div><strong>Mobile Number:</strong> ${mobileNumber}</div>
  `;

  document.getElementById('popupContent').innerHTML = popupContent;
  document.getElementById('popup').style.display = 'block';
}


function resetForm() {
  document.getElementById('survey-form').reset();

  // Reset the popup
  document.getElementById('popupContent').innerHTML = '';
  document.getElementById('popup').style.display = 'none';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  resetForm();
}
  
  