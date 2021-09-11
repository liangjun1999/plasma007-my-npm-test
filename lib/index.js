const printMsg = function () {
  console.log("This is a message from the demo package");
}

const printName = function () {
  let name = process.env.npm_config_name;
  if (name == undefined) {
    console.log("No params of name");
  } else {
    console.log(`My name is ${name}`);
  }
}

export {
  printMsg,
  printName
}