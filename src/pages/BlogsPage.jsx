import GeneralListPage from "./GeneralListPage.jsx";

export default function BlogsPage() {
  return (
    <GeneralListPage
      endpoint="https://api.spaceflightnewsapi.net/v4/blogs/"
      contentType="blogs"
    />
  );
}
