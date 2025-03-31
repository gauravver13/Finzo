

export const Balance = ({ value }: { value: number }) => {
    return (
        <div className="flex justify-between">
            <div className="font-semibold text-lg">
                Your balance
            </div>
            <div className="font-mono ml-4 text-lg">
                Rs. {value}
            </div>
        </div>
    )
}