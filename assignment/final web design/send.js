function confirmSend() {
  const confirmed = confirm('Are you sure you want to send this email?');
  if (confirmed) {
    const recipient = 'info@coffeecafe.com';
    const subject = prompt('Please enter the email subject:');
    const body = prompt('Please enter the email body:');

    const encodedRecipient = encodeURIComponent(recipient);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailToUrl = `mailto:${encodedRecipient}?subject=${encodedSubject}&body=${encodedBody}`;

    window.location.href = mailToUrl;
  }
}
