    import ProfileCard from "./ProfileCard";
    import AlexaImage from './Images/alexa.png'
    import CortanaImage from './Images/cortana.png'
    import SiriImage from './Images/siri.png'

function App(){
    return(
        <div>
        <div>Personal Digital Assistants</div>
        
        <img src={AlexaImage}/>
        <img src={CortanaImage}/>
        <img src={SiriImage}/>
            

        {/** Props object **/}
        <ProfileCard tatle="Alexa" handle="@alexa99"/>
        <ProfileCard title="Cortana" handle="@cortana32"/>
        <ProfileCard title="Siri" handle="@siri01"/>
        </div>

    );
}

export default App;