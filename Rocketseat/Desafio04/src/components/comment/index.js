import React from 'react';

import { Comment, CommentContent, CommentActions } from './styles';

import ProfilePicture from '../../../public/assets/foto.jpg';

export default function comment() {
  return (
    <Comment>
      <CommentContent>
        <img src={ProfilePicture} alt="Walter Jaworski" />
        <span>
          <p><a href="#">Walter Jaworski</a> A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)</p>
        </span>
      </CommentContent>
      <CommentActions>
        <li>
          <a href="#">Curtir</a>
        </li>
        <li>
          <a href="#">Responder</a>
        </li>
        <li>
          <span>2 min</span>
        </li>
      </CommentActions>
    </Comment>
  );
}
