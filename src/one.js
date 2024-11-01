

export const getAllMemes = async()=>{
    const url='https://api.imgflip.com/get_memes';
    let data=await fetch(url);
    let response=data.json();
    return response;
}