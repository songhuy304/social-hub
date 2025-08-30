import {
  CommunitiesBlock,
  PremiumCard,
  WelcomeCard,
} from "@/components/blocks";

const HomePage = () => {
  return (
    <div className="container grid grid-cols-[1fr_550px_1fr] gap-x-6 xl:gap-x-12 py-6">
      {/* Left Sidebar */}
      <div className="space-y-6">
        <CommunitiesBlock />
      </div>

      {/* Center Content */}
      <div className="space-y-6">ádasds</div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <PremiumCard />
        <WelcomeCard />
      </div>
    </div>
  );
};

export default HomePage;
