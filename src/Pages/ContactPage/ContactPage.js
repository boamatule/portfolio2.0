import React, {useState, useEffect} from 'react'
import {
	ContactPageContainer,
	ContactPageWrapper,
	ContactPageFormContent,
	ContactPageForm,
	ContactPageFormH1,
	ContactPageLabel,
	ContactPageFormInput,
	ContactPageFormButtom,
	ContactPageText,
	ContactPageTextArea
} from './ContactPageStyles'

const ContactPage = () => {
	return (
		<div>
			<ContactPageContainer>
				<ContactPageWrapper>
					{/* <ContactPageFormH1>Send me an email</ContactPageFormH1> */}
					<ContactPageText>Contact me</ContactPageText>

					<ContactPageFormContent>
						<ContactPageForm>
							<ContactPageFormInput type="text" placeholder="Your Name" name="name"
								id="" required />
							<ContactPageFormInput type="email" placeholder="Your Email" name="email"
								id="" required />
							<ContactPageTextArea name="message" placeholder="Your Message"
								id=""
								required>
							</ContactPageTextArea>
							<ContactPageFormButtom>Send Email</ContactPageFormButtom>
						</ContactPageForm>
					</ContactPageFormContent>
				</ContactPageWrapper>
			</ContactPageContainer>
		</div>
	)
}

export default ContactPage;
