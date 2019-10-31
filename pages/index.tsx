import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import questions from '../questions.json';
import Poll from '../components/Poll';

const IndexPage = styled.div``;

export default () => (
  <IndexPage>
    <GlobalStyles />
    <h1>Fullstack.io React Poll Challenge</h1>
    <br/>
    <Poll qandas={questions} />
  </IndexPage>
);

/**
 * TIPS:
 *
 * You can load the check image like this:
 *
 *    <img src={require('../static/check-circle.svg')} />
 *
 */
