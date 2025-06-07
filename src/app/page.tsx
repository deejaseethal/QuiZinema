
import Banner from './components/Banner';
import GameVision from './components/GameVision';
import TopGamesReleases from './components/TopGameReleases';
import OurJourney from './components/OurJourney';
import SkilledTeam from './components/SkilledTeam';
import TrustedGame from './components/TrustedGame';
import GameDemo from './components/GameDemo';


export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <Banner />
      <GameVision /> 
      <TopGamesReleases />
      <OurJourney/>
      <SkilledTeam/>
      <TrustedGame/>
      <GameDemo/>
     

    </main>
  );
}