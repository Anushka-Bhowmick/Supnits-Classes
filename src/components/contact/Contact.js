import React, { Component} from "react";
import contact from "../../images/sections/contact.svg";
import "./Contact.css";
import emailjs from 'emailjs-com';
//template_jhemkuw--template id
//service_1sv9t6b-- service id
//ODSTkHwTRAirRD5Je-- api key
class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      isFormVisible: true
    };
  }
  sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_1sv9t6b', 'template_jhemkuw', this.form.current, 'ODSTkHwTRAirRD5Je')
      .then((result) => {
          console.log(result.text);
          window.alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          window.alert('Failed to send email. Please try again.');
      });
  };
  render() {
    
    return this.state.isFormVisible ?(
      <form ref={this.form} onSubmit={this.sendEmail}>
      <div className="getintouch mb-5">
        <div className="container">
          <div className="title pt-1 pb-4 text-center">
            <h4 className="sub-title text-capitalize">
              contact <span>us</span>
            </h4>
          </div>
          
          <div className="row align-items-center">
            <div className="c col-lg-6 col-12 mb-lg-0 mb-5">
              <div className="left-side text-lg-start text-center">
                <img className="img-fluid w-75" src={contact} alt="contact" />
              </div>
            </div>
           
            <div className="c col-lg-6 col-12">
              <div className="right-side">
                <div className="row">
                  <div className="form-group c col-md-6 col-12 mb-3">
                    <label htmlFor="last_name" className="mb-2 text-capitalize">
                     
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control py-2 px-3"
                      id="first_name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group c col-md-6 col-12 mb-3">
                    <label htmlFor="last_name" className="mb-2 text-capitalize">
                      last name
                    </label>
                    <input
                      type="text"
                      className="form-control py-2 px-3"
                      id="last_name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-group c col-12 mb-3">
                    <label htmlFor="e-mail" className="mb-2 text-capitalize">
                      Email
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      className="form-control py-2 px-3"
                      id="e-mail"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group c col-12 mb-4">
                    <label htmlFor="textarea" className="mb-2 text-capitalize">
                      write your message down here
                    </label>
                    <textarea
                      className="form-control py-2 px-3"
                      id="textarea"
                      rows="4"
                      name="message"
                    ></textarea>
                  </div>
                 
                        <input className="btn btn-outline-primary text-capitalize w-25 mx-auto myedit-sendbtn" type="submit" value="Send" />
                 
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
       </form>
    ): null;
    
  }
}

export default Contact;
