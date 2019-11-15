import styled from 'styled-components';

export const Container = styled.div`
  background: #4A90E2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 45px;
`;

export const ProfileLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: #FFF;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;

  svg {
    fill: #FFF;
    margin-left: 10px;
  }
`;