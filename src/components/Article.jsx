function Article({ title, preview, date }) {

  const articleDate = date ? new Date(date) : new Date(0);

  const formattedDate = articleDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
