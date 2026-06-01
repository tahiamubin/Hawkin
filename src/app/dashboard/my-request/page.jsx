import RequestSec from "@/app/components/RequestSec";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const myRequestPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/listing/${encodeURIComponent(user?.email)}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const listings = await res.json();
  console.log(listings)
  return (
    <div className="container mx-auto">
      <div>
        {listings.map((listing) => (
          <RequestSec listing={listing} key={listing._id}></RequestSec>
        ))}
      </div>
    </div>
  );
};

export default myRequestPage;
