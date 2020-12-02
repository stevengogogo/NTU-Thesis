import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './videos.module.css';

function Videos() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} Videos`}
      description="A collection of Benthos videos"
    >
      <header className="hero">
        <div className="container text--center">
          <h1>教學影片</h1>
          <div className="hero--subtitle">
            These are places where you can ask questions and find your soul mate
            (no promises).
          </div>
        </div>
      </header>
      <main>
        <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PL9awiqWAOEaLQ875dCPk0nz7gKv79lTLH"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}

export default Videos;
