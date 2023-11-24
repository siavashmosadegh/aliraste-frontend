import React from 'react';
import { Wrapper } from './styles';
import EducationalInfoForm from './EducationalInfoForm';

const EducationalInfo = () => {
    return (
        <Wrapper>
            <h1>اطلاعات تحصیلی</h1>

            <EducationalInfoForm />
        </Wrapper>
    );
}

export default EducationalInfo;