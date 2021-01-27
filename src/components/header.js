import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"
  
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }
  
    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src="https://i.ibb.co/Yczv2dz/imageedit-1-8021648129.png" width="50" alt='' /></Link>
          <Link to="/#projects">My projects</Link>
          <Link to="/#aboutMe">About Me</Link>
          <Link to="/#contact">Contact Me</Link>
          <StripeCheckout
            amount={5000}
            token={this.handlePurchase}
            stripeKey={process.env.GATSBY_STRIPE_PUBLISHABLE}
          >
            <button>Buy</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
