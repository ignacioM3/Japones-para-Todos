import flashy from "@pablotheblink/flashyjs";

export default function NotifyButton() {
  const handleClick = () => flashy.success("Gracias!");
  return (
    <button
      onClick={handleClick}
      className="bg-green-500 w-30 p-2 rounded-md text-white font-bold hover:bg-green-600 transition-colors cursor-pointer"
    >
      Notificarme
    </button>
  );
}