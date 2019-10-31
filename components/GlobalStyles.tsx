import { createGlobalStyle } from 'styled-components';

/**
 * This file contains some starter global styles to make it easier for you to
 * complete the challenge.
 *
 * I recommend that you do not add styles here and, instead, add styles via
 * their respective styled-components.
 */
export default createGlobalStyle`

  /* The Inter UI font face via: https://rsms.me/inter/ */
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  body {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
    padding: 1em;
    color: #030C30;
  }

  h1{
    text-align: center;
  }

  ul,h2{
    max-width:350px;
    margin:20px auto;
  }

  ul{
    margin-bottom:50px;
    padding:0;
    list-style:none;
  }

  li.option{
    cursor:pointer;
    border:1px solid #e2e2e2;
    padding:10px 15px;
    border-radius:5px;
    margin:10px 0px;
  }

  .option span.votes{
    float:right;
  }

  li.selected{
    box-shadow: 0px 0px 0px 1px #ff8100;
    border-color: #ff8100;
  }

  li.max-voted{
    font-weight:bolder;
  }

  .text-light{
    color: rgb(156, 156, 156);
  }
`;
