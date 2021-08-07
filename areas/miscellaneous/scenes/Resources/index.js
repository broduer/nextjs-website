import NavigationBar from "../../../../components/navigationBars/NavigationBar";
import ResourceCard from "./components/ResourceCard";

export default function Resources() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-nanobloxGray-light">
      <Head>
        <title>Nanoblox</title>
        <meta
          name="description"
          content="Find resources and documentations to learn what Nanoblox has to offer to developers and users."
        />
      </Head>
      <NavigationBar />
      <div className="container mx-auto my-2 flex-grow">
        <div className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ResourceCard
            imageUrl="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            imageUrl="https://www.tacobell.com/medias/Taco-Bell-Wallpapers.jpg?context=bWFzdGVyfHJvb3R8MTM5NTU5fGltYWdlL2pwZWd8aDIwL2g5ZS84OTI3MTk4MDE5NjE0LmpwZ3xiYWM2YWFlNDFlNzA1YTJkNmE5MDU3NzFmNTkyOGRlZGM5M2FmZGRlZmU1NTFjMDZiYmU0NTU4YTI2MTk2NTli"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s"
          />
          <ResourceCard
            imageUrl="https://www.lifewire.com/thmb/Jw2zQuXPK9lcjwQqUxNxzT_9jlw=/1280x720/smart/filters:no_upscale()/vladstudio-library-wallpaper-5919cd763df78cf5fa3d7e27.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            imageUrl="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            imageUrl="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            imageUrl="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            imageUrl="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            imageUrl="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            imageUrl="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
        </div>
      </div>
    </div>
  );
}
