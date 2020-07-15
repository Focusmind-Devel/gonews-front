import React, { useEffect } from 'react';

const Twitter = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName('twitter-embed')[0].appendChild(script);
  }, []);

  return (
    <section className='twitterContainer'>
      <div className='twitter-embed'>
        <a
          className='twitter-timeline'
          data-lang='es'
          data-height='500'
          data-theme='dark'
          href='https://twitter.com/CNNEE?ref_src=twsrc%5Etfw'
        >
          Tweets by CNNEE
        </a>
      </div>
    </section>
  );
};

export default Twitter;
