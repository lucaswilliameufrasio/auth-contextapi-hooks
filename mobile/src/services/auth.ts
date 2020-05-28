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
        token: 'e9ds8afhjads89jfadsj8jjcuaidjiua',
        user: {
          name: 'Lucas',
          email: 'lucaswilliameufrasio@gmail.com',
        },
      });
    }, 400);
  });
}
