export default function getPicture(data) {
  let picturePath = "";
  switch (data) {
    case "Degu":
      picturePath = "/img/animalPortraits/degu.jpg";
      break;
    case "Jūrų kiaulytės":
      picturePath = "/img/animalPortraits/juruKiaulyte.jpg";
      break;
    case "Šinšilos":
      picturePath = "/img/animalPortraits/sinsila.jpg";
      break;
    case "Žiurkėnai":
      picturePath = "/img/animalPortraits/ziurkenas.jpg";
      break;
    case "Barzdotoji agama":
      picturePath = "/img/animalPortraits/agama.jpg";
      break;
    case "Gyvatės ir žalčiai":
      picturePath = "/img/animalPortraits/zaltys.jpg";
      break;
    case "Iguana":
      picturePath = "/img/animalPortraits/iguana.jpg";
      break;
    case "Gekonai":
      picturePath = "/img/animalPortraits/gekonas.jpg";
      break;
    case "Sausumos vėžliai":
      picturePath = "/img/animalPortraits/svezlys.jpg";
      break;
    case "Šalmuotasis chameleonas":
      picturePath = "/img/animalPortraits/chameleonas.jpg";
      break;
    case "Vandens vėžliai":
      picturePath = "/img/animalPortraits/vvezlys.jpg";
      break;
    case "Paukščiai":
      picturePath = "/img/animalPortraits/papuga.jpg";
      break;
    case "Papūgos":
      picturePath = "/img/animalPortraits/papuga.jpg";
      break;
    case "Dekoratyviniai triušiai":
      picturePath = "/img/animalPortraits/triusis.jpg";
      break;
    case "Gyvalazdės":
      picturePath = "/img/animalPortraits/gyvalazde.jpg";
      break;
    case "Šeškai":
      picturePath = "/img/animalPortraits/seskas.jpg";
      break;
    case "Žiurkės":
      picturePath = "/img/animalPortraits/ziurke.jpg";
      break;
    case "Smiltpelės":
      picturePath = "/img/animalPortraits/smiltpele.jpg";
      break;
    case "Žuvys":
      picturePath = "/img/animalPortraits/zuvis.jpg";
      break;
  }
  return picturePath;
}
