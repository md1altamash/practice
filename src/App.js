import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png'; 

function App(){
    return (
        <div>
            <section className = "hero is-primary">
                <div className = "hero-body">
                    <p className = "title" style={{display:'flex',justifyContent : 'center', alignItems : 'top'}}>Personal Assistance</p>
                </div>
            </section>
            
            <div className = "container">
                <section className = "section">
                    <div className = "columns">
                        <div className = "column is-4">
                            <ProfileCard 
                            title="alexa" 
                            handle = "@alexa_amazonwali" 
                            image={AlexaImage}
                            description = "Alexa was created by Amazon in Amazon with the purpose to help people with buying things and different works as well, Hey alexa please play me a song"/>
                        </div>
                        <div className = "column is-4">
                            <ProfileCard 
                            title="cortana" 
                            handle = "@cortana_computerwali" 
                            image={CortanaImage}
                            description = "Cortana was associated with the laptops and, I don't know how to use cortana, "/>
                        </div>
                        <div className = "column is-4">
                            <ProfileCard
                            title="siri" 
                            handle = "@siri_non-affordable" 
                            image={SiriImage}
                            description = "Siri is expensive one it comes with the Apple product and I never got the opportunity to use Siri" />
                        </div>
                    </div>
                </section>
            </div>
            
            
        </div>
    );
}
export default App;