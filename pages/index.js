import { Component } from 'react'
import Page from '../components/page'


class Page extends Component {
  finalDate = Date.parse("16.07.2017 17:00:00")

  state = {
    loaded: true
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', (event) => {
      this.setState({ loaded: true })
    })
  }

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded')
  }

  render() {
    return (
      <Page>
        
      </Page>
    )
  }
}

export default Page