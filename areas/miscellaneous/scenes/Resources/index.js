import NavigationBar from "../../../../components/navigationBars/NavigationBar";
import ResourceCard from "./components/ResourceCard";

export default function Resources() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-nanobloxGray-light">
      <NavigationBar />
      <div className="container mx-auto my-2 flex-grow">
        <div className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing"
          />
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
            title="Resource Title"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          />
          <ResourceCard
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
