export const getLoggedInUserInfo = (): any => {
    const localUser: any = localStorage.getItem("user");
    const user: any = JSON.parse(localUser);

    const userInfo = {
        ...user,
        userName:user?.userName ? user?.userName :  user.name,
        image: user?.imageUrls && user.imageUrls[0]?.startsWith("https")
            ? user.imageUrls[0]
            : "https://www.w3schools.com/w3images/avatar2.png"
    };

    return userInfo;
};
