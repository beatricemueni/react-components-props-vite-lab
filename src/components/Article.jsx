function Article({
  title,
  date = "January 1, 1970",
  preview
}) {
  return (
    <article style={{ marginBottom: "30px" }}>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;