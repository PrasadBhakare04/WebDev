"use server"
export async function submitAction(e){
    console.log(await e.get("name"));
    //any server action such as storing the form data into databases etc
  }