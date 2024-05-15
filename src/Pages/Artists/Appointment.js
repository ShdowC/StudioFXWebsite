import './Appointment.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export function Appointment(){
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vv5qh4e', 'template_reqesro', form.current, {
          publicKey: 'i7PtIAyFiMWxXHcYr',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Submitted...")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


    return(
        <>
            <img src={require('../../resources/Background/ato.png')} alt='background-overlay' className='bg-img'/>
            
            <section className='form_body'>
                <div>
                    <div className="appointment_header">
                        <h1>MAKE AN APPOINTMENT</h1>
                        <span>Please Complete The Form Below</span>
                    </div>
                    

                    <div className='form-body'>
                        {/*Form Logos*/ }
                        <div className="logo_headers">
                            <img src={require('../../resources/Background/ato.png')} alt='logo' className='form-logo'/>
                            <img src={require('../../resources/Background/ato.png')} alt='logo' className='form-logo'/>
                        </div>
                        
                        {/*Form*/ }
                        <div className="form_">
                            <form ref={form} onSubmit={sendEmail}>
                            <div className='form_div'>
                                <label>Full Name:</label>
                                <input type='text' id='full_name' name='full_name' required />
                                <br />
                            </div>
                            
                            <div className='form_div'>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" required />
                                <br />
                            </div>

                            <div className='form_div'>
                                <label htmlFor="">Phone Number: </label>
                                <input type="text" name="phone" id="phone" />
                                <br />
                            </div>

                            <div className='form_div'>
                                <label htmlFor="des">Tattoo Description: </label><br />
                                <textarea name="des" id="des" placeholder='Type Here...'></textarea>
                                <br />
                            </div>

                            <div className='form_div'>
                                <label htmlFor="artist">Please Select An Artist:</label>
                                <div className='radio_'>
                                        <input type="radio" id="shane" name="artist" value="shane" />
                                        <label htmlFor="shane">Shane Singh</label><br />
                                        <input type="radio" id="ramon" name="artist" value="ramon" />
                                        <label htmlFor="ramon">Ramon Gonzales</label>
                                    </div>
                                <br />
                            </div>
                            <div className='form_div'>
                                <label htmlFor="sizing">Approximate Size (in inches):</label>
                                <input type="text" name="tattoo_size" id="sizing" />
                                <br/>
                            </div>
                            <div className='form_div'>
                                <label htmlFor="placement">Placement on your Body:</label>
                                <input type="text" name='placement' id='placement'/>
                                <br />
                            </div>
                            <div className='form_div'>
                                <label htmlFor="colorMode">Tattoo Color:</label>
                                <div className='radio_'>
                                        <input type="radio" name="colorMode" id="color" value="color" />
                                        <label htmlFor="color">Color</label><br />
                                        <input type="radio" name="colorMode" id="black" value="black" />
                                        <label htmlFor="black">Black and Grey</label>
                                    </div>
                                <br />
                            </div>
                            <div className='form_div'>
                                <label htmlFor="availability">Availability:</label>
                                <div className='radio_'>
                                        <input type="radio" name="availability" id="availability" value="open" />
                                        <label htmlFor="availability">I have open availability</label><br />
                                        <input type="radio" name="availability" id="availability" value="close" />
                                        <label htmlFor="availability">I have limited availability (if selected, please provide the range of your available dates below).</label>
                                    </div>
                                <br />
                            </div>
                            <div className='form_div'>
                                <label htmlFor="availText">If you have only specific availability for an appointment, please provide your particular range of available dates here:</label><br />
                                <textarea name="textArea" id="availText" placeholder='Type Here...'></textarea>
                                <br />
                            </div>
                            <div className='form_div'>
                                <label htmlFor="contact">Select Your Preferred Contact Method:</label>
                                <div className='radio_'>
                                        <input type="radio" name="contact" id="phone" value="phone" />
                                        <label htmlFor="phone">Phone</label><br />
                                        <input type="radio" name="contact" id="email" value="email" />
                                        <label htmlFor="email">Email</label>
                                </div>  
                                <br />
                            </div>
                            <div className='submitButton'>
                                <button type="submit">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}
