import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Header from "@/components/project-details/Header";
import Challenge from "@/components/project-details/Challenge";
import Works from "@/components/project-details/Works";
import Solution from "@/components/project-details/Solution";
import Wroks2 from "@/components/project-details/Wroks2";
import Next from "@/components/project-details/Next";
import { getPortfolioBySlug, getPortfolioSlugs } from "@/data/portfoli";

export function generateStaticParams() {
  return getPortfolioSlugs();
}

export function generateMetadata({ params }) {
  const project = getPortfolioBySlug(params.slug);

  if (!project) {
    return {
      title: "Portfolio Not Found | emperor",
      description: "The requested portfolio project could not be found.",
    };
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    keywords: project.seoKeywords,
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      images: [project.heroImage || project.img],
    },
    icons: {
      icon: "/assets/imgs/favicon.ico",
      shortcut: "/assets/imgs/favicon.ico",
      other: generateStylesheetObject([
        "/assets/css/plugins.css",
        "/assets/css/style.css",
        "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
      ]),
    },
  };
}

export default function ProjectDetailsPage({ params }) {
  const project = getPortfolioBySlug(params.slug);

  if (!project) {
    return (
      <body>
        <div className="container section-padding">
          <h1>Project not found</h1>
        </div>
      </body>
    );
  }

  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header project={project} />
            <Challenge project={project} />
            <Works project={project} />
            <Solution project={project} />
            <Wroks2 project={project} />
            <Next project={project} />
          </main>
          <Footer />
        </div>
      </div>
      {/* <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <section className="section-padding pb-0">
              <div className="container">
                <div className="row align-items-end mb-60">
                  <div className="col-lg-8">
                    <span className="sub-title main-color mb-10 d-inline-block">
                      {project.category}
                    </span>
                    <h1 className="fw-700 fz-60 line-height-1">
                      {project.title}
                    </h1>
                  </div>
                  <div className="col-lg-4 text-lg-end mt-30 mt-lg-0">
                    <a
                      href="/portfolio-gallery"
                      className="butn butn-sm butn-bord radius-30"
                    >
                      <span>Back to Portfolio</span>
                    </a>
                  </div>
                </div>

                <div className="row g-4 align-items-stretch">
                  <div className="col-lg-8">
                    <div className="img radius-15 overflow-hidden h-100">
                      <img
                        src={project.heroImage || project.img}
                        alt={project.title}
                        className="w-100 h-100"
                        style={{ objectFit: "cover", minHeight: "420px" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sub-bg radius-15 p-4 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <p className="mb-30">{project.description}</p>
                        <div className="mb-20">
                          <h6 className="sub-title mb-5">Client</h6>
                          <p className="mb-0">{project.client}</p>
                        </div>
                        <div className="mb-20">
                          <h6 className="sub-title mb-5">Started</h6>
                          <p className="mb-0">{project.startDate}</p>
                        </div>
                        <div className="mb-20">
                          <h6 className="sub-title mb-5">Designer</h6>
                          <p className="mb-0">{project.designer}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap gap-2 mt-30">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="row g-5">
                      <div className="col-lg-6">
                        <h4 className="mb-20">The Challenge</h4>
                        <p>{project.challenge}</p>
                      </div>
                      <div className="col-lg-6">
                        <h4 className="mb-20">The Solution</h4>
                        <p>{project.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding pt-0">
              <div className="container">
                <div className="row g-4">
                  {(project.gallery || [project.img]).map((image, index) => (
                    <div className="col-md-6" key={`${image}-${index}`}>
                      <div className="img radius-15 overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.title} ${index + 1}`}
                          className="w-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="next-project sub-bg section-padding pt-0">
              <div className="container-fluid rest">
                <div className="row g-0">
                  <div className="col-md-6 rest">
                    <div
                      className="text-left box bg-img"
                      data-background={project.heroImage || project.img}
                    >
                      <div className="cont d-flex align-items-center">
                        <div>
                          <span className="mr-30 fz-30 ti-arrow-left"></span>
                        </div>
                        <div>
                          <h6 className="sub-title fz-16 mb-5">Prev Project</h6>
                          <a
                            href={`/project-details/${project.prevSlug}`}
                            className="fz-32 fw-600 stroke"
                          >
                            {project.prevTitle || "Previous Project"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 rest">
                    <div
                      className="text-right d-flex box bg-img"
                      data-background={project.gallery?.[0] || project.img}
                    >
                      <div className="ml-auto">
                        <div className="cont d-flex align-items-center">
                          <div>
                            <h6 className="sub-title fz-16 mb-5">
                              Next Project
                            </h6>
                            <a
                              href={`/project-details/${project.nextSlug}`}
                              className="fz-32 fw-600 stroke"
                            >
                              {project.nextTitle || "Next Project"}
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
            </section>
          </main>
          <Footer />
        </div>
      </div> */}

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
