/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import Image from './image';

const Layout = ({ children }) => (
  <div style={{ maxWidth: 960, margin: 'auto', paddingTop: 50 }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer style={{ marginTop: 50, display: 'flex', alignItems: 'center' }}>
        <div style={{ padding: '0px 8px 25px 0px' }}>© {new Date().getFullYear()}, built by</div>
        <div style={{ width: 20, height: 'auto', marginBottom: '1.45rem' }}>
          <Image />
        </div>
      </footer>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
