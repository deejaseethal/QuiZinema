
import Banner from '@/components/Banner';
import GameVision from '@/components/GameVision';
import TopGamesReleases from '@/components/TopGameReleases';
import OurJourney from '@/components/OurJourney';
import SkilledTeam from '@/components/SkilledTeam';
import ReviewSection from '@/components/Review';




export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <Banner />
      <GameVision /> 
      <TopGamesReleases />
      <OurJourney/>
      <SkilledTeam/>
      <ReviewSection/>
      
     
     

    </main>
  );
}