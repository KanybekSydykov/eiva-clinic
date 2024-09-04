export async function getData(url: string) {

   const res: any = await fetch(url, {
      cache: 'no-cache'
   });
   if (!res.ok) {
      throw new Error('Failed to fetch some data');
   }
   const data = await res.json();
   return data;


}
