import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './components/CommentBox'


ReactDom.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('container')
);
