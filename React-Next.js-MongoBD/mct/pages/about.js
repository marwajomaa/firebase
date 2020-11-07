import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout  from '../components/Layout'

const About = () => (
 <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
    <div>
        <h1>Macro Compliance Tracker</h1>
        <p>
        This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
        </p>
   </div>
   </Layout>
 </div>
)

export default About;