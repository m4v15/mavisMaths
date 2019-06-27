var x = 100;

const scope = () => {
  var x = 200;
  console.log(x);
};

scope();

console.log(x);

var jem = {
  height: 150,
  beard: false,
  hair: "long"
};

console.log(jem);

var ghassan = jem;

ghassan.height = 170;
ghassan.beard = true;
ghassan.hair = "short";

console.log(jem);
