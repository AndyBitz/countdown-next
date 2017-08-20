import { Component } from 'react'
import Page from '../components/page'
import TimerLayout from '../components/timer-layout'
import TimerCard from '../components/timer-card'

const parseMs = (ms) => {
  let s = Math.floor(ms/1000)
  let m = Math.floor(s/60)
  let h = Math.floor(m/60)
  let d = Math.floor(h/24)
  let M = daysInMonth(d)

  s = s - m*60
  m = m - h*60
  h = h - d*24
  d = M.rest
  M = M.months

  return { M, d, h, m, s }
}

const daysInMonth = (days) => {
  let months = 0
  const now = new Date()
  const len = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  if (now.getFullYear%4 === 0)
    len[1] = 29

  let cur = now.getMonth()
  let rest = days
  let daysLeft = rest

  while (true) {
    // days to subtract
    let sub = len[cur]
    daysLeft = daysLeft - sub

    // cannot subtract the whole month, because too less days are left
    if (daysLeft < 0)
      break

    rest = daysLeft
    months++
  }

  return { months, rest }
}

export default class extends Component {
  update = this.update.bind(this)
  finalDate = Date.parse("07.16.2018 17:00:00")

  state = {
    loaded: true,
     M: 0, d: 0, h: 0, m: 0, s: 0
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', (event) => {
      // TODO - won't fire sometimes
     this.setState({ loaded: true })
    })

    this.intv = setInterval(this.update, 1000)
  }

  update() {
    const elapsed = this.finalDate - Date.now()

    const time = parseMs(elapsed)
    this.setState({ ...time })
  }

  componentWillUnmount() {
    clearInterval(this.intv)
    document.removeEventListener('DOMContentLoaded')
  }

  render() {
    return (
      <Page>
        <TimerLayout>
          <TimerCard area="months" value={this.state.M} />
          <TimerCard area="days" value={this.state.d} />
          <TimerCard area="hours" value={this.state.h} />
          <TimerCard area="minutes" value={this.state.m} />
          <TimerCard area="seconds" value={this.state.s} />
        </TimerLayout>
      </Page>
    )
  }
}
