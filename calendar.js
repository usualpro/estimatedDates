const applyDates = ({ sessions = 1, day = "Tuesday" }) => {
  const calendarWrapper = document.getElementById("calendar-date-wrapper");
  const form = document.getElementById("ascent-form-object");
  const inputObject = form.querySelector("[name='your-subject']");
  const arrays = [
    ...estimatedDates({
      day,
      sessions,
      holidays: ["07", "08"],
      addYear: 0,
    }),
    ...estimatedDates({
      day,
      sessions,
      holidays: ["07", "08"],
      addYear: 1,
    }),
  ].filter((e) => !e.isBefore);

  const iteration = String(
    arrays.map(
      (e) => `<li>
        <div
        class="elementor-element elementor-element-abf16c0 elementor-align-justify elementor-widget elementor-widget-button"
        data-id="abf16c0"
        data-element_type="widget"
        data-widget_type="button.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-button-wrapper">
            <a
              href="#ascent-form-object"
              class="elementor-button-link elementor-button elementor-size-md"
              role="button"
            >
              <span class="elementor-button-content-wrapper">
                <span class="elementor-button-text">${e.date.format(
                  "DD/MM/YYYY"
                )}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      </li>`
    )
  )
    .split(",")
    .join("");

  const calendarWrapperStyle = `style="
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 20px;
  flex-direction: column;"`;

  const buttonStyle = `<style>
  .elementor-element-abf16c0 .elementor-button {
    font-weight: 500;
    letter-spacing: 0px;
    word-spacing: 0.1em;
    text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
    fill: #000000;
    color: #000000;
    background-color: #ffffff;
    border-radius: 20px 20px 20px 20px;
  }
  .elementor-element.elementor-element-abf16c0 .elementor-button:hover,
  .elementor-element.elementor-element-abf16c0 .elementor-button:focus {
    color: #ffffff;
    background-color: #58488c;
  }
</style>`;

  calendarWrapper.innerHTML = `
  ${buttonStyle} 
  <ul ${calendarWrapperStyle}>
  ${iteration}
  </ul>`;

  const links = calendarWrapper.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener(
      "click",
      (e) =>
        (inputObject.value = `[Session du ${e.target.innerText}] Demande d'informations`)
    );
  });
};
applyDates({
  sessions: window.numberOfSession,
  day: window.selectedDate,
});
