export default ({ top, bottom }) => {
  return (
    <section>
      <div>{ top }</div>
      <div>{ bottom }</div>
      <style jsx>
      {`
        section {
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
        }

        div {
          height: 50%;
          color: rgba(0,0,0,.4);
          display: flex;
          align-items: center;
          padding: 0 8rem;
          font-size: 10rem;
        }
        div:last-child {
          justify-content: flex-end;
        }
      `}
      </style>
    </section>
  )
}