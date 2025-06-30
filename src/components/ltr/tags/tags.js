import Link from 'next/link';

const Tags = ({ tags = [] }) => {
  

  return (
    <div className="panel_inner mb-0">
      <div className="panel_header">
        <h4><strong>Tags</strong></h4>
      </div>
      <div className="panel_body">
        <div className="tags-inner d-flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tags/${tag.slug}`}
              className="ui tag text-uppercase fw-semibold border px-2 py-1 rounded"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
