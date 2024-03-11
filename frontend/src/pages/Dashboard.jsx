import Appbar from "../Components/Appbar";
import BalanceComponent from "../Components/BalanceComponent";
import Users from "../Components/Users";

export default function Dashboard(){
    return (
        <div>
            <Appbar/>
            <BalanceComponent value ={"10000"}/>
            <Users/>
            </div>
    )
}