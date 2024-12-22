

export default async function Home() {

  const url = await fetch('https://jsonplaceholder.typicode.com/photos');

  const response = await url.json()
  console.log(response);
  
  return (
      <main>
         {response.map((photo:any,index : number) =>(
          <div key = {index}>

              <h1 className="text-6xl">
                  {photo.id}
                  {photo.name}
              </h1>

          </div>
         ))} 
      </main>


);
}