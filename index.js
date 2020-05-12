module.exports = (array) => {
  if (array.length > 0) {
    let rand = Math.floor(Math.random() * array.length - 1);
    return array.splice(rand, 1);
  } else {
    return undefined;
  }
};
