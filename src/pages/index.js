import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Brodey Newman</h1>
    <p>
      I&apos;m a Senior Software Engineer / Engineering Manager and business owner, <br />
      currently writing code at
      <a
        style={{
          color: '#621FE8',
          marginLeft: 5,
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
        rel="noopener noreferrer"
        target="_blank"
        href="https://paperspace.com/"
      >
        Paperspace
      </a>.
    </p>
    <p>
      I specialize in building distributed systems within the cloud, <br />
      as well as performant and scalable user interfaces for the web. <br />
    </p>
    <p>
      Some of my favorite tools are:
    </p>
    <ul>
      <li style={{ margin: 0 }}>React</li>
      <li style={{ margin: 0 }}>AWS</li>
      <li style={{ margin: 0 }}>Elixir</li>
      <li style={{ margin: 0 }}>Node</li>
      <li style={{ margin: 0 }}>Golang</li>
      <li style={{ margin: 0 }}>Terraform / CloudFormation</li>
    </ul>
    <h3>About me</h3>
    <p>
      I currently live and work in Charlotte, North Carolina. <br />
      I'm a wanna-be environmentalist, with goals to build <br /> software that helps better our climate future. <br />
      When I&apos;m not writing code (which is rare), <br />
      you may find me running through the city,<br />
      mountain biking, reading at a coffee shop, or somewhere traveling.
    </p>
    <p>
      <span>I am the technical founder of the climate DAO</span>
      <a
        style={{
          color: '#621FE8',
          marginLeft: 5,
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
        href="https://drawdao.io"
      >
        DrawDAO
      </a>
      <br />
      <span>
        which has the mission to drive awareness to, catalyze, and fund the creation of hundreds of new carbon drawdown projects. <br />
        If you're passionate about our climate, please feel free to reach out about how you can help.
      </span>
    </p>
    <h3>Get in touch</h3>
    <a
      style={{ color: '#621FE8', textDecoration: 'none' }}
      href="mailto:brodeynewman@gmail.com"
    >
      brodeynewman@gmail.com
    </a>
    <a
      style={{ color: '#621FE8', textDecoration: 'none' }}
      href="mailto:hello@drawdao.io"
    >
      hello@drawdao.io
    </a>
    <a
      style={{
        color: '#621FE8',
        textDecoration: 'none',
        display: 'block',
        marginTop: 5,
      }}
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/brodeynewman"
    >
      GitHub
    </a>
  </Layout>
);

export default IndexPage;
