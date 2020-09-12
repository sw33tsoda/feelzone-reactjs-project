import React from 'react';
import {Formik, Form, FastField} from 'formik';
import InputField from './custom-fields/InputField';
import './SignUpForm.scss';
import { Row, Col } from 'reactstrap';
import * as Yup from 'yup';

function SignUpForm(props) {

    const {formRef,onSubmitForm} = props;

    const initialValues = {
        firstname:'',
        lastname:'',
        nickname:'',
        email:'',
        birthday:'',
        phonenumber:'',
    }
    
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('This is a required field.').max(32,'Maximum is 32 characters.'),
        lastname: Yup.string().required('This is a required field.').max(32,'Maximum is 32 characters.'),
        nickname: Yup.string().required('This is a required field.').min(3,'Minimum is 3 characters.').max(32,'Maximum is 32 characters.'),
        email: Yup.string().required('This is a required field.').email('Email is invalid.'),
        birthday: Yup.string().required('This is a required field.'),
        phonenumber: Yup.string().required('This is a required field.'),
    });

    return (
        <div className="intro__sign-up__sign-up-form">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitForm} innerRef={formRef}>
                {
                    (FormikProps) => {
                        // const {values,error,touched,isSubmitting} = FormikProps;
                        return (
                            <Form>  
                                <Row>
                                    <Col>
                                        <FastField
                                            name="firstname"
                                            component={InputField}

                                            className="intro__sign-up__sign-up-form__input"
                                            label="First name"
                                            placeholder="Type your first name"
                                            type="text"
                                        ></FastField>
                                    </Col>
                                    <Col>
                                        <FastField
                                            name="lastname"
                                            component={InputField}

                                            className="intro__sign-up__sign-up-form__input"
                                            label="Last name"
                                            placeholder="Type your last name"
                                            type="text"
                                        ></FastField>
                                    </Col>
                                </Row>
                                
                                <FastField
                                    name="nickname"
                                    component={InputField}

                                    className="intro__sign-up__sign-up-form__input"
                                    label="Nickname"
                                    placeholder="What do people call you?"
                                    type="text"
                                ></FastField>

                                <FastField
                                    name="email"
                                    component={InputField}

                                    className="intro__sign-up__sign-up-form__input"
                                    label="Email"
                                    placeholder="Type your email adress"
                                    type="email"
                                ></FastField>

                                <Row>
                                    <Col>
                                        <FastField
                                            name="birthday"
                                            component={InputField}

                                            className="intro__sign-up__sign-up-form__input"
                                            label="Birthday"
                                            type="date"
                                        ></FastField>
                                    </Col>
                                    <Col>
                                        <FastField
                                            name="phonenumber"
                                            component={InputField}

                                            className="intro__sign-up__sign-up-form__input"
                                            label="Phone number"
                                            placeholder="Type your phone number"
                                            type="text"
                                        ></FastField>
                                    </Col>
                                </Row>
                                
                                <div className="intro__sign-up__sign-up-form__confirm">
                                    <i>You finished? please check the Terms and Conditions to complete the registration.</i>
                                </div>
                            </Form>
                        );
                    }
                }
            </Formik>
        </div>
    );
}

export default SignUpForm;