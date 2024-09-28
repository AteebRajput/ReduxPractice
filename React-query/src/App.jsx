import { useQuery, useMutation } from '@tanstack/react-query';
import React from 'react';

const App = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['todo'],
    queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()),
    refetchInterval:4000,  
  });

  const {mutate,isPending} = useMutation({
    mutationFn: (newPost) =>{
      fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body: JSON.stringify(newPost),
        Headers:{
          "Content-type": "application/json; charset=UTF-8"
        },
      }).then((res) => res.JSON())
    }
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.id}</h2>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
