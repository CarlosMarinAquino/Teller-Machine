const EXPIRATION_TIME = 500000;
const userAccountsDb = [
  {
    // OBJETO 1
    id: 1,
    name: "Monica Ferrera",
    nip: 1430,
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    balance: 7000,
    expiration: "No",
  },
  {
    id: 2,
    name: "Pedro Rogers",
    nip: 9232,
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    balance: 8900,
    expiration: "No",
  },
  {
    id: 3,
    name: "Marco Houses",
    nip: 9263,
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    balance: 6300,
    expiration: "No",
  },
];
function getUsers() {
  let users = localStorage.getItem("userAccountsDb");
  if (users == undefined || users == null) {
    localStorage.setItem("userAccountsDb", JSON.stringify(userAccountsDb));
    users = localStorage.getItem("userAccountsDb");
  }
  return JSON.parse(users);
}

//validación regresa error o regresa correcto (true o false)
function validUser(name, nip) {
  let userObject;
  let users = getUsers();
  users.forEach((element) => {
    if (element.name == name && element.nip == nip) {
      userObject = element;
      return;
    }
  });
  return userObject;
}

//vamos a recibir un objeto de usuario y lo vamos a guardar en localStorage
function createSession(name) {
  name.expiration = Date.now();
  localStorage.setItem("name", JSON.stringify(name));
}

//limpia una session en el localstorage
function closeSession() {
  localStorage.removeItem("name");
}

//obtiene una session en el localstorage
function getSession() {
  return JSON.parse(localStorage.getItem("name"));
}

//Revisar si una sesion aun sigue activa
function checkExpiration() {
  let name = getSession();
  //Comparacion para validar una sesion en milisegundos
  if (name.expiration + EXPIRATION_TIME <= Date.now()) {
    //Date.now() nos regresa el tiempo actual en milisegundos
    return false;
  } else {
    return true;
  }
}

//Actualiza los valores del usuario para que la base de datos tenga los nuevos datos
function updateUser(name) {
  localStorage.setItem("name", JSON.stringify(name));
  let accounts = getUsers();
  //recorremos el arreglo de cuentas para encontrar el usuario actualizado
  accounts.forEach((element) => {
    if (element.name == name.name && element.nip == name.nip) {
      //Compara usuario y cuentas
      element.name = name.name;
      element.name = name.name;
      element.cash = name.cash;
      element.nip = name.nip;
      element.expiration = name.expiration;
    }
  });
  //Actualiza el valor del localstorage que simula la base de datos
  localStorage.setItem("userAccountsDb", JSON.stringify(accounts));
}

getUsers();
