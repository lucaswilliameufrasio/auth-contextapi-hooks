interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "e9djwse8jqfaufnuiasdnfujiadn",
        user: {
          name: "Lucas William",
          email: "lucaswillliameufrasio@gmail.com",
        },
      });
    }, 400);
  });
}
