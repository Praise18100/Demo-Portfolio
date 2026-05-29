import "./testimonials.scss";

interface User {
  id: number;
  name: string;
  title: string;
  img: string;
  icon: string;
  desc: string;
  featured?: boolean;
}

export default function Testimonials() {
  const data: User[] = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Product Lead, Northstar Labs",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Praise helped us simplify a complex product flow into a clean interface our users could adopt in days.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder, Delka Studio",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "From design direction to final implementation, execution was fast, thoughtful, and detail-driven across every sprint.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO, Albi Digital",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "We launched ahead of schedule with a premium look and better performance metrics than our previous platform.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <p>A few words from teams I have partnered with recently.</p>
      <div className="container">
        {data.map((item) => {
          return (
            <div className={item.featured ? "card featured" : "card"} key={item.id}>
              <div className="top">
                <img src="assets/arrow.png" className="left" alt="" />
                <img className="user" src={item.img} alt={item.name} />
                <img className="right" src={item.icon} alt="social icon" />
              </div>
              <div className="center">{item.desc}</div>
              <div className="bottom">
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
