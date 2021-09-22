import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 90px;
`;

export const Label = styled.label`
color: ${({ theme }) => theme.color.midLight};
font-size: ${({ theme }) => theme.font.size.medium};
margin-right: 10px;
line-height: 36px;
`;

export const WrapperForm = styled.div`
`;

export const Form = styled.form`
display: flex;`;

export const Title = styled.h1`
font-family: ${({ theme }) => theme.font.family.headline};
font-size: ${({ theme }) => theme.font.size.extraLarge};
color: ${({ theme }) => theme.color.dark};
margin-top: 27px;
margin-bottom: 22px;
font-weight: 400`;

export const Input = styled.input`
width: 336px;
height: 34px;
padding: 0px 17px;
font-size: ${({ theme }) => theme.font.size.small};
border-radius: 2px;
border: 1px solid ${({ theme }) => theme.color.midLight};
background-color: ${({ theme }) => theme.color.light};
margin-right: 10px;
margin-bottom: 0;
margin-left:0;
margin-top: 0;
line-height: 1.15;
`;

export const Button = styled.button`
padding: 14px 16px;
border-radius: 4px;
font-size: ${({ theme }) => theme.font.size.small};
font-weight: 500;
line-height: 0.64;
background-color: #FDB755;
color: ${({ theme }) => theme.color.light};
text-transform: uppercase;
border: none;
outline: none;
`;