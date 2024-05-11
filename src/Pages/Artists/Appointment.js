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
            <header className="App-header">
                <img src={require('../../resources/logo.png')} alt='logo'/>
            </header>
            <section className='form_body'>
                <div>
                    <h1>MAKE AN APPOINTMENT</h1>
                    <span>Please Complete The Form Below</span>

                    <div className='form-body'>
                        <img src={require('../../resources/Background/ato.png')} alt='logo' className='form-logo'/>
                        
                        <form ref={form} onSubmit={sendEmail}>
                        
                        <label>Full Name:
                            <input type='text' id='full_name' name='full_name' required /> 
                        </label> 
                        <br />
                        <label htmlFor="email">Email
                            <input type="email" name="email" id="email" required />
                        </label>
                        <br />
                        <label htmlFor="">Phone Number:
                            <input type="text" name="phone" id="phone" />
                        </label>
                        <br />
                        <label htmlFor="des">Tattoo Description: <br />
                            <textarea name="des" id="des" placeholder='Type Here...'></textarea>
                        </label>
                        <br />
                        <label htmlFor="artist">Please Select An Artist:
                            <div>
                                <input type="radio" id="shane" name="artist" value="shane" />
                                <label htmlFor="shane">Shane</label><br />
                                <input type="radio" id="ramon" name="artist" value="ramon" />
                                <label htmlFor="ramon">Ramon</label>
                            </div>
                        </label>
                        <br />
                        <label htmlFor="sizing">Approximate Size (in inches):
                            <input type="text" name="tattoo_size" id="sizing" />
                        </label>
                        <br />
                        <label htmlFor="placement">Placement on your Body:
                            <input type="text" name='placement' id='placement'/>
                        </label>
                        <br />
                        <label htmlFor="colorMode">Tattoo Color:
                            <div>
                                <input type="radio" name="colorMode" id="color" value="color" />
                                <label htmlFor="color">Color</label><br />
                                <input type="radio" name="colorMode" id="black" value="black" />
                                <label htmlFor="black">Black and Grey</label>
                            </div>
                        </label>
                        <br />
                        <label htmlFor="availability">Availability:
                            <div>
                                <input type="radio" name="availability" id="availability" value="open" />
                                <label htmlFor="availability">I have open availability</label><br />
                                <input type="radio" name="availability" id="availability" value="close" />
                                <label htmlFor="availability">I have limited availability (if selected, please provide the range of your available dates below).</label>
                            </div>
                        </label>
                        <br />
                        <label htmlFor="availText">If you have only specific availability for an appointment, please provide your particular range of available dates here: <br />
                            <textarea name="textArea" id="availText" placeholder='Type Here...'></textarea>
                        </label><br />
                        <label htmlFor="contact">Select Your Preferred Contact Method:
                            <div>
                                <input type="radio" name="contact" id="phone" value="phone" />
                                <label htmlFor="phone">Phone</label><br />
                                <input type="radio" name="contact" id="email" value="email" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </label>
                        <br />
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
                
            </section>
        </>
    )
}
