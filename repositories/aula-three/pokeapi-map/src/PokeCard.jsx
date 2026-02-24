export default function Card({name, image, type}) {

    return (
        <article>
            <h3>{name}</h3>
            <img src={image} alt={type} />
            <p>{type}</p>
        </article>
    );
}