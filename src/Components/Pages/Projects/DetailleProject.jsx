import { useParams } from "react-router";

export default function DetailleProject() {
  const { id } = useParams();
  console.log(id);

  return <div>DetailleProject</div>;
}
