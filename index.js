const applyDates = ({ sessions = 1, day = "Tuesday" }) => {
  const calendarWrapper = document.getElementById("calendar-date-wrapper");
  const iteration = String(
    estimatedDates({
      day,
      sessions,
      holidays: ["07", "08"],
    }).map(
      (e) => `<li>
        <button href="#" class="elementor-button elementor-button-link elementor-size-md" style="width:100%;">
            ${e.date.format("DD/MM/YYYY")}
        </button>
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

  calendarWrapper.innerHTML = `<ul ${calendarWrapperStyle}>
${iteration}
</ul>`;
};