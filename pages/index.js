import { Component } from 'react'
import Page from '../components/page'
import TimerLayout from '../components/timer-layout'
import TimerCard from '../components/timer-card'


export default class extends Component {
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
        <TimerLayout>
          <TimerCard area="months" value="M" />
          <TimerCard area="days" value="M" />
          <TimerCard area="hours" value="M" />
          <TimerCard area="minutes" value="M" />
          <TimerCard area="seconds" value="M" />
        </TimerLayout>
      </Page>
    )
  }
}
