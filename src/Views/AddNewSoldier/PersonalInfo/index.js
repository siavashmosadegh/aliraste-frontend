import React from 'react';
import { Wrapper } from './styles';
import PersonalInfoForm from './PersonalInfoForm';

const PersonalInfo = () => {
    return (
        <Wrapper>
            <h1>اطلاعات فردی</h1>

            <PersonalInfoForm />
        </Wrapper>
    );
}

export default PersonalInfo;