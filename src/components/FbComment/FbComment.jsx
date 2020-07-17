import React, { useEffect } from 'react';

const FbComment = ({ slug }) => {
  useEffect(() => {
    window.FB.XFBML.parse();
  });
  return (
    <div>
      <div
        className='fb-comments'
        data-href={`https://gonews-front.herokuapp.com/${slug}`}
        data-numposts='5'
        data-width='100%'
      ></div>
    </div>
  );
};

export default FbComment;
