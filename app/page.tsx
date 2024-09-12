import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const fetchData = async () => {
    try {
      const { getToken } = auth();
      const token = await getToken();
      console.log('token', token);
      
      const response = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      console.log("result", result);
    } catch (error) {
      console.log(123123123);
    }
  };

  fetchData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      home page
    </div>
  );
}
