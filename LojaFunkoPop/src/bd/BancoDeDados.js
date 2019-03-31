const PRODUTOS = [
    {nome: 'FUNKO POP! BOBA FETT', preco: 109.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/o/pop_boba_fett_02_1_1_1.jpg"},
    {nome: 'FUNKO POP! SPIDER-MAN', preco: 99.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/o/boneco-spiderman-pop-funko_1_1.jpg"},
    {nome: 'FUNKO POP! PUNISHER', preco: 99.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/o/pop-punisher-nemesis-funko_2_1.jpg"},
    {nome: 'FUNKO POP! RAIDEN', preco: 94.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/o/boneco-raiden-mortal-kombat-x-funko-01.jpg"},
    {nome: 'FUNKO POP! CAP. AMERICA', preco: 99.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/o/boneco-cap-america-civil-war-funko-01_2.jpg"},
    {nome: 'FUNKO POP! PACK CIVIL WAR', preco: 989.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/a/pack_funko_captain_america_civil_war_1__1.jpg"},
    {nome: 'FUNKO POP! SONIC', preco: 98.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/o/boneco-sonic-with-the-ring-funko-01.jpg"},
    {nome: 'FUNKO POP! KEN', preco: 74.00, imagem: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/o/boneco-ken-street-fighter-funko-pop-01_1.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;