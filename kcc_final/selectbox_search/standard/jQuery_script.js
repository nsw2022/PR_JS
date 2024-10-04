$(document).ready(function () {
  const $wrapper = $(".wrapper"),
    $selectBtn = $wrapper.find(".select-btn"),
    $searchInp = $wrapper.find("input"),
    $options = $wrapper.find(".options");

  let countries = [
    "Afghanistan",
    "Algeria",
    "Argentina",
    "Australia",
    "Bangladesh",
    "Belgium",
    "Bhutan",
    "Brazil",
    "Canada",
    "China",
    "Denmark",
    "Ethiopia",
    "Finland",
    "France",
    "Germany",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Italy",
    "Japan",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Russia",
    "Romania",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United States",
    "United Kingdom",
    "Vietnam",
    "Apple",
  ];

  function addCountry(selectedCountry) {
    $options.html("");
    $.each(countries, function (index, country) {
      let isSelected = country === selectedCountry ? "selected" : "";
      let li = `<li onclick="updateName(this)" class="${isSelected} country-list">${country}</li>`;
      $options.append(li);
    });
  }
  addCountry();

  window.updateName = function (selectedLi) {
    $searchInp.val("");
    addCountry($(selectedLi).text());
    $wrapper.removeClass("active");
    $selectBtn.children().first().text($(selectedLi).text());
  };

  $searchInp.on("keyup", function () {
    let arr = [];
    let searchWord = $(this).val().toLowerCase();
    arr = $.map(countries, function (data) {
      if (data.toLowerCase().includes(searchWord)) {
        let isSelected =
          data === $selectBtn.children().first().text() ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
      }
    }).join("");
    $options.html(
      arr.length > 0
        ? arr
        : `<p style="margin-top: 10px;">Oops! Country not found</p>`
    );
  });

  $selectBtn.on("click", function () {
    $wrapper.toggleClass("active");
  });
});
