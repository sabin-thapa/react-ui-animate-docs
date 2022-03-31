import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        React UI Animate is designed with easy to use APIs for implementing
        gestures and animations.
      </>
    ),
  },
  {
    title: 'Animate anything',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>React UI Animate helps you to animate anything beautifully.</>
    ),
  },
  {
    title: 'Interact with anything',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        React UI Animate comes with variaties of APIs to implement very complex
        gestures in easy way.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
