function unionTypes() {
  let total: string | number = 200;

  total = "opa";

  function isNumber(value: string | number) {
    if (typeof value === "string") {
      return true;
    } else {
      return false;
    }
  }

  console.log(isNumber(500));

  const button = document.querySelector("button");

  button?.click();
}

export default { unionTypes };
