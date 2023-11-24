import styled from 'styled-components';

export const EducationalInfoFormContainer = styled.div`
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

    .row {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin-right: 20px;
        margin-left: 20px;
    }

    .rowtwo {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-evenly;
        margin-right: 20px;
        margin-left: 20px;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
`;