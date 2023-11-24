import React from 'react';
import { Wrapper } from './styles';
import AddCourseForm from './AddCourseForm';

const AddCourseSection = () => {
    return (
        <Wrapper>
            <h1>اطلاعات دوره</h1>

            <AddCourseForm />
        </Wrapper>
    );
}

export default AddCourseSection;