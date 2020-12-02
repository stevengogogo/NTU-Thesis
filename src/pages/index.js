import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const features = [
  {
    title: '規範格式',
    imageUrl: './img/features/graduation.svg',
    description: (
      <>
        <p>這個好難想要打什麼幹話ㄛ</p>
      </>
    ),
  },
  {
    title: '數學公式',
    imageUrl: './img/features/mathematics.svg',
    description: (
      <>
        <p>反正就是可以讓你打出很多漂漂的方程式ㄛ！看起來就很專業ㄋ</p>
      </>
    ),
  },
  {
    title: '文獻管理',
    imageUrl: './img/features/filing_system.svg',
    description: (
      <>
        <p>
          比起你每次看完文獻都丟在資料夾裡面，也沒有整理檔名，你需要文獻管理小精靈ㄛ
        </p>
      </>
    ),
  },
  {
    title: '自由開源',
    imageUrl: './img/features/open_source.svg',
    description: (
      <>
        <p>換句話說就是反正也賺不了錢，只好開放原始碼給大家看ㄌ</p>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={classnames('padding-vert--md', styles.featureImage)}
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Templates for your master thesis or doctoral dissertations at National Taiwan University.      "
      keywords={['NTU', 'Nation Taiwan University', 'thesis', 'latex']}
    >
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--7 col--offset-1')}>
              <p align="right">
                <div>
                  <a
                    href="https://github.com/Hsins/NTU-Thesis-CI/generate/"
                    target="_blank"
                  >
                    <img src="./img/badge-github-actions.svg" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.overleaf.com/latex/templates/national-taiwan-university-thesis-template/hvfybyfxgztt/"
                    target="_blank"
                  >
                    <img src="./img/badge-overleaf.svg" />
                  </a>
                </div>
              </p>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <Link
                className={classnames(
                  'button button--outline button--danger button--lg',
                  styles.heroBtn
                )}
                to={useBaseUrl('docs')}
              >
                閱讀文件
              </Link>
              <Link
                className={classnames(
                  'button button--outline button--primary button--lg',
                  styles.heroBtn
                )}
                to={useBaseUrl('contact')}
              >
                聯絡作者
              </Link>
            </div>
            <div className={classnames('col col--4')}>
              <img className={styles.heroImg} src="img/seal.svg" />
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container margin-vert--md">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.loveSection}>
          <div className="container">
            <div className="row">
              <div className={classnames('col col--6')}>
                <h3>此模板在以下善心大德的贊助或支持之下進行開發：</h3>
                <a
                  href="https://github.com/Hsins/"
                  className={styles.sponsorLink}
                  target="_blank"
                >
                  <img
                    className={styles.meltwaterImg}
                    src="./img/sponsors/Hsins.jpg"
                  />
                </a>
              </div>
              <div className={classnames('col col--6', styles.loveSectionPlea)}>
                <div>
                  <a href="https://github.com/sponsors/Hsins" target="_blank">
                    <img
                      className={styles.loveImg}
                      src="./img/appreciation.svg"
                      alt="Appreciation"
                    />
                  </a>
                </div>
                <Link
                  className={classnames(
                    'button button--outline button--warning'
                  )}
                  to="https://github.com/sponsors/Hsins"
                >
                  加入贊助
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
