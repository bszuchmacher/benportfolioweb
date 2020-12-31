import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               {/* <h1><span>Get In Touch.</span></h1>
              <br></br>
              <br></br>
              <br></br>
               <a target="submit" className="submit" href="mailto:BSzuchmacher@gmail.com">GET IN TOUCH</a> */}

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>
                  {/* <h1><span>Get In Touch.</span></h1> */}
              <br></br>
              <br></br>
              <br></br>
               <a target="submit" className="submit" href="mailto:BSzuchmacher@gmail.com">CLICK ME TO GET IN TOUCH</a>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
{/* 
               <form action="mailto:BSzuchmacher@gmail.com" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div> */}
 
                  <div>
                     {/* <button className="submit" >Submit</button> */}
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					{/* </fieldset>
				   </form> */}

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            {/* <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
                     <span>{email}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        How much really does a full #nocode app can really cost to you, the #nontechnical #solopreneur ? 
                        Can't figure it out?
                        It's OK, just ask Quote-bot™!
                        https://blicode.typeform.com/to/PJUdlakU
                        #startupfounders #nocode #nocoding #startupbusiness #timetomarket
                        <a href="https://twitter.com/thewebmachines?lang=en">Blicode</a>
                        </span>
                        <b><a href="https://twitter.com/thewebmachines?lang=en">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        What is #nocode ?
                        https://twitter.com/i/status/1337382540601151493
                        #website #tech #design #solopreneur #startabusiness #bootstrapping #hustlemode #makersgonnamake #letsgo
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6743146918672691200">Blicode</a>
                        </span>
                        <b><a href="https://twitter.com/thewebmachines?lang=en">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div>
            </aside> */}
      </div>
   </section>
    );
  }
}

export default Contact;
