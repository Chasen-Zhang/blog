import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import meImg from '@site/static/img/about/aboutme.jpeg';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`about me ${siteConfig.title}`}
      description="ABOUT ME">
      <main className={clsx('global-container-width', styles.about)}>
        <div className={styles. intro}>
          <div>
            <img className={styles.me} src={meImg}/>
            <p className={styles.picDe} style={{textAlign: 'center'}}>中朝边境 丹东鸭绿江大桥拍照留念——<span style={{color: "orange"}}>2020.12.14</span> </p>
          </div>
          <div className={styles.detail}>
            <h2 style={{textAlign: 'center'}}>关于森泉</h2>
            <p>大家好! 我叫森泉，网名: 三木森森の，洋气名：Chasen，即向前走的含义。一个技术不好却满怀热忱的Nobody，我在此建立个人博客，偶尔记录一些笔记或者感悟。csdn广告太多，我不想打开这个网站了！之前的csdn博客站点：<a href="https://blog.csdn.net/ChasenZh">https://blog.csdn.net/ChasenZh</a>就作为一个backup吧，上面的文章是入行以来记录的一些笔记。有些是原创的，有些是搬运的。之后就在这个站点记录吧。这个网站使用的模板是<a href='https://docusaurus.io/'>docusaurus</a></p>
            <p>
            我觉得自己很幸运的生活在这个时代，万物互联的前夜，人工智能的前夜，宇宙探索的前夜。当然最近很火的“元宇宙”前夜（某些运用场景似乎让人逃离现实）。但是我们对未来还是要抱有乐观：人类的文明会往可持续的方向发展。这个时代知识很容易获取，但是对于自己还是要去探索。一步一步完善自己的人生。减少自己产生的人生赤字。
            </p>
            <p>面对问题，问题才会解决。</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
