import React, {Component} from "react";

class SignUpForm extends Component{
    render(){
        return(
            <div className='FormCenter'>
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="Password">Password</label>
                        <input type="Password" id="Password" className="FormField__Input" placeholder="Enter your password" name="Password"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">E-mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/>I agree all statements<a href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button><a href="#" className="FormField__Link">I'm already member</a>
                    </div>

                </form>
            </div>
        );
    }

}

export default SignUpForm;
