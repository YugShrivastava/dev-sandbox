import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const githubInfoLoader = async () => {
  let res = await fetch(`https://api.github.com/users/YugShrivastava`);
  res = await res.json();
  return {
    name: res.name || "Not Available",
    avatar: res.avatar_url || "",
    followers: res.followers || 0,
    following: res.following || 0,
    bio: res.bio || "Not Available",
    public_repos: res.public_repos || 0,
  };
};

function Github() {
  const gitRef = useRef(null);

  const [data, setData] = useState(useLoaderData());

  const [name, setName] = useState("YugShrivastava");

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => {
        if (res.ok) return res.json();
        setData(false);
        throw new Error("Failed to fetch the data");
      })
      .then((res) => {
        setData({
          name: res.name || "Not Available",
          avatar: res.avatar_url || "",
          followers: res.followers || 0,
          following: res.following || 0,
          bio: res.bio || "Not Available",
          public_repos: res.public_repos || 0,
        });
      })
      .catch((msg) => {
        console.log(msg);
      });
  }, [name]);

  return (
    <div className="flex flex-col items-center align-middle justify-center gap-10 my-10">
      <div className="flex flex-wrap items-center justify-around gap-5">
        <input
          className="text-xl bg-gray-200 outline-orange-500 px-4 py-2 rounded-lg border-2 border-gray-400"
          type="text"
          placeholder="Enter a github profile"
          ref={gitRef}
        />
        <button
          className="text-white bg-orange-700 hover:bg-orange-800 px-4 py-2.5 rounded-lg border-2 border-orange-700 hover:border-orange-800"
          onClick={() => {
            if (gitRef.current.value.trim()) setName(gitRef.current.value);
          }}
        >
          Get Github Profile
        </button>
      </div>
      {data ? (
        <div className="text-center flex flex-col text-xl gap-7 items-center justify-center mx-auto max-w-md w-md">
          <div className="w-full flex flex-wrap items-center justify-between gap-10">
            <img
              className="rounded-[50%]"
              src={data.avatar}
              alt="avatar"
              height="130px"
              width="130px"
            />
            <p className="text-3xl">{data.name}</p>
          </div>
          <div className="w-full flex flex-wrap gap-10 items-center justify-between">
            <p className="text-2xl text-gray-800">
              Followers:{" "}
              <span className="text-orange-600">{data.followers}</span>
            </p>
            <p className="text-2xl text-gray-800">
              Following:{" "}
              <span className="text-orange-600">{data.following}</span>
            </p>
          </div>
          <div className="w-full flex flex-col items-baseline justify-center gap-7">
            <p className="text-2xl text-gray-800">
              Bio: <span className="text-orange-600">{data.bio}</span>
            </p>
            <p className="text-2xl text-gray-800">
              Public repos:{" "}
              <span className="text-orange-600">{data.public_repos}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="text-red-600 text-3xl font-semibold">
          Failed to fetch the profile
        </div>
      )}
    </div>
  );
}

export default Github;
