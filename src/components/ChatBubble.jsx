// burbuja de mensaje. las mias van a la derecha con el gradiente, las del otro
// a la izquierda en gris.
export default function ChatBubble({ text, mine }) {
  return (
    <div className={"flex " + (mine ? "justify-end" : "justify-start")}>
      <div
        className={
          "max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-snug " +
          (mine
            ? "flame-bg text-white rounded-br-sm"
            : "bg-gray-100 text-gray-800 rounded-bl-sm")
        }
      >
        {text}
      </div>
    </div>
  );
}
