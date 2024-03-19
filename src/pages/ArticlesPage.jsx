import GeneralListPage from "./GeneralListPage.jsx";

export default function ArticlesPage() {
  return (
    <GeneralListPage endpoint="https://api.spaceflightnewsapi.net/v4/articles/" />
  );
}
