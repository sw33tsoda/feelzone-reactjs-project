import React from 'react';
import Headline from './Headline';
import SignUp from './SignUp';
import ContentTitle from './ContentTitle';
import Features from './Features';
import Statistic from './Statistic';

function Intro() {
    return (
        <div className="intro">
            <Headline></Headline>
            <ContentTitle 
                title="Application features"
                sub_title="Everything you need to know about our application, what makes it different."
                textAlign="center"
            ></ContentTitle>

            <Features></Features>

            <ContentTitle 
                title="Our statistics"
                sub_title="Words never enough, we have figures"
                textAlign="center"
            ></ContentTitle>

            <Statistic></Statistic>


            <div className="sign-up-group">
                <ContentTitle 
                    title="Sign Up"
                    sub_title="Only one step, fill in the form below to become our user."
                    textAlign="center"
                ></ContentTitle>

                <SignUp></SignUp>
            </div>
            

        </div>
    );
}

export default Intro;