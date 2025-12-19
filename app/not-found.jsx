import Link from "next/link";

function notfound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-0">
      <h1 className="text-[160px] font-extrabold leading-none mb-5">Oops!</h1>
      <p className="text-3xl font-bold mb-5">404-Page not found</p>
      <div className="text-center leading-5 mb-4">
        <p>The page you are looking for might have been removed </p>
        <p className="max-w-[440px] mx-auto">
          has its name changed or temporarily unavailable.{" "}
        </p>
      </div>
      <Link href="/" className="bg-green-500 p-4 rounded-lg">
        Go to Homepage
      </Link>
    </div>
  );
}

export default notfound;
