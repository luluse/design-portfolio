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
          <Link to="/"><img src="https://lh3.googleusercontent.com/W7P89bG8We5_sZt9NZB77spm6AGcBcevKEstB0U4vXOm0CP5k7fTgtQB6ETN8DZSKlBj87D_puqsy1BCxapiArALI6wvz1DlOMuOqTO4nxKQ4OQzMa4CuAsHBQjqGFnQqFGPgCKyx9VViZrJCITqOoS9fbIScoqKxRHP-C9S3zlQtWThNSBqXe9AbYEXiLdeATqsfATnJF-wNZqobbNJG77ynqe6tA0AdykGnnKY7q4_vRi2EqUcfSuQDAP4tu9l6GgplB02RuxbIqoQX-iMyEYJHas8Kh3MOTmRG6llrvcVAbtHR2RMOG7O9QF9Or7vCCBLS8zgO8AYVJPwSzqGbCGNqb-zINoPtxdwPnEx7zitNLuIQmhxsD_ADR-7yQ2T2ItK-Q5UDO5NLIwVlARJgYHEeylxEO5hxOul1oqYxdj4a6NnYH2b8vY5zzp6ToJa8XHAfctfi2vPk2lgS1eEsYA9SAT4VtFj3qqPx7eMa1nKImP9ikT-QD_QTuaIUBQ5dNuX7GMViXavvHjXNNdrhiRuUlo7BJzefje1e4HjghHutv7JNcq8oeXeAbFNNs1iQNocJtj1OqDzK7YdBEG8T4ZykVx2jlmlNzDjlvs4M36udfo-iLdkxWr8StaUEptourHNwH7VGmI3MfNTKHqftd9KQMPaBgEwkyxub2wCpBr88n5-Cxgo46JXOEz31caZq3b7kK2ujmNaL93FptKUadzyhg=s192-no?authuser=0" width="50" alt='' /></Link>
          <Link to="/#projects">My projects</Link>
          <Link to="/#aboutMe">About Me</Link>
          <Link to="/#contact">Contact Me</Link>
          {/* <StripeCheckout
            amount={5000}
            token={this.handlePurchase}
            stripeKey={process.env.GATSBY_STRIPE_PUBLISHABLE}
          >
            <button>Buy</button>
          </StripeCheckout> */}
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
