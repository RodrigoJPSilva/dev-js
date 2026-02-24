export default function Card({title, price, src, description, category}) {

    return (
        <article>
            <h3>{title}</h3>
            <p>{price}</p>
            <img src={src} alt={title} />
            <p>{description}</p>
            <p>{category}</p>
        </article>
    );
}
    
// }
//   const dados = {
//     title: "titulo",
//     price: "preço",
//     image: "link",
//     altImage: "uma imagem",
//     description: "descrição",
//     category: "categoria"
//   }
//   return (
    
//   );