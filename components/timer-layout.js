export default ({ children }) => (
  <section>
    { children }
    <style jsx>
    {`
      section {
        overflow: hidden;
        padding: 2em;
        color: snow;
        width: calc(100vw - 4em);
        height: calc(100vw - 4em);
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "months  months  .       ."
                             "months  months  days    days"
                             "hours   hours   days    days"
                             ".       minutes seconds .";
      }

      @media (orientation: landscape) {
        section {
          height: calc(100vh - 4em);
          width: calc(100vh - 4em);
        }
      }
    `}
    </style>
  </section>
)
