export default ({ area, value, size=1.4, rotate=0, scale=1, bg, style }) => {
  const customStyle = {
    gridArea: area,
    transform: `rotate(${rotate}deg) scale(${scale})`,
    backgroundColor: bg,
    fontSize: `${size}em`,
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
          cursor: default;
          user-select: none;
        }
      `}
      </style>
    </div>
  )
}
