import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import styled from "styled-components"; // 💅 yay!

import Layout from '../components/layout';

const CustomBox = styled.div`
  border: 1px solid rgb(0, 143, 104);
  padding: 20px;

  h3 {
    color: rgb(109, 182, 91);
    margin: 0 0 10px;
    padding: 0;
  }
`

const StyledLink = styled(Link)`
  color: blue;
`

class SCDemoPage extends React.Component {
  render() {
    const siteData = this.props.data.site.siteMetadata;
    const siteTitle = siteData.title;
    const siteDescription = siteData.description;

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ 
            name: 'description', 
            content: siteDescription 
          }]}
          title={siteTitle}
        />

        <section>
          <h2>Styled Components Demo</h2>

          <CustomBox>
            <h3>This is a demonstration of Styled Components!</h3>
            <p>The end result is a simple display, but the code implementing these features is not so simple to a newbie like me.</p>
            <StyledLink to="/">Back to homepage</StyledLink>
          </CustomBox>

        </section>
      </Layout>
    )
  }
};

export default SCDemoPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
