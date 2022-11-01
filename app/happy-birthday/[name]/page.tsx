import HappyBirthday from "./page.client";

export default ({
  params,
  searchParams,
}: {
  params?: { name?: string };
  searchParams?: { date?: string };
}) => {
  console.log(new Date(searchParams!.date!).getTime());
  return <HappyBirthday />;
};
