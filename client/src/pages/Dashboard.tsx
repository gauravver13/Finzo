import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return (
        <>
            <Appbar />  
            <div className="m-8">
                <Balance value={10000} />
                {/* TODO: HI_STORY */}
                <Users />
            </div>
        </>
    )
}