import { useEffect, useState } from "react";
import User from "./User";
import UserDto from "./UserDto";
import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export function UserList() {
    const [list, setList] = useState<UserDto[]>([])
    const [isloading, setIsLoading] = useState(true)

    async function MyApiCall() {
        setIsLoading(true)
        setList([]);
        const response = await fetch("https://reqres.in/api/users?delay=5");
        const users: UserDto[] = (await response.json()).data;
        console.log(users);
        setIsLoading(false);
        setList(users);
    }

    useEffect(() => {
        MyApiCall();
        console.log("log");
    }, [])

    return <div>
        <h1>User List</h1>
        <Button type="primary" onClick={() => {MyApiCall()}}>Refresh</Button>
        {isloading && <Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} />}
        {list.map((user, i) => <User user={user} key={i} />)}
    </div>
}