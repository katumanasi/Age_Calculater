function calculateAge() {
  const dobValue = document.getElementById("dob").value;

  if (!dobValue) {
    alert("Please select your Date of Birth");
    return;
  }

  const parts = dobValue.split("-");
  const birthYear = parseInt(parts[0]);
  const birthMonth = parseInt(parts[1]) - 1;
  const birthDay = parseInt(parts[2]);

  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth, birthDay);

  if (birthDate > today) {
    alert("Future date not allowed!");
    return;
  }

  let years = today.getFullYear() - birthYear;
  let months = today.getMonth() - birthMonth;
  let days = today.getDate() - birthDay;

  if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("ageOutput").innerHTML =
    `${years} Years, ${months} Months, ${days} Days`;

  // 🎂 NEXT BIRTHDAY COUNTDOWN
  let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (daysLeft === 0) {
    document.getElementById("birthcountdown").innerHTML =
      "🎉 Happy Birthday! 🎉";
  } else {
    document.getElementById("birthcountdown").innerHTML =
      `${daysLeft} Days Left 🎂`;
  }

  // 🔮 ZODIAC SIGN
  const zodiac = getZodiacSign(birthDay, birthMonth + 1);
  document.getElementById("zodiacsign").innerHTML = zodiac;

  document.getElementById("result").style.display = "block";
}

function getZodiacSign(day, month) {
  const signs = [
    ["Capricorn", 19],
    ["Aquarius", 18],
    ["Pisces", 20],
    ["Aries", 19],
    ["Taurus", 20],
    ["Gemini", 20],
    ["Cancer", 22],
    ["Leo", 22],
    ["Virgo", 22],
    ["Libra", 22],
    ["Scorpio", 21],
    ["Sagittarius", 21],
    ["Capricorn", 31],
  ];

  if (day > signs[month - 1][1]) return signs[month][0];
  else return signs[month - 1][0];
}
