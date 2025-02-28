import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import MeetOurLibrarians from "./MeetOurLibrarians.JSX";
import OrderOnline from "./OrderOnline";
import Ratings from "./Rating"; 

 const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <MeetOurLibrarians></MeetOurLibrarians>
            <Ratings></Ratings>
            <OrderOnline></OrderOnline>
        </div>
    );
};

export default Home;