// estado vacio reutilizable, recibe un icono de lucide y textos
export default function EmptyState({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      {Icon && (
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <Icon className="text-gray-400" size={28} />
        </div>
      )}
      <h2 className="font-bold text-gray-800 text-lg">{title}</h2>
      {subtitle && (
        <p className="text-sm text-gray-500 mt-1 max-w-xs">{subtitle}</p>
      )}
    </div>
  );
}
