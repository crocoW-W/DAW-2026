export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageSource: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Burger",
        description: "Pão brioche, hambúrguer 160g, queijo prato e molho da casa.",
        price: 22.00,
        category: "Lanches",
        imageSource: "./assets/img/burger.png"
    },
    {
        id: 2,
        name: "Bacon Burger",
        description: "Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.",
        price: 25,
        category: "lanches",
        imageSource: "./assets/img/burger-bacon.png",
    },
    {
        id: 3,
        name: "Duplo Burguer",
        description: "Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.",
        price: 29,
        category: "lanches",
        imageSource: "./assets/img/burger-double.png",
    },
    {
        id: 4,
        name: "Batata Rústica",
        description: "Porção de batata com alecrim, parmesao e maionese verde.",
        price: 18,
        category: "porcoes",
        imageSource: "./assets/img/batata-rustica.png",
    },
    {
        id: 5,
        name: "Batata Tradicional",
        description: "Porção de batata e maionese verde.",
        price: 15,
        category: "porcoes",
        imageSource: "./assets/img/batata-tradicional.png",
    },
    {
        id: 6,
        name: "Água Sem Gás",
        description: "Garrafa descartável de água sem gás com 500 ml.",
        price: 8,
        category: "bebidas",
        imageSource: "./assets/img/agua.png",
    },
    {
        id: 7,
        name: "Refrigerante 300 ml",
        description: "Copo de refrigerante de 300 ml.",
        price: 10,
        category: "bebidas",
        imageSource: "./assets/img/refri.png",
    },
    {
        id: 8,
        name: "Chopp 300 ml",
        description: "Caneca de 300 ml do nosso chopp pilsen geladíssimo.",
        price: 15,
        category: "bebidas",
        imageSource: "./assets/img/chopp.png",
    },
    {
        id: 9,
        name: "Petit Gateau",
        description: "Petit Gateau com uma bola de sorvete de creme.",
        price: 25,
        category: "sobremesas",
        imageSource: "./assets/img/petit-gateau.png",
    },
    {
        id: 10,
        name: "Mousse de Maracujá",
        description: "Mousse de maracujá feito com a fruta de verdade.",
        price: 18,
        category: "sobremesas",
        imageSource: "./assets/img/mousse-maracuja.png",
    },
    {
        id: 11,
        name: "Suco de laranja",
        description: "Suco de laranja natural feito na hora.",
        price: 11,
        category: "bebidas",
        imageSource: "./assets/img/sucoDeLaranja.png",
    }
];