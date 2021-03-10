const express = require('express');
const app = express();
const path = require('path');

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// Middleware 
app.use(express.static('src'));
app.use(express.json());


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/Pages/ContactPage/ContactPage.js')
	// res.sendFile(path.join(__dirname, 'src', 'Pages', 'ContactPage', 'ContactPage.js'));
});

app.post('/', (req, res) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: '1boa.firebase.test1@gmail.com',
			pass: ''
		}
	});

	const mailOptions = {
		to: '1boa.firebase.test1@gmail.com',
		from: req.body.email,
		text: req.body.message
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.send('error')
		} else {
			console.log('Email send: ' + info.response)
			res.send('success')
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});