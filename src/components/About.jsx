function About({ 
    image ="/image.png",
    about = "About this blog" }) {

  return (
    <aside style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
      <img
        src={image}
        alt="blog logo"
        style={{ width: "60px", borderRadius: "50%", marginRight: "15px" }}
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;