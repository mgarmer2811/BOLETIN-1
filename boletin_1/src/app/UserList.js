function UserCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

export default function UserList() {
    const users = [
        { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
        { name: "Jane Doe", email: "jane@example.com", phone: "098-765-4321" },
    ];

    return (
        <div>
            {users.map((user, index) => (
                <UserCard
                    key={index}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                />
            ))}
        </div>
    );
}
