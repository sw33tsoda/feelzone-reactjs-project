import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import SignUpForm from './SignUpForm';
import HeadlineForm from './HeadlineForm';
import "./SignUp.scss";
import WOW from 'wowjs';

function SignUp(props) {

    const formRef = useRef();
    const [submitting,setSubmitting] = useState(false);

    useEffect(() => {
        new WOW.WOW().init();
    },[]);

    const handleOnSubmitForm = async () => {
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            alert('Thank you for registration!');
        },2000);
    }

    const handleFormSubmit = () => {
        formRef.current.handleSubmit(); 
    }


    return (
        <div className="intro__sign-up" data-wow-delay="0" data-wow-duration="1s">

            {!submitting 

            ? <Container>
                <Row>
                    <Col sm="12" md="6">
                        <div className="wow slideInLeft center" data-wow-delay="0" data-wow-duration="1s">
                            <SignUpForm formRef={formRef} onSubmitForm={handleOnSubmitForm}></SignUpForm>
                        </div>
                    </Col>

                    <Col sm="12" md="6">
                        <div className="wow slideInRight center" data-wow-delay="0" data-wow-duration="1s">
                            <HeadlineForm formSubmit={handleFormSubmit}></HeadlineForm>
                        </div>
                    </Col>
                </Row>
            </Container> 
            :
            <center style={{height:'400px'}}><Spinner></Spinner></center>}

        </div>
    );
}

export default SignUp;
