import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;

 &:hover {
    background-color: #0056b3;
 }
`;


export default CardOng;