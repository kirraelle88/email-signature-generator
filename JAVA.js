function generateSignature() {
// Get form values
var name = document.getElementById('name').value;
var jobTitle = document.getElementById('job-title').value;
var phoneNumber = document.getElementById('phone-number').value;
var emailAddress = document.getElementById('email-address').value;
var address = document.getElementById('address').value;

// Construct signature HTML
var signature = '<div id="Logo">';
signature += '<img src="https://www.royalwolf.com.au/uploads/images/web/Branding/rw2.png" alt="Royal Wolf Logo" height="111.6px" width="116.4px">';
signature += '</div>';
signature += '<div id="Contact">';
signature += '<h1 style=" color: #6699FF; line-height: 0;">' + name + '</h1>';
signature += jobTitle + '<br>';
signature += '<br>';
signature += '<strong style="color: #6699ff">M:</strong> <a href="tel:' + phoneNumber + '" style="color: #000;">' + phoneNumber + '</a>   <strong style="color: #6699ff">|</strong>   ';
signature += '<strong style="color: #6699ff">E:</strong> <a href="mailto:' + emailAddress + '" style="color: #000;">' + emailAddress + '</a>';
signature += '<br><br>';
signature += '<h1 style="color: #6699FF; line-height: 0;">Royal Wolf Australia, a United Rentals Company</h1>';
signature += '<a href="https://www.google.com/maps/search/?api=1&query=' + address + '" style="color: #000;">' + address + '</a><br>';
signature += '<br>';
signature += '</div>';
signature += '<div class="social-icons">';
signature += '<a href="https://www.linkedin.com/company/royal-wolf-trading" style="color: #000;"><img src="https://cdn-icons-png.flaticon.com/128/733/733561.png" alt="LinkedIn" height="20px" width="20px"></a>';
signature += '<a href="https://www.facebook.com/RoyalWolfAustralia" style="color: #000;"><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" height="20px" width="20px"></a>';
signature += '<a href="https://www.instagram.com/royal_wolf_trading" style="color: #000;"><img src="https://cdn-icons-png.flaticon.com/128/733/733558.png" alt="Instagram" height="20px" width="20px"></a>';
signature += '<a href="https://www.youtube.com/user/RoyalWolfContainers" style="color: #000;"><img src="https://cdn-icons-png.flaticon.com/128/733/733590.png" alt="YouTube" height="20px" width="20px"></a>';
signature += '<a href="https://au.pinterest.com/RoyalWolfAUSNZ" style="color: #000;"><img src="https://cdn-icons-png.flaticon.com/128/733/733566.png" alt="Pinterest" height="20px" width="20px"></a>';
signature += '</div>';
signature += '<br><p style="color: #999999; font-size:11px;">';
signature += 'This message and any attachment are confidential and may be privileged or otherwise protected from disclosure. If you are not the intended recipient, please telephone or email the sender and delete this message and any attachment from your system. If you are not the intended recipient, you must not copy this message or attachment or disclose the contents to any other person.</p>';
// Create signature element
var signatureElement = document.createElement('div');
signatureElement.innerHTML = signature;

// Append signature to container element
var containerElement = document.getElementById('signature-container');
containerElement.appendChild(signatureElement);
}

// Call generateSignature function when form is submitted
var formElement = document.getElementById('signature-form');
formElement.addEventListener('submit', function(event) {
event.preventDefault();
generateSignature();
});

// Call generateSignature function when page loads (for preview purposes)
generateSignature();
	