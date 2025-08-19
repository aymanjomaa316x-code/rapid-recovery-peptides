// components/QuantityPicker.js
export default function QuantityPicker({ value, onChange, min = 1, max = 10 }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        className="px-2 py-1 rounded border border-neutral-700 text-sm"
        onClick={() => onChange(Math.max(min, value - 1))}
      >−</button>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || min)))}
        className="w-14 text-center rounded border border-neutral-700 bg-black/40 text-white text-sm py-1"
      />
      <button
        type="button"
        className="px-2 py-1 rounded border border-neutral-700 text-sm"
        onClick={() => onChange(Math.min(max, value + 1))}
      >+</button>
    </div>
  );
}
