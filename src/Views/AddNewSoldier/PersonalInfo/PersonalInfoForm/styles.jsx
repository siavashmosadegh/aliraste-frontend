import styled from 'styled-components';

export const PersonalInfoFormContainer = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    width: 100%;

    input {
        width: 200px;
        height: 40px;
        text-align: right;
        padding-right: 15px;
        font-size: 20px;
        font-weight: bold;
    }

    .row {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin-right: 20px;
        margin-left: 20px;
        margin-bottom: 25px;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;