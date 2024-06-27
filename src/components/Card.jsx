const Card = ({ title, content }) => (
    <div className="p-4 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{content}</p>
    </div>
);

export default Card;
