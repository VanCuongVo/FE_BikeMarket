import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Dropdown({ label, options, onSelect }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative w-full">
            {/* Button */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
          w-full h-11 px-4
          bg-gray-100
          rounded-xl
          flex items-center justify-between
          text-sm text-gray-800
          hover:bg-gray-200
          transition
        "
            >
                <span>{label}</span>
                <ChevronDown
                    size={18}
                    className={`transition ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown menu */}
            {open && (
                <div
                    className="
            absolute z-20 mt-2 w-full
            bg-white
            rounded-xl
            shadow-lg
            border
            overflow-hidden
          "
                >
                    {options.map(opt => (
                        <div
                            key={opt}
                            onClick={() => {
                                onSelect(opt)
                                setOpen(false)
                            }}
                            className="
                px-4 py-2
                text-sm
                cursor-pointer
                hover:bg-gray-100
            "
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
