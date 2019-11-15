import React from 'react';
import { FaGlobeAmericas, FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa';
import Comment from '../comment/index';

import { Post, PostHeader, PostData, PostContent, PostNumbers, PostActions } from './styles';

import ProfilePicture from '../../../public/assets/foto.jpg';

export default function post() {
  return (
    <Post>
      <PostHeader>
        <img src={ProfilePicture} alt="Walter Jaworski" />
        <PostData>
          <a href="#">Walter Jaworski</a>
          <p>10 min - <FaGlobeAmericas /></p>
        </PostData>
      </PostHeader>
      <PostContent>
        <p>Que orgulho do meu furacão, que orgulho de ter o Thiago Nunes como técnico, sem palavras pra emoção e pro fortalecimento do Athlético nos últimos anos. Sensacional!</p>
        <PostNumbers>
          <span>
            <ul>
              <li className="like">
                <FaThumbsUp />
              </li>
            </ul>
            Priscila Jaworski, Alice Jaworski e outras 10 pessoas
          </span>
          <span>2 comentários</span>
        </PostNumbers>
      </PostContent>
      <PostActions>
        <a href="" title="Curtir">
          <FaThumbsUp /> Curtir
        </a>
        <a href="" title="Comentar">
          <FaCommentAlt /> Comentar
        </a>
        <a href="" title="Compartilhar">
          <FaShare /> Compartilhar
        </a>
      </PostActions>
      <Comment />
      <Comment />
    </Post>
  );
}
