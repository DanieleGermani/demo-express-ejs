module.exports = (app) => {

  // RUTA 1: Ruta raiz
  app.get('/', (req, res) => {
    console.log("HAS PREGUNTADO A LA RAIZ");
    let obj = {
      title: "Es la ruta raiz",
      animales: [{
          name: "perro",
          color: "blue"
        },
        {
          name: "gato",
          color: "red"
        },
        {
          name: "morsa",
          color: "green"
        },
        {
          name: "leon",
          color: "purple"
        }
      ],
      isLoggedIn: true,
      myColor: "red"
    };
    res.render('p1', obj);
  });

  // RUTA 2: Ruta ironhack
  app.get('/ironhack', (req, res) => {
    let obj = {
      title: "Es la ruta ironhack",
      animales: [],
      isLoggedIn: false,
      myColor: "blue"
    };
    res.render('p2', obj);
  });

  app.get('/user-data', (req, res, next) => {
    res.render('datos', {
      myColor: req.query.color,
      title: `La pagina de ${req.query.name}`
    });
  });

  app.post('/user-data', (req, res) => {
    res.render('datos-post', {
      myColor: 'green',
      title: `La pagina de marc`
    });
  });

};
