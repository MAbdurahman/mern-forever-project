import HeroComponent from '../components/HeroComponent.jsx';
import LatestCollectionComponent from '../components/LatestCollectionComponent.jsx';
import BestSellerComponent from '../components/BestSellerComponent.jsx';
import OurPolicyComponent from '../components/OurPolicyComponent.jsx';
import NewsletterBoxComponent from '../components/NewsletterBoxComponent.jsx';


export default function HomePage() {

   return (
      <div>
         <HeroComponent />
         <LatestCollectionComponent />
         <BestSellerComponent />
         <OurPolicyComponent />
         <NewsletterBoxComponent />
      </div>

   );
}