import HappyBirthday from "./page.client";

export default ({
  params,
  searchParams,
}: {
  params?: { name?: string };
  searchParams?: { date?: string };
}) => {
  return <HappyBirthday name={params!.name!} date={searchParams!.date!} />;
};
