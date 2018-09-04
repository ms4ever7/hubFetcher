const organizationNormalizer = organization => ({
  id: organization.id,
  name: organization.name,
  createdAt: organization.created_at,
  forksCount: organization.forks_count,
  watchers: organization.watchers,
  membersUrl: organization.stargazers_url
});

export default organizationNormalizer;