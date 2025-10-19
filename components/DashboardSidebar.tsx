import Link from "next/link";

export interface navlinksType {
  id: string;
  title: string;
  link: string;
}

const DashboardNavbar = () => {
  const leftLinks = [
    {
      id: "1",
      title: "Students",
      link: "/dashboard/students",
    },
    {
      id: "2",
      title: "Add Course",
      link: "/dashboard/add-courses",
    },
    {
      id: "3",
      title: "New Blog",
      link: "/dashboard/new-blog",
    },
  ];
  return (
    <div>
      <div className="w-[250px] h-[calc(100vh-60px)] border-r border-border">
        {/* bottom section */}
        <div className="flex flex-col gap-[30px] pt-[20px]">
          {leftLinks.map((item: navlinksType) => (
            <Link key={item.id} href={item.link} className="font-semibold">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
