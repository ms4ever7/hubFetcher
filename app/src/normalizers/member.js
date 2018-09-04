const memberNormalizer = member => ({
  id: member.id,
  nickname: member.login,
  avatarImage: member.avatar_url,
  url: member.html_url,
  followers: member.followers_url,
  following: member.following_url
});

export default memberNormalizer;