import { Component } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Page from '../components/page'
import TimerLayout from '../components/timer-layout'
import TimerCard from '../components/timer-card'
import Background from '../components/fade-bg'

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

const toTwo = (nr) => {
  if (nr < 10 && nr > -10)
    return `0${nr}`
  else
    return nr
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
    const top = `${this.state.M}M ${this.state.d}Days`
    
    const bH = toTwo(this.state.h)
    const bM = toTwo(this.state.m)
    const bS = toTwo(this.state.s)

    const bottom = `${bH}:${bM}:${bS}`
    
    const isDesktop = typeof window !== 'undefined'
      && window.matchMedia("(min-width: 1200px)").matches

    return (
      <Page>
        <Background
          top={top}
          bottom={bottom} />
        <TimerLayout>
          <TimerCard
            area="months"
            value={toTwo(this.state.M)}
            bg="aquamarine"
            scale={1.1}
            size={isDesktop ? 10 : 3} />
          <TimerCard
            area="days"
            value={toTwo(this.state.d)}
            bg="cadetblue"
            scale={.9}
            size={2.7} />
          <TimerCard
            area="hours"
            value={toTwo(this.state.h)}
            bg="cornflowerblue"
            size={1.4} />
          <TimerCard
            area="minutes"
            value={toTwo(this.state.m)}
            bg="darkcyan" />
          <TimerCard
            area="seconds"
            value={toTwo(this.state.s)}
            rotate={-this.state.s*6}
            bg="tomato"
            scale={.8} />
        </TimerLayout>
      </Page>
    )
  }
}

const Timer = () => {

  return (
    
  )
}
