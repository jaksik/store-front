import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Skus from "../components/Products/Skus"
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
    <h1>Welcome To Best Pens</h1>
    <h2>The place to buy the best pens</h2>
    <p>Check out our collection of awesome pens</p>
    
    <Skus /> 
  </Layout>
)

export default IndexPage
