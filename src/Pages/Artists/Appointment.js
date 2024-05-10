import React from 'react';
import './Appointment.css';

export function Appointment(){
    return(
        <>
            <img src={require('../../resources/Background/ato.png')} alt='background-overlay' className='bg-img'/>
            <header className="App-header">
                <img src={require('../../resources/logo.png')} alt='logo'/>
            </header>
            <section className='App-Body'>
                <div>
                    <h1>MAKE AN APPOINTMENT</h1>
                    <span>Please Complete The Form Below</span>

                    <div className='form-body'>
                        <img src={require('../../resources/Background/ato.png')} alt='logo' className='form-logo'/>
                        <form>
                        
                        <label>Full Name:
                            <input type='text'/>
                            <input type='text'/> 
                        </label> 
                        <br />
                        <label htmlFor="email">Email
                            <input type="email" name="email" id="email" />
                        </label>
                        <br />
                        <label htmlFor="">Phone Number:
                            <input type="text" name="" id="" />
                        </label>
                        <br />
                        <label htmlFor="des">Tattoo Description:
                            <textarea name="des" id="des"></textarea>
                        </label>
                        <br />
                        <label htmlFor="artist">Please Select An Artist:
                            <div>
                                <input type="radio" id="shane" name="drone" value="shane" checked />
                                <label for="shane">Shane</label><br />
                                <input type="radio" id="ramon" name="drone" value="ramon" checked />
                                <label for="ramon">Ramon</label>
                            </div>
                        </label>
                        <br />
                        <label htmlFor="sizing">Approximate Size (in inches):
                            <input type="text" name="tattoo-size" id="sizing" />
                        </label>
                        <br />
                        <label htmlFor="placement">Placement on your Body:
                            <input type="text" name='placement' id='placement'/>
                        </label>
                        <label htmlFor="color">Tattoo Color:
                            <div>
                                <input type="radio" name="color" id="color" />
                                <label htmlFor="color">Color</label>
                            </div>
                            <div>
                                <input type="radio" name="black" id="black" />
                                <label htmlFor="black">Black and Grey</label>
                            </div>
                        </label>
                        </form>
                    </div>
                </div>
                
            </section>
        </>
    )
}
