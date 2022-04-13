const ListaProductos = [
    {
        id: 1,
        title: 'Tres Mousses',
        description: 'Torta de tres capas de chocolate: blanco, con leche y amargo.',
        price: 1000,
        img: '/img/1.jpg',
        category: 'postres',
    },
    {
        id: 2,
        title: 'Marquise',
        description: 'La marquesa de chocolate es un rico postre de chocolate hecho con chocolate negro, mantequilla, azúcar, cacao en polvo, huevos y crema. En este caso decorado con dulce de leche y merengue.',
        price: 950,
        img: '/img/2.jpg',
        category: 'postres',
    },
    {
        id: 3,
        title: 'Rogel',
        description: 'El rogel es un pastel tradicional de Argentina que consta de sucesivas galletas neutras alternando con abundante dulce de leche y finalmente cubierto por una capa de merengue.',
        price: 1200,
        img: '/img/3.jpg',
        category: 'postres',
    },
    {
        id: 4,
        title: "Tiramisu",
        description: 'El tiramisú, de origen italiano, es un pastel frío que se monta en capas. Se compone siempre de un ingrediente sólido humedecido en café, sobre el que se superpone (de forma alterna o no) una crema cuya base son huevos batidos con azúcar; se presenta espolvoreado con cacao en polvo.',
        price: 1350,
        img: "/img/tiramisu.jpeg",
        category: "postres"
    },
    {
        id: 5,
        title: "Bretona",
        description: 'El sablé bretón es una galleta arenosa rica en mantequilla, en yema de huevo y ligeramente perfumada con vainilla. Utilizada como base para tartas o postres.',
        price: 1350,
        img: "/img/bretona.jpeg",
        category: "postres"
    },
    {
        id: 6,
        title: "Lemon Pie",
        description: 'Es una tarta formada por una base de masa quebrada u hojaldre que se rellena con crema de limón. Esta tarta a menudo se complementa con un merengue.',
        price: 1350,
        img: "/img/lemonpie.jpeg",
        category: "tartas"
    },
    {
        id: 7,
        title: "New York Cheescake con Frutos Rojos",
        description: 'Un pastel de queso o tarta de queso es un postre hecho a base de ricota, requesón, queso quark, azúcar. En esta ocasion decorado con una reduccion de frutos rojos.',
        price: 1350,
        img: "/img/cheescakefrutosrojos.jpeg",
        category: "postres"
    },
    {
        id: 8,
        title: "New York Cheescake de Maracuya",
        description: 'Un pastel de queso o tarta de queso es un postre hecho a base de ricota, requesón, queso quark, azúcar. En esta ocasion decorado con una reduccion de maracuya.',
        price: 1350,
        img: "/img/cheescakemaracuya.jpeg",
        category: "postres"
    },
    {
        id: 9,
        title: "Key Lime Pie",
        description: 'Es un pastel de postre estadounidense hecho de limón, yemas de huevo y leche condensada azucarada. Se puede servir sin cobertura, cubierto con una cobertura de merengue hecha con claras de huevo o con crema batida; se puede cocinar en una masa de pastel, masa de galleta graham o sin masa.',
        price: 1350,
        img: "/img/keylime.jpeg",
        category: "tartas"
    },
    {
        id: 10,
        title: "Tarta de Frutas",
        description: 'De forma redonda compuesta de una o más capas de masa dulce cocida al horno, rellena y decorada con crema pastelera,chantilly y frutas de estacion.',
        price: 1350,
        img: "/img/tartafrutas1.jpeg",
        category: "tartas"
    },
    {
        id: 11,
        title: "Macarons",
        description: 'Es un tipo de galleta tradicional de la Gastronomía de Francia e Italia hecha de clara de huevo, almendra molida, azúcar glas y azúcar. Con formato de alfajor. Relleno de mousse de chocolate blanco, negro, nutella, frutos rojos y coco.',
        price: 1350,
        img: "/img/macarons.jpeg",
        category: "alfajores"
    },
    {
        id: 12,
        title: "Red Velvet",
        description: 'Es un pastel de chocolate con un color rojo oscuro o rojo brillante. Por lo general es preparado como un pastel en capas cubierto con un glaseado de queso cremoso o roux cocinado.',
        price: 1350,
        img: "/img/redvelvet1.jpeg",
        category: "postres"
    },
    {
        id: 13,
        title: "Tres Leches",
        description: 'Es un postre tradicional americano. Consiste en un bizcocho bañado con tres tipos de leche: leche evaporada, crema de leche y leche condensada, que le dan su nombre. Tiene una textura esponjosa. Se puede decorar con chantilly o merengue.',
        price: 1350,
        img: "/img/tresleches.jpeg",
        category: "postres"
    },
    {
        id: 14,
        title: "Torta Decorada Personalizada",
        description: 'Masa de harina y manteca, cocida al horno, puede ser sabor vainilla, chocolate, y se le puede agregar frutos secos, chips de chocolate, merengues cocidos. Las capas se rellenan con dulce de leche, mousse, crema bariloche. La decoracion, las masas y el relleno, son todos a eleccion y existen las distintas posibilidades de combinacion.',
        price: 1350,
        img: "/img/tortacuadrada1.jpeg",
        category: "tortas"
    },
    {
        id: 15,
        title: "Shots",
        description: 'Cualquiera de los postres que estan en la page en pequeñas copitas individuales.',
        price: 1350,
        img: "/img/shots.jpg",
        category: "minis"
    }
]

export default ListaProductos