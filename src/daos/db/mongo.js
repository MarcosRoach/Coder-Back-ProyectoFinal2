//Importar mongoose
import mongoose from "mongoose";

//funcion para conectar a la base de datos
const db = async () => {
  //Conectar a la base de datos
  const uri =
    "mongodb+srv://roachmarcos:29768344Msr@cluster0.qwzygw8.mongodb.net/ecommerce?retryWrites=true&w=majority";
  let db;
  try {
    db = await mongoose.connect(uri);

    //Agregar productos
    // const art = [
    //   {
    //     title: "Iphone 13 Pro Max",
    //     description: "El nuevo Iphone 13 Pro con 1TB de memoria y 16GB de RAM",
    //     code: "CD-001",
    //     price: 1000,
    //     status: true,
    //     stock: 4,
    //     category: "Celulares",
    //     thumbnail: [
    //       {
    //         id: 1,
    //         url: "https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg",
    //       },
    //       {
    //         id: 2,
    //         url: "https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Samsung Galaxy S21",
    //     description: "El último Samsung Galaxy con cámara de 108MP",
    //     code: "CD-002",
    //     price: 900,
    //     status: true,
    //     stock: 10,
    //     category: "Celulares",
    //     thumbnail: [
    //       {
    //         id: 3,
    //         url: "https://cdn.pixabay.com/photo/2017/02/26/13/06/smartphone-2105424_960_720.jpg",
    //       },
    //       {
    //         id: 4,
    //         url: "https://cdn.pixabay.com/photo/2017/02/26/13/06/smartphone-2105424_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Sony PlayStation 5",
    //     description: "La consola de videojuegos de última generación de Sony",
    //     code: "CD-003",
    //     price: 500,
    //     status: true,
    //     stock: 2,
    //     category: "Videojuegos",
    //     thumbnail: [
    //       {
    //         id: 5,
    //         url: "https://cdn.pixabay.com/photo/2020/06/17/19/17/game-console-5315615_960_720.jpg",
    //       },
    //       {
    //         id: 6,
    //         url: "https://cdn.pixabay.com/photo/2020/06/17/19/17/game-console-5315615_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Canon EOS R5",
    //     description:
    //       "Cámara sin espejo de alta resolución con grabación de video 8K",
    //     code: "CD-004",
    //     price: 3000,
    //     status: true,
    //     stock: 5,
    //     category: "Cámaras",
    //     thumbnail: [
    //       {
    //         id: 7,
    //         url: "https://cdn.pixabay.com/photo/2020/02/06/14/23/camera-4822679_960_720.jpg",
    //       },
    //       {
    //         id: 8,
    //         url: "https://cdn.pixabay.com/photo/2020/02/06/14/23/camera-4822679_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "MacBook Pro 16",
    //     description:
    //       "Potente laptop con pantalla Retina de 16 pulgadas y procesador Intel Core i9",
    //     code: "CD-005",
    //     price: 2000,
    //     status: true,
    //     stock: 8,
    //     category: "Laptops",
    //     thumbnail: [
    //       {
    //         id: 9,
    //         url: "https://cdn.pixabay.com/photo/2019/05/02/23/49/macbook-4170218_960_720.jpg",
    //       },
    //       {
    //         id: 10,
    //         url: "https://cdn.pixabay.com/photo/2019/05/02/23/49/macbook-4170218_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Samsung QLED TV",
    //     description: "Televisor QLED de 65 pulgadas con resolución 4K",
    //     code: "CD-006",
    //     price: 1500,
    //     status: true,
    //     stock: 6,
    //     category: "Electrónicos",
    //     thumbnail: [
    //       {
    //         id: 11,
    //         url: "https://cdn.pixabay.com/photo/2020/07/31/07/01/room-5450678_960_720.jpg",
    //       },
    //       {
    //         id: 12,
    //         url: "https://cdn.pixabay.com/photo/2020/07/31/07/01/room-5450678_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "DJI Mavic Air 2",
    //     description:
    //       "Drone compacto con cámara de alta resolución y modos de vuelo inteligentes",
    //     code: "CD-007",
    //     price: 800,
    //     status: true,
    //     stock: 3,
    //     category: "Drones",
    //     thumbnail: [
    //       {
    //         id: 13,
    //         url: "https://cdn.pixabay.com/photo/2020/10/09/15/57/drone-5647394_960_720.jpg",
    //       },
    //       {
    //         id: 14,
    //         url: "https://cdn.pixabay.com/photo/2020/10/09/15/57/drone-5647394_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Sony WH-1000XM4",
    //     description:
    //       "Audífonos inalámbricos con cancelación de ruido y calidad de sonido excepcional",
    //     code: "CD-008",
    //     price: 300,
    //     status: true,
    //     stock: 12,
    //     category: "Audífonos",
    //     thumbnail: [
    //       {
    //         id: 15,
    //         url: "https://cdn.pixabay.com/photo/2021/02/05/16/56/headphones-5987825_960_720.jpg",
    //       },
    //       {
    //         id: 16,
    //         url: "https://cdn.pixabay.com/photo/2021/02/05/16/56/headphones-5987825_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Amazon Echo Dot",
    //     description: "Altavoz inteligente con asistente de voz Alexa integrado",
    //     code: "CD-009",
    //     price: 50,
    //     status: true,
    //     stock: 15,
    //     category: "Altavoces",
    //     thumbnail: [
    //       {
    //         id: 17,
    //         url: "https://cdn.pixabay.com/photo/2017/12/29/08/47/smart-speaker-3040774_960_720.jpg",
    //       },
    //       {
    //         id: 18,
    //         url: "https://cdn.pixabay.com/photo/2017/12/29/08/47/smart-speaker-3040774_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Nintendo Switch",
    //     description:
    //       "Consola de videojuegos híbrida con capacidad de jugar en modo portátil o en TV",
    //     code: "CD-010",
    //     price: 300,
    //     status: true,
    //     stock: 7,
    //     category: "Videojuegos",
    //     thumbnail: [
    //       {
    //         id: 19,
    //         url: "https://cdn.pixabay.com/photo/2018/09/25/18/19/nintendo-switch-3703236_960_720.jpg",
    //       },
    //       {
    //         id: 20,
    //         url: "https://cdn.pixabay.com/photo/2018/09/25/18/19/nintendo-switch-3703236_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "LG OLED TV",
    //     description:
    //       "Televisor OLED de 55 pulgadas con calidad de imagen excepcional",
    //     code: "CD-011",
    //     price: 1800,
    //     status: true,
    //     stock: 9,
    //     category: "Electrónicos",
    //     thumbnail: [
    //       {
    //         id: 21,
    //         url: "https://cdn.pixabay.com/photo/2020/05/10/12/26/remote-control-5154336_960_720.jpg",
    //       },
    //       {
    //         id: 22,
    //         url: "https://cdn.pixabay.com/photo/2020/05/10/12/26/remote-control-5154336_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Fitbit Charge 4",
    //     description:
    //       "Rastreador de actividad física con GPS y monitorización del ritmo cardíaco",
    //     code: "CD-012",
    //     price: 150,
    //     status: true,
    //     stock: 20,
    //     category: "Wearables",
    //     thumbnail: [
    //       {
    //         id: 23,
    //         url: "https://cdn.pixabay.com/photo/2020/05/21/15/07/fitness-tracker-5206059_960_720.jpg",
    //       },
    //       {
    //         id: 24,
    //         url: "https://cdn.pixabay.com/photo/2020/05/21/15/07/fitness-tracker-5206059_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "iPad Pro 12.9",
    //     description:
    //       "Tableta con pantalla Liquid Retina de 12.9 pulgadas y chip M1",
    //     code: "CD-013",
    //     price: 1200,
    //     status: true,
    //     stock: 6,
    //     category: "Tabletas",
    //     thumbnail: [
    //       {
    //         id: 25,
    //         url: "https://cdn.pixabay.com/photo/2020/09/04/18/48/tablet-5544113_960_720.jpg",
    //       },
    //       {
    //         id: 26,
    //         url: "https://cdn.pixabay.com/photo/2020/09/04/18/48/tablet-5544113_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Sony Alpha a7 III",
    //     description:
    //       "Cámara sin espejo con sensor full-frame y capacidad de grabación de video 4K",
    //     code: "CD-014",
    //     price: 2000,
    //     status: true,
    //     stock: 3,
    //     category: "Cámaras",
    //     thumbnail: [
    //       {
    //         id: 27,
    //         url: "https://cdn.pixabay.com/photo/2021/03/17/18/26/camera-6100921_960_720.jpg",
    //       },
    //       {
    //         id: 28,
    //         url: "https://cdn.pixabay.com/photo/2021/03/17/18/26/camera-6100921_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Bose QuietComfort 35 II",
    //     description:
    //       "Audífonos inalámbricos con cancelación de ruido líder en la industria",
    //     code: "CD-015",
    //     price: 350,
    //     status: true,
    //     stock: 10,
    //     category: "Audífonos",
    //     thumbnail: [
    //       {
    //         id: 29,
    //         url: "https://cdn.pixabay.com/photo/2019/09/05/08/41/headphones-4456121_960_720.jpg",
    //       },
    //       {
    //         id: 30,
    //         url: "https://cdn.pixabay.com/photo/2019/09/05/08/41/headphones-4456121_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Amazon Kindle Paperwhite",
    //     description:
    //       "Lector de libros electrónicos con pantalla de alta resolución y luz frontal",
    //     code: "CD-016",
    //     price: 130,
    //     status: true,
    //     stock: 15,
    //     category: "Electrónicos",
    //     thumbnail: [
    //       {
    //         id: 31,
    //         url: "https://cdn.pixabay.com/photo/2020/05/12/09/07/kindle-5168243_960_720.jpg",
    //       },
    //       {
    //         id: 32,
    //         url: "https://cdn.pixabay.com/photo/2020/05/12/09/07/kindle-5168243_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "GoPro Hero 9 Black",
    //     description:
    //       "Cámara de acción con resolución 5K y estabilización avanzada",
    //     code: "CD-017",
    //     price: 400,
    //     status: true,
    //     stock: 7,
    //     category: "Cámaras",
    //     thumbnail: [
    //       {
    //         id: 33,
    //         url: "https://cdn.pixabay.com/photo/2020/11/01/13/17/action-camera-5708684_960_720.jpg",
    //       },
    //       {
    //         id: 34,
    //         url: "https://cdn.pixabay.com/photo/2020/11/01/13/17/action-camera-5708684_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Sony WH-1000XM3",
    //     description:
    //       "Audífonos inalámbricos con cancelación de ruido y sonido de alta calidad",
    //     code: "CD-018",
    //     price: 250,
    //     status: true,
    //     stock: 9,
    //     category: "Audífonos",
    //     thumbnail: [
    //       {
    //         id: 35,
    //         url: "https://cdn.pixabay.com/photo/2020/03/09/18/27/headphones-4911811_960_720.jpg",
    //       },
    //       {
    //         id: 36,
    //         url: "https://cdn.pixabay.com/photo/2020/03/09/18/27/headphones-4911811_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Microsoft Surface Pro 7",
    //     description:
    //       "Tableta convertible con potente rendimiento y versatilidad",
    //     code: "CD-019",
    //     price: 1200,
    //     status: true,
    //     stock: 5,
    //     category: "Tabletas",
    //     thumbnail: [
    //       {
    //         id: 37,
    //         url: "https://cdn.pixabay.com/photo/2020/08/05/14/40/laptop-5465641_960_720.jpg",
    //       },
    //       {
    //         id: 38,
    //         url: "https://cdn.pixabay.com/photo/2020/08/05/14/40/laptop-5465641_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Sony PlayStation 5",
    //     description:
    //       "Consola de videojuegos de última generación con gráficos de alta fidelidad",
    //     code: "CD-020",
    //     price: 500,
    //     status: true,
    //     stock: 3,
    //     category: "Videojuegos",
    //     thumbnail: [
    //       {
    //         id: 39,
    //         url: "https://cdn.pixabay.com/photo/2020/10/10/14/59/playstation-5-5649503_960_720.jpg",
    //       },
    //       {
    //         id: 40,
    //         url: "https://cdn.pixabay.com/photo/2020/10/10/14/59/playstation-5-5649503_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Canon EOS 90D",
    //     description:
    //       "Cámara DSLR con sensor APS-C y capacidad de grabación de video 4K",
    //     code: "CD-021",
    //     price: 1100,
    //     status: true,
    //     stock: 6,
    //     category: "Cámaras",
    //     thumbnail: [
    //       {
    //         id: 41,
    //         url: "https://cdn.pixabay.com/photo/2020/05/23/09/34/canon-5217717_960_720.jpg",
    //       },
    //       {
    //         id: 42,
    //         url: "https://cdn.pixabay.com/photo/2020/05/23/09/34/canon-5217717_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Samsung Galaxy Watch 4",
    //     description:
    //       "Reloj inteligente con seguimiento de actividad física y monitorización de la salud",
    //     code: "CD-022",
    //     price: 300,
    //     status: true,
    //     stock: 8,
    //     category: "Wearables",
    //     thumbnail: [
    //       {
    //         id: 43,
    //         url: "https://cdn.pixabay.com/photo/2021/10/14/19/56/smartwatch-6701006_960_720.jpg",
    //       },
    //       {
    //         id: 44,
    //         url: "https://cdn.pixabay.com/photo/2021/10/14/19/56/smartwatch-6701006_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "DJI Mavic Air 2",
    //     description: "Dron con cámara 4K y modos de vuelo inteligentes",
    //     code: "CD-023",
    //     price: 800,
    //     status: true,
    //     stock: 4,
    //     category: "Electrónicos",
    //     thumbnail: [
    //       {
    //         id: 45,
    //         url: "https://cdn.pixabay.com/photo/2021/05/15/14/09/drone-6259481_960_720.jpg",
    //       },
    //       {
    //         id: 46,
    //         url: "https://cdn.pixabay.com/photo/2021/05/15/14/09/drone-6259481_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Bose SoundLink Revolve+",
    //     description:
    //       "Altavoz portátil con sonido de 360 grados y batería de larga duración",
    //     code: "CD-024",
    //     price: 250,
    //     status: true,
    //     stock: 7,
    //     category: "Audio",
    //     thumbnail: [
    //       {
    //         id: 47,
    //         url: "https://cdn.pixabay.com/photo/2017/12/29/12/45/speakers-3041350_960_720.jpg",
    //       },
    //       {
    //         id: 48,
    //         url: "https://cdn.pixabay.com/photo/2017/12/29/12/45/speakers-3041350_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Apple MacBook Pro",
    //     description:
    //       "Laptop potente con pantalla Retina y procesador Intel Core",
    //     code: "CD-025",
    //     price: 2000,
    //     status: true,
    //     stock: 5,
    //     category: "Computadoras",
    //     thumbnail: [
    //       {
    //         id: 49,
    //         url: "https://cdn.pixabay.com/photo/2020/02/05/19/05/apple-macbook-pro-4818889_960_720.jpg",
    //       },
    //       {
    //         id: 50,
    //         url: "https://cdn.pixabay.com/photo/2020/02/05/19/05/apple-macbook-pro-4818889_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Samsung QLED Q80T",
    //     description: "Televisor con tecnología QLED y resolución 4K",
    //     code: "CD-026",
    //     price: 1500,
    //     status: true,
    //     stock: 3,
    //     category: "Electrónicos",
    //     thumbnail: [
    //       {
    //         id: 51,
    //         url: "https://cdn.pixabay.com/photo/2021/03/24/19/05/samsung-6114757_960_720.jpg",
    //       },
    //       {
    //         id: 52,
    //         url: "https://cdn.pixabay.com/photo/2021/03/24/19/05/samsung-6114757_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Nikon D850",
    //     description: "Cámara DSLR de alta resolución con sensor full-frame",
    //     code: "CD-027",
    //     price: 3000,
    //     status: true,
    //     stock: 2,
    //     category: "Cámaras",
    //     thumbnail: [
    //       {
    //         id: 53,
    //         url: "https://cdn.pixabay.com/photo/2018/05/13/22/59/nikon-3400801_960_720.jpg",
    //       },
    //       {
    //         id: 54,
    //         url: "https://cdn.pixabay.com/photo/2018/05/13/22/59/nikon-3400801_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Beats Solo Pro",
    //     description: "Audífonos inalámbricos con calidad de sonido premium",
    //     code: "CD-028",
    //     price: 300,
    //     status: true,
    //     stock: 8,
    //     category: "Audífonos",
    //     thumbnail: [
    //       {
    //         id: 55,
    //         url: "https://cdn.pixabay.com/photo/2020/06/26/17/00/headphones-5347165_960_720.jpg",
    //       },
    //       {
    //         id: 56,
    //         url: "https://cdn.pixabay.com/photo/2020/06/26/17/00/headphones-5347165_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Lenovo ThinkPad X1 Carbon",
    //     description: "Laptop ultradelgada y potente para profesionales",
    //     code: "CD-029",
    //     price: 1800,
    //     status: true,
    //     stock: 4,
    //     category: "Computadoras",
    //     thumbnail: [
    //       {
    //         id: 57,
    //         url: "https://cdn.pixabay.com/photo/2018/10/01/21/21/laptop-3714289_960_720.jpg",
    //       },
    //       {
    //         id: 58,
    //         url: "https://cdn.pixabay.com/photo/2018/10/01/21/21/laptop-3714289_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "LG OLED CX",
    //     description: "Televisor OLED con resolución 4K y HDR",
    //     code: "CD-030",
    //     price: 2000,
    //     status: true,
    //     stock: 6,
    //     category: "Electrónicos",
    //     thumbnail: [
    //       {
    //         id: 59,
    //         url: "https://cdn.pixabay.com/photo/2021/09/08/17/18/lg-6600911_960_720.jpg",
    //       },
    //       {
    //         id: 60,
    //         url: "https://cdn.pixabay.com/photo/2021/09/08/17/18/lg-6600911_960_720.jpg",
    //       },
    //     ],
    //   },
    //   {
    //     title: "GoPro HERO9 Black",
    //     description: "Cámara de acción con video 5K y pantalla frontal",
    //     code: "CD-031",
    //     price: 400,
    //     status: true,
    //     stock: 9,
    //     category: "Cámaras",
    //     thumbnail: [
    //       {
    //         id: 61,
    //         url: "https://cdn.pixabay.com/photo/2020/10/01/18/12/gopro-5610915_960_720.jpg",
    //       },
    //       {
    //         id: 62,
    //         url: "https://cdn.pixabay.com/photo/2020/10/01/18/12/gopro-5610915_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Bose QuietComfort 35 II",
    //     description: "Audífonos inalámbricos con cancelación de ruido",
    //     code: "CD-032",
    //     price: 350,
    //     status: true,
    //     stock: 7,
    //     category: "Audífonos",
    //     thumbnail: [
    //       {
    //         id: 63,
    //         url: "https://cdn.pixabay.com/photo/2017/07/06/23/23/headphones-2479261_960_720.jpg",
    //       },
    //       {
    //         id: 64,
    //         url: "https://cdn.pixabay.com/photo/2017/07/06/23/23/headphones-2479261_960_720.jpg",
    //       },
    //     ],
    //   },

    //   {
    //     title: "Acer Predator Helios 300",
    //     description:
    //       "Laptop para juegos con procesador de alta velocidad y tarjeta gráfica potente",
    //     code: "CD-033",
    //     price: 1500,
    //     status: true,
    //     stock: 5,
    //     category: "Computadoras",
    //     thumbnail: [
    //       {
    //         id: 65,
    //         url: "https://cdn.pixabay.com/photo/2019/07/26/08/39/acer-4364114_960_720.jpg",
    //       },
    //       {
    //         id: 66,
    //         url: "https://cdn.pixabay.com/photo/2019/07/26/08/39/acer-4364114_960_720.jpg",
    //       },
    //     ],
    //   },
    // ];
    // await db.connection.db.collection("products").insertMany(art);

    console.log("Conectado a la base de datos de Mongo Atlas Exitosamente");
  } catch (error) {
    console.log(`Error en la conexion a la base de datos: ${error}`);
  }
};

export default db;
