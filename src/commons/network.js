import axios from 'axios';
export async function makeAGetRequest(url){
   return new Promise((resolve, reject)=>{
      axios.get(url).
        then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err);
        });
    });
      
}

export async function makeAPostRequest(url,data){
  console.log(data);
  return new Promise((resolve, reject)=>{
     axios.post(url,data).
       then(res=>{
         resolve(res);
       }).catch(err=>{
         reject(err);
       });
   });
     
}