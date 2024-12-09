import Image from "next/image";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/Blog Card 1.png",
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      link: "#",
    },
    {
      id: 2,
      image: "/images/Blog Card 2.png",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      link: "#",
    },
    {
      id: 3,
      image: "/images/Blog Card 3.png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "#",
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-great-vibes text-2xl">Blog Post</p>
          <h2 className="text-white text-4xl font-bold">
            <span className="text-yellow-500">Latest</span> News & Blog
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <p className="text-yellow-500 text-sm mb-2">{blog.date}</p>
                <h3 className="text-white text-lg font-semibold mb-4">
                  {blog.title}
                </h3>
                <div className="flex justify-between items-center">
                  <a
                    href={blog.link}
                    className="text-yellow-500 hover:underline text-sm"
                  >
                    Learn More
                  </a>
                  <div className="flex space-x-2 text-yellow-500">
                    <button>
                      <i className="fas fa-share-alt"></i>
                    </button>
                    <button>
                      <i className="fas fa-thumbs-up"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
