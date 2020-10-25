import styled from 'styled-components';

export const Comment = styled.article`
  margin-top: 20px;
`;

export const CommentContent = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  img {
    border-radius: 50%;
    width: 30px;
    margin-right: 10px;
  }

  span {
    background-color: #EEE;
    border-radius: 8px;
    margin-bottom: 5px;
    padding: 12px;

    p {
      font-size: 13px;
      line-height: 1.38;
    }

    a {
      color: #385898;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const CommentActions = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  list-style-type: none;
  padding: 0;

  li {
    font-size: 12px;
    margin-left: 10px;

    &:first-child {
      margin-left: 40px;
    }
  }

  a {
    color: #385898;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;