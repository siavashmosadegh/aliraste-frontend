import styled from 'styled-components';

export const PersonalInfoFormContainer = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    width: 100%;

    .field {
        width: 179px;
        height: 40px;
        text-align: right;
        padding-right: 15px;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
    }

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
        margin-bottom: 10px;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
`;

export const SubmitButton = styled.button`
    width: 200px;
    height: 40px;
    color: white;
    background-color: red;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 10px;
`;

// export const StyledField = styled.field`
//     width: 179px;
//     height: 40px;
//     text-align: right;
//     padding-right: 15px;
//     font-size: 20px;
//     font-weight: bold;
//     border-radius: 10px;
// `;