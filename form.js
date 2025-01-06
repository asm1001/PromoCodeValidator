export function isPromoCodeValid(code) {
  console.log(code);

  code = code.trim();

  if (code.length < 5) {
    return false;
  } else if (code.length > 10) {
    return false;
  } else {
    return true;
  }
}
