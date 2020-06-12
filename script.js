async function showDownloads() {
  let response = await fetch(
    "https://api.github.com/repos/johnste/finicky/releases",
    {
      mode: "cors",
    }
  );
  let result = await response.json();

  let validEntries = result.filter((v) => v?.assets?.[0]);

  let total = validEntries.reduce(
    (total, v) => total + v?.assets?.[0]?.download_count,
    0
  );

  document.querySelector(
    ".js-finicky-download-count"
  ).innerHTML = `<tr class="total"><td>total</td><td>${total}</td></tr>`;
}

async function showStarGazers() {
  let response = await fetch("https://api.github.com/repos/johnste/finicky", {
    mode: "cors",
  });
  let result = await response.json();

  document.getElementsByClassName(".js-finicky-stargazer-count")[0].innerHTML =
    result.stargazers_count;
}

showDownloads();
showStarGazers();
