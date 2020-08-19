import React, { useState } from 'react';
import './HeadlineForm.scss';
import { Label } from 'reactstrap';
import TermsAndConditions from './TermsAndConditions';

function HeadlineForm(props) {
    const {formSubmit} = props;
    const [checkbox,setCheckbox] = useState(false);
    
    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    }

    return (
        <div className="intro__sign-up__headline-form">
            <Label>Terms and Conditions</Label>
            <div className="intro__sign-up__headline-form__tnc">
                <TermsAndConditions></TermsAndConditions>
                <div className="intro__sign-up__headline-form__tnc__checkbox">
                    <div className="intro__sign-up__headline-form__tnc__checkbox__thebox" onClick={handleCheckbox}>
                        {checkbox && <div className="intro__sign-up__headline-form__tnc__checkbox__thebox__dot"></div>}
                    </div>
                    <i>I've read the Terms and Conditions.</i>
                </div>
            </div>
            {checkbox && <button onClick={formSubmit} type="button">Sign me up</button>}
        </div>
    );
}

export default HeadlineForm;