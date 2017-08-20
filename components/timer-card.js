export default ({ area, value, rotate=0, scale=1, bg, style }) => {
  const customStyle = {
    gridArea: area,
    transform: `rotate(${rotate}deg) scale(${scale})`,
    backgroundColor: bg,
    ...style
  }

  return (
    <div style={customStyle}>
      { value }
      <style jsx>
      {`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
          color: snow;
        }
      `}
      </style>
    </div>
  )
}
