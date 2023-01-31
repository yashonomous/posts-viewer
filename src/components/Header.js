import {
  AppsRounded,
  Home,
  MessageRounded,
  NotificationsRounded,
  SearchRounded,
} from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../common/StateProvider";
import useDebounce from "../common/useDebounce";

let i = 0;

function Header() {
  const [{ posts, users, comments }] = useStateValue();
  const [searchInput, setSearchInput] = useState("");
  const [inputBlur, setInputBlur] = useState(true);
  const [searchedData, setSearchedData] = useState([]);

  const debouncedSearchInput = useDebounce(searchInput, 1000);

  useEffect(() => {
    if (debouncedSearchInput) {
      setSearchedData(
        posts.filter((post) => post.title.includes(debouncedSearchInput))
      );
    }
  }, [debouncedSearchInput, posts]);

  return (
    <div className="flex justify-between items-stretch  px-2">
      {/* can also usememo for static components */}
      {/* {React.useMemo(
        () => (
          <div className="flex items-center">
            <div>{`logo${i}`}</div>
          </div>
        ),
        [posts]
      )} */}

      <div className="flex items-center justify-center">
        <Link to={`/home` || `/`}>
          <div className="flex items-center justify-center p-2 bg-[#F0F2F6] rounded-full">
            <Home className={`text-4xl`} />
          </div>
        </Link>
      </div>
      <div className="flex items-center basis-[25rem] ">
        <div className="flex flex-1 items-center gap-2 bg-[#F0F2F5] h-10 p-2 rounded-full">
          <SearchRounded />
          <div className="flex flex-1 h-10 items-stretch rounded-full">
            {/* TODO: remove close buton from search bar */}
            <input
              className=" bg-[#F0F2F5] rounded-full outline-none px-2"
              type="search"
              value={searchInput}
              onChange={({ target }) => {
                setInputBlur(false);
                setSearchInput(target.value);
                // console.log(debouncedSearchInput);

                // setSearchedData(
                //   posts.filter((post) => post.title.includes(target.value))
                // );
              }}
              onFocus={({ target }) => {
                // select current target
                target.select();
                setInputBlur(false);
                setSearchInput(target.value);
              }}
              onBlur={() => {
                //another way to let Link onclick execute then blur action
                // setTimeout(() => {
                //   setInputBlur(true);
                // }, 200);
              }}
              placeholder="search posts"
            />
            {searchInput?.length > 0 && !inputBlur && (
              <div className="absolute bg-[rgba(255,255,255,1)] top-12 left-[25%] w-[50%]  items-stretch justify-center flex flex-col rounded-lg">
                {searchedData?.map((data) => (
                  <div key={data.id}>
                    <Link
                      to={`/posts/${data.id}`}
                      onMouseDown={(e) => {
                        // to prevent onblur event
                        e.preventDefault();
                      }}
                    >
                      <div
                        className=" p-2 "
                        onClick={() => {
                          // set blur to true after clicking
                          setInputBlur(true);
                          setSearchInput("");
                        }}
                      >
                        {data.title}
                      </div>
                    </Link>
                    <div className="bg-[#E4E5EB] h-[1px]"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <AppsRounded />
          <MessageRounded />
          <NotificationsRounded />
        </div>
      </div>
    </div>
  );
}

export default Header;
