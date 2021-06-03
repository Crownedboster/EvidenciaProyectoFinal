const basedatos = require('basedatos');

const objectConnection = {
    "host": "localhost",
    "port": "3000",
    "user": "root",
    "password": "Crownedboster1",
    "database": "SistemaTickets"
}

// Crear conexion
const miconexion = mysql.createConnection(objectConnection);

// Conectar
miconexion.connect((error) => {
    if(error) {
        console.log("Error bd: ", error);
    } else {
        console.log("Base de datos conectada");
    }
});

module.exports = miconexion;