export default function ImageGallery() {
    const images = [
        "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20211124180417_690.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwGmnj-kDQDu22qCzbHU_Qp6kuUhot_Bdkg&s",
    ];

    return (
        <div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    width="200"
                    height="200"
                />
            ))}
        </div>
    );
}
