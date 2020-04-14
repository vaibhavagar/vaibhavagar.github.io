import React from "react";
import Masthead from "../masthead/masthead";
// import mastheadImage from "../../images/two-brown-pencils-907607.jpg";

class Seo extends React.Component {
  render() {
    return (
      <div className="cp-section__seo">
        <Masthead />
        <div className="cp-section__inner">
          <h1>SEO</h1>
          <p>
            Get in touch if you're looking to get SEO done for your site, also
            take a look at the packages below:
          </p>
          <h2>SEO Optimization (On page)</h2>
          <ul>
            <li>Site Audit</li>
            <li>
              Research on the relevance of the main pages of the website on
              search queries
            </li>
            <li>
              Generation of meta tags up to 100% relevance of the page content
            </li>
            <li>Examination of the uniqueness of content</li>
            <li>Recommendations on pages content</li>
            <li>Drawing up a semantic core for the site</li>
            <li>Registration in catalogs</li>
            <li>
              Submission of your website to search engines (Google, Bing,
              Yandex). Monitoring site positions
            </li>
            <li>Progress Report</li>
          </ul>

          <h2>Website Promotion (Off page)</h2>
          <ul>
            <li>
              Adding new web pages constructed and filled out with provided
              content
            </li>
            <li>Clean layout code</li>
            <li>
              Generation of meta tags up to 100% relevance of the page content
            </li>
            <li>
              Optimization of new and old pages up to 100% relevance (up to
              20pcs / m)
            </li>
            <li>Selection of semantic core for a website</li>
            <li>
              Placement on 2 thousand automatic boards and top 100 boards(manual
              placement)
            </li>
            <li>Registration in catalogs</li>
            <li>Submission of your website to search engines</li>
            <li>Website optimization for search engines</li>
            <li>
              Writing of four articles and their placement on the site and
              article directories
            </li>
            <li>Site positions monitoring</li>
            <li>Progress Report</li>
          </ul>
          <p>* Get in touch to get a quote today!</p>
        </div>
      </div>
    );
  }
}

export default Seo;
