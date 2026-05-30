import React from 'react';

function Works({ project }) {
  const gallery = project?.gallery || [
    '/assets/imgs/works/3/2.jpg',
    '/assets/imgs/works/3/3.jpg',
  ];
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb30">
              <img src={gallery[0]} alt={project?.title || ''} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src={gallery[1]} alt={project?.title || ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
