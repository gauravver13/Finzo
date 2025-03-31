// import { ChangeEvent } from "react"

export const InputBox = ({
    // label, placeholder, onChange }: { label: string, placeholder: string, onChange: (e: ChangeEvent) => void }) => {
    label, placeholder, onChange }: { label: string, placeholder: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor={label}>
                {label}
            </label>
            <input
                type="text"
                id={label}
                onChange={onChange}
                placeholder={placeholder}
                className=" border rounded w-full py-2 px-3 text-gray-700"
            />
        </div>
    )
}