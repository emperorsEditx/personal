import React from 'react';

function Wroks2({ project }) {
  return (
    <div className="section-padding pt-0">
      <div className="container">
        <div className="img">
          <img src={project?.heroImage || '/assets/imgs/works/3/6.jpg'} alt={project?.title || ''} />
        </div>
      </div>
    </div>
  );
}

export default Wroks2;
