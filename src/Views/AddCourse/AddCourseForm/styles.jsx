import styled from 'styled-components';

export const AddCourseFormContainer = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    width: 100%;

    input {
        width: 179px;
        height: 40px;
        text-align: right;
        padding-right: 15px;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        border: 1px solid gray;
    }

    .firstRow {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-start;
        // margin-right: 20px;
        // margin-left: 20px;
        // margin-bottom: 10px;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    margin-right: 20px;
    margin-left: 20px;
`;