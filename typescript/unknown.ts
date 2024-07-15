function typeGuard(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed();
  } else if (value instanceof HTMLElement) {
    return value.innerHTML;
  }
}

typeGuard("oi");
typeGuard(22);
typeGuard(button);
