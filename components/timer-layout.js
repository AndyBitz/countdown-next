export default ({ children }) => (
  <section>
    { children }
    <style jsx>
    {`
      section {
        padding: 1em;
        color: snow;
        width: calc(100vw - 2em);
        height: calc(100vw - 2em);
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "months  months  .       ."
                             "months  months  days    days"
                             "hours   hours   days    days"
                             ".       minutes seconds .";
      }

      @media (orientation: landscape) {
        section {
          height: calc(100vh - 2em);
          width: calc(100vh - 2em);
        }
      }
    `}
    </style>
  </section>
)
