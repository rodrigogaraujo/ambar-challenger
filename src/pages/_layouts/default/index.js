import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

function DefaultLayout({ children }) {
  const { Content } = Layout;

  return (
    <Layout>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              padding: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
