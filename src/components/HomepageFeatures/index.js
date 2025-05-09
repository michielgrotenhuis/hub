import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Define the categories for the Partner Hub
const CategoryList = [
  {
    title: 'Marketing',
    subtitle: 'Resources to promote our products',
    link: 'docs/category/marketing',
    icon: '📣', // You can replace these with actual SVG imports similar to your original code
  },
  {
    title: 'Sales Material',
    subtitle: 'Tools to help close deals',
    link: 'docs/category/sales-material',
    icon: '💼',
  },
  {
    title: 'Finance',
    subtitle: 'Pricing and financial documents',
    link: 'docs/category/finance',
    icon: '💰',
  },
  {
    title: 'Support',
    subtitle: 'Help resources for partners',
    link: 'docs/category/support',
    icon: '🛟',
  },
  {
    title: 'Technical',
    subtitle: 'Technical documentation and guides',
    link: '/docs/category/technical',
    icon: '⚙️',
  },
  {
    title: 'Training',
    subtitle: 'Educational materials and courses',
    link: '/docs/category/training',
    icon: '🎓',
  },
  {
    title: 'Integrations',
    subtitle: 'Connect with other platforms',
    link: 'docs/category/integrations',
    icon: '🔄',
  },
  {
    title: 'Legal',
    subtitle: 'Contracts and compliance info',
    link: '/docs/category/legal',
    icon: '⚖️',
  },
  {
    title: 'Downloads',
    subtitle: 'Files and resources to download',
    link: '/docs/category/downloads',
    icon: '📥',
  },
];

// Component for each individual category card
function CategoryCard({ title, subtitle, link, icon }) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.categoryCardLink}>
        <div className={styles.categoryCard}>
          <div className={styles.categoryIconContainer}>
            <div className={styles.categoryIcon}>{icon}</div>
          </div>
          <div className={styles.categoryContent}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <p className={styles.categorySubtitle}>{subtitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Main component for the Partner Hub homepage
export default function PartnerHubHomepage() {
  return (
    <section className={styles.categories}>
      <div className="container">
        <div className="row text--center">
          <div className="col">
            <h1>Partner Hub Knowledge Base</h1>
            <p className={styles.subtitle}>All the resources you need to succeed as our partner</p>
          </div>
        </div>
        <div className="row">
          {CategoryList.map((props, idx) => (
            <CategoryCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
