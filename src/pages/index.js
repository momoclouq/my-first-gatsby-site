// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        src="../images/meo-anh-1.jpg" 
        alt="meo anh long ngan" 
      />
    </Layout>
  );
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home page"/>;

// Step 3: Export your component
export default IndexPage;