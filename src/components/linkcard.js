import React from 'react';

export default function LinkCard({url}) {
  return (
    <iframe 
      class="hatenablogcard" 
      style={{width:'100%',height:'155px',maxWidth:'680px'}}
      src={`https://hatenablog-parts.com/embed?url=${url}`}
      width="300" height="150" frameborder="0" scrolling="no">
    </iframe>
  );
}
