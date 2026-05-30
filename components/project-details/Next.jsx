'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Next({ project }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  const prevHref = project?.prevSlug ? `/project-details/${project.prevSlug}` : '/project-details/cutter-mobile-app';
  const nextHref = project?.nextSlug ? `/project-details/${project.nextSlug}` : '/project-details/ai-dashboard-ui';
  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-6 rest">
            <div
              className="text-left box bg-img"
              data-background={project?.heroImage || '/assets/imgs/works/3/1.jpg'}
            >
              <div className="cont d-flex align-items-center">
                <div>
                  <span className="mr-30 fz-30 ti-arrow-left"></span>
                </div>
                <div>
                  <h6 className="sub-title fz-16 mb-5">Prev Project</h6>
                  <a href={prevHref} className="fz-40 fw-600 stroke">
                    {project?.prevTitle || 'OPT Media Agency'}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rest">
            <div
              className="text-right d-flex box bg-img"
              data-background={project?.gallery?.[0] || '/assets/imgs/works/3/2.jpg'}
            >
              <div className="ml-auto">
                <div className="cont d-flex align-items-center">
                  <div>
                    <h6 className="sub-title fz-16 mb-5">Next Project</h6>
                    <a href={nextHref} className="fz-40 fw-600 stroke">
                      {project?.nextTitle || 'TH3 Web Design'}
                    </a>
                  </div>
                  <div>
                    <span className="ml-30 fz-30 ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#0" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">all Projects</span>
        </a>
      </div>
    </section>
  );
}

export default Next;
