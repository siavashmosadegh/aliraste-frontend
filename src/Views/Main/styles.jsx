import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-decoration: none;
    }
`;

export const Button = styled.button`
    width: 250px;
    height: 100px;
    background-color: red;
    color: white;
    margin-top: 20px;
    border: none;
    font-size: 25px;
    font-weight: bold;
    border-radius: 10px;
`;