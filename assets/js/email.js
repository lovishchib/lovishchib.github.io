function sendEmail(email, message, name) {

	Email.send({
	Host: "smtp-relay.sendinblue.com",
  Port: "587",
	Username : "lovishsinghchib@gmail.com",
	Password : atob("bWpWNzJaUU00T2NMcXdSZA=="),
	To : 'codercrabby@gmail.com',
	From : email,
	Subject : `A message from ${name} - ${email}`,
	Body : message,
	}).then(message => console.log(message))
}