import { Link } from "react-router-dom"

export const BottomWarning = ({ label, buttonText, to }: { label: string, buttonText: string, to: string } ) => {
    return (
        <div className="text-sm flex text-slate-500 pt-1 px-4 pb-4">
            <div>
                {label}
            </div>
            <Link className="pointer underline pl-1 cursor-pointer hover:text-blue-500" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}