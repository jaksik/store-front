import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// Welcome to Storefont
// This is going to be a dynamic e-commerce store template
// A few features include...
// Stripe Checkout
// Stripe Rendered Products
// Blog and CMS
// Google Analytics
// Mailchimp Newsletter Sevice

// The over-all idea is for this to be my original e-commerce store template
// This is my quickest path to setting up an e-commerce store for clients
// Everything must be dynamicaly imported and rendered
// Make it to emulate JSP Glassworks

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
