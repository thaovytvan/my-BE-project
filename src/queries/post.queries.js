const getPostByUserIdQuery = (userId) => `
  SELECT
    p.id,
    p.content,
    p.title,
    p.created_at,
    p.updated_at,
    u.name AS author_name,
    json_agg(
      json_build_object(
        'id', u.id,
        'name', u.name
      ) ORDER BY u.name DESC
    ) AS shared_users
  FROM
    "post" p
  LEFT JOIN
    "user" u ON p.author = u.id
  LEFT JOIN
    "user_post_share" ups ON p.id = ups.post_id
  LEFT JOIN
    "user" us ON ups.user_id = us.id
  WHERE
    p.author = ${userId} OR ups.user_id = ${userId}
  GROUP BY
    p.id, p.content, p.title, p.created_at, p.updated_at, u.name
  ORDER BY
    p.created_at DESC;
`;

module.exports = { getPostByUserIdQuery };
