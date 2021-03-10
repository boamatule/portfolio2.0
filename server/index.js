const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const exphbs = require('express-handlebars');



const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());


// Static folder
app.use('public', express.static(path.join(__dirname + 'public')));


app.get('/', (req, res) => {
	res.render('contact', {layout: false});
})

app.post('/send', (req, res) => {
	const output = `
	<p>You have a new contact request</p>
	<h3>Contact Details</h3>
	<ul>
		<li>Name: ${req.body.name}</li>
		<li>Name: ${req.body.company}</li>
		<li>Name: ${req.body.email}</li>
		<li>Name: ${req.body.phone}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>
	`;

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: '1boa.firebase.test1@gmail.com',
				pass: ''			
			}
			,
			tls: {
				rejectUnauthorized: false
			}
		});

		let mailOptions = {
			from: ' "Nodemailer Contact" <1boa.firebase.test1@gmail.com>',
			to: 'boa.matule@gmail.com',
			Subject: 'Node Contact Request',
			text: 'Hello there!',
			html: output,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

			res.render('contact', {msg: 'Email has been sent'});
		});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});