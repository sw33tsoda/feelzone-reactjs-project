import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

InputField.propTypes = {
    form:   PropTypes.object.isRequired,
    field:  PropTypes.object.isRequired,

    label:  PropTypes.string,
    placeholder:    PropTypes.string,
    className:  PropTypes.string,
    disabled:   PropTypes.bool,
    type:   PropTypes.string,
}

InputField.defaultProps = {
    label:  '',
    placeholder:    '',
    className:  '',
    disabled:   false,
    type:'text',
}


function InputField(props) {
    const {field,form,label,className,placeholder,disabled,type} = props;
    const {name} = field;

    const {errors,touched} = form;
    const hasError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label>{label} {hasError && <small>{errors[name]}</small>}</Label>}

            <Input
                name={name}
                id={name}
                {...field}
                className={className}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            ></Input>
        </FormGroup>
    );
}

export default InputField;