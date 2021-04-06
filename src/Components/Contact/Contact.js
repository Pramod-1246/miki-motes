import React from 'react'
import './Contact.css';

const Contact = () => {
    return (
		<section id="oBox4" class="clsBox clsContact">
			<h2>CONTACT ME AT <a href="/#" style={{cursor: 'pointer'}} target="_blank">hi@mikimottes.com</a></h2>
			<form id="frmContact" name="frmContact" method="post" action="/lead_upl.php" target="oPostFrame" onsubmit="return fValidateForm()">
				<input type="text" id="sFullName" name="sFullName" placeholder="" class="clsField" />
				<input type="text" id="sEmail" name="sEmail" placeholder="" class="clsField email" />
				<textarea id="sComments" name="sComments" placeholder="" class="clsField"></textarea>
				<div id="oFormThanksMsg"></div>
				<div id="oErrorMsg"></div>
				
			</form>
		</section>
        
    )
  }
  
export default Contact;