import React from 'react';

import styles from './contact.module.css';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Contact() {
  const context = useDocusaurusContext();

  return (
    <Layout
      title="聯絡作者"
      description="Where to ask questions and find your soul mate"
    >
      <header className="hero">
        <div className="container text--center">
          <h1>聯絡作者</h1>
          <div className="hero--subtitle">
            These are places you can contact me.
          </div>
          <img className={styles.headerImg} src="./img/contact_us.svg" />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row margin-vert--lg">
            <div className="col text--center padding-vert--md">
              <div class="card">
                <div class="card__header">
                  <i className={classnames(styles.icon, styles.twitter)}></i>
                </div>
                <div class="card__body">
                  <p>Twitter</p>
                </div>
                <div class="card__footer">
                  <Link
                    to="https://twitter.com/hsinspeng"
                    class="button button--outline button--primary button--block"
                  >
                    Follow &#64;hsinspeng
                  </Link>
                </div>
              </div>
            </div>

            <div className="col text--center padding-vert--md">
              <div class="card">
                <div class="card__header">
                  <i className={classnames(styles.icon, styles.email)}></i>
                </div>
                <div class="card__body">
                  <p>Say hello via email</p>
                </div>
                <div class="card__footer">
                  <Link
                    to="mailto:hsinspeng@gmail.com"
                    class="button button--outline button--primary button--block"
                  >
                    hsinspeng&#64;gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
