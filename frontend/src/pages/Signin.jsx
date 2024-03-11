import BottomWarning from '../Components/BottomWarning';
import Button from '../Components/Button';
import InputBox from '../Components/InputBox';
import SubHeading from '../Components/SubHeading';
import Heading from './../Components/Heading';

export default function Signup(){
    return (

        <div className = "bg-slate-300 h-screen flex justify-center">
            <div className = "flex flex-col justify-center">
            <div className = "rounded-lg w-80 bg-white text-center p-2 h-max px-4">
            <Heading label = {"Sign In"}/>
            <InputBox label = {"Email"} placeholder = {"abc123@gmail.com"}/>
            <InputBox label = {"Password"} placeholder = {"1234"}/>
            <div className = "pt-4">
            <Button label = {"Sign In"} />
            </div>
            <BottomWarning label= {"Don't have an account?"} buttonText = {"Sign Up"} to={"/Signup"}/>
            </div>
            </div>
            </div>
    )
}
