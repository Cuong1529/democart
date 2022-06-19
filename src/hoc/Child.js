import React, { useState, useEffect } from "react";
import useCustomHook from "./useCustomHook";
import axios from "axios";
import useFetch from "./useFetch";

export default function Child() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />

      <UserCard />

      <UserList />
    </div>
  );
}

export function FirstComponent() {
  const increaseHandler = useCustomHook(0, "FirstComponent");
  return (
    <div>
      <p>First Component</p>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}

export function SecondComponent() {
  const increaseHandler = useCustomHook(0, "SecondComponent");
  return (
    <div>
      <p>Second Component</p>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}

export function UserCard() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userInfo, setUserInfo] = useState(null);
  // useEffect(() => {
  //   let isSubscribe = true;
  //   (async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         "https://5f3fda1244212d0016fed4db.mockapi.io/users/1"
  //       );
  //       if (isSubscribe && response.status === 200) {
  //         const { data = null } = response;
  //         setUserInfo(data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       isSubscribe && setIsLoading(false);
  //     }
  //   })();
  //   return () => (isSubscribe = false);
  // }, []);

  const {isLoading, data: userInfo} = useFetch("https://5f3fda1244212d0016fed4db.mockapi.io/users/1");
  return (
    <>
      {isLoading ? (
        <div> Loading ... </div>
      ) : userInfo ? (
        <div>
          <h2>Thông tin User</h2>
          <p>Họ tên: {userInfo.fullName}</p>
          <p>Tuổi: {userInfo.age}</p>
          <p>Địa chỉ: {userInfo.address}</p>
          <p>Số điện thoại: {userInfo.phone}</p>
        </div>
      ) : (
        <div>Không thể lấy thông tin user</div>
      )}
    </>
  );
}

export function UserList() {
  
  const {isLoading, data: list} = useFetch("https://5f3fda1244212d0016fed4db.mockapi.io/users")

  return (
    <>
      {isLoading ? (
        <div> Loading ... </div>
      ) : list ? (
        <ul>
          <h1>Danh sách người dùng</h1>
          {list.map((user, index) => (
            <li key={index}>
              Họ tên: {user.fullName} - Số điện thoại: {user.phone}
            </li>
          ))}
        </ul>
      ) : (
        <div>Không thể lấy danh sách người dùng</div>
      )}
    </>
  );
}
