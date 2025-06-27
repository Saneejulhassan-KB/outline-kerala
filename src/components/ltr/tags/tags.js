import Link from 'next/link';

const Tags = () => {
  const tags = [
    "Nature", "Fashion", "Wordpress", "Photo", "Travel", "Hotel",
    "Business", "Culture", "Sports", "Design", "Entertainment"
  ];

  return (
    <div className="panel_inner mb-0">
      <div className="panel_header">
        <h4><strong>Tags </strong></h4>
      </div>
      <div className="panel_body">
        <div className="tags-inner d-flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={`/category-style-two/${tag.toLowerCase()}`}
              className="ui tag text-uppercase fw-semibold border"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
