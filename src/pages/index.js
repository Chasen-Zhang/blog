import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import Metero from '../components/Metero';
import Christmas from '../components/Christmas';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <div className={clsx('hero hero--primary', styles.heroBanner, styles.bannerItemHeight)}>
        <Metero></Metero>
        <Christmas></Christmas>
        <div className={clsx('container', styles.container)}>
          <h1 className={clsx('hero__title', styles.heroTitle)}><Texty>{siteConfig.title}</Texty></h1>
          <p className={clsx('hero__subtitle', styles.heroSubTitle)}>{siteConfig.tagline}</p>
          <p className={clsx('hero__subtitle', styles.heroSubTitle)}>来都来了，许个愿吧😁</p>
          <Link
            className={clsx("button button--secondary button--lg", styles.link)}
            to="/about">
              About Me
          </Link>
          <Link
            className={clsx("button button--secondary button--lg", styles.link)}
            to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="I love the world">
      <HomepageHeader />
    </Layout>
  );
}
