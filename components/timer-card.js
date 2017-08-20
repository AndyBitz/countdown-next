export default ({ area, value }) => {
  const customStyle = {
    gridArea: area
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
