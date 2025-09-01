import {
  CommunitiesBlock,
  ListPost,
  PremiumCard,
  WelcomeCard,
} from "@/components/blocks";

const HomePage = () => {
  // const { data: posts } = useGetPostsQuery({ limit: 10, skip: 0 });
  return (
    <div className="container grid grid-cols-[1fr_550px_1fr] gap-x-6 xl:gap-x-12 py-6">
      <div className="space-y-6">
        <CommunitiesBlock />
      </div>

      <div className="space-y-6">
        <ListPost />
      </div>

      <div className="space-y-6">
        <PremiumCard />
        <WelcomeCard />
      </div>
    </div>
  );
};

export default HomePage;
