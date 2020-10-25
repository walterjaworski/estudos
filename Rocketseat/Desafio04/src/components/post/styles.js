import styled from 'styled-components';

export const Post = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  margin-top: 20px;
  padding: 20px;
  width: 100%;
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;

export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;

  a {
    color: #385898;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 5px;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: #9A9A9A;
    font-size: 11px;
  }

  svg {
    margin-left: 5px;
  }
`;

export const PostContent = styled.main`
  margin: 10px 0;

  p {
    color: #3E3E3E;
    font-size: 14px;
    line-height: 1.38;
  }
`;

export const PostNumbers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 0;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #606770;

    ul {
      list-style-type: none;
      margin-right: 10px;
      padding: 0;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        height: 24px;
        padding: 6px;
        width: 24px;
      }

      .like {
        background: #4A90E2;
        svg {
          fill: #FFF;
        }
      }
    }
  }
`;

export const PostActions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border-top: 1px solid #EEE;
  border-bottom: 1px solid #EEE;
  list-style-type: none;
  padding: 4px 0;

  a {
    display: flex;
    flex-direction: row;
    flex: 1 0;
    justify-content: center;
    align-items: center;

    color: #606770;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 0;
    text-decoration: none;

    &:hover {
      background: #EEE;
    }

    svg {
      margin-right: 10px;
      fill: #606770;
    }
  }
`;