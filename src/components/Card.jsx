export default function Card({ category, background, color, icon, score }) {
  var clase = "mt-5 flex justify-between p-2 " + background;

  return (
    <div className={clase}>
        <div className="flex gap-2">
            <img src={icon} alt="icon" />
            <p className="font-semibold" style={{ color: color }}>
            {category}
            </p>
        </div>
        <div className="flex gap-1">
            <p className="font-bold">{score}</p>
            <p className="font-bold text-gray-400">/</p>
            <p className="font-bold text-gray-400">100</p>
        </div>
    </div>
  );
}
