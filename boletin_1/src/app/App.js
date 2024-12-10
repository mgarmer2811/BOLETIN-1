const cardProps = {
    image: "https://c8.alamy.com/comp/MR0G79/random-pictures-MR0G79.jpg",
    title: "Gato durmiendo",
    description: "Miralo que tranquilito que está",
};

export default function App() {
    return (
        <div>
            <Card cardInfo={cardProps} />
        </div>
    );
}

function Card({ cardInfo }) {
    return (
        <div>
            <img
                src={cardInfo.image}
                alt={cardInfo.title}
                width="200"
                height="200"
            />
            <h2>{cardInfo.title}</h2>
            <p>{cardInfo.description}</p>
        </div>
    );
}
