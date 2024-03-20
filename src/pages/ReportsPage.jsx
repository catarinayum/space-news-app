import GeneralListPage from "./GeneralListPage.jsx";

export default function ReportsPage() {
  return (
    <GeneralListPage endpoint="https://api.spaceflightnewsapi.net/v4/reports/" contentType="reports" />
  );
}
