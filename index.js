const fetchData = (from, amount) => {
  const currencyAPI =
    "https://free.currconv.com/api/v7/convert?q=" +
    from +
    "_vnd&compact=ultra&apiKey=533efc6993140c541417";
  fetch(currencyAPI)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const key = Object.keys(data)[0];
      const value = data[key];
      console.log(data, key, value);
      const vnd = document.querySelector(".to");
      vnd.value = value;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addEventSubmit = () => {
  const amount = document.querySelector(".amount");
  const btn = document.querySelector(".btn");
  const from = document.querySelector(".from");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (amount && btn && from) {
      const _vnd = fetchData(from.value, amount.value);
    }
  });
};

addEventSubmit();
