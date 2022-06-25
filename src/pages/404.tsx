import NextLink from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>Not found</h1>
      <div>The page you&apos;re looking for was not found.</div>
      <NextLink href="/" passHref>
        <button className="btn">Return to home</button>
      </NextLink>
    </>
  );
};

export default NotFound;
