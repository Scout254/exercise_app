
export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '5b48590160msh810d33f15b0f4a9p119f15jsn9af026a9acb1',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }
  export const youtubeOptions = {
    method: 'GET',

   
    headers: {
      'X-RapidAPI-Key': '5b48590160msh810d33f15b0f4a9p119f15jsn9af026a9acb1',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  
  export const fetchData = async(url,options)=>{
      const response = await fetch(url,options);
      const data = await response.json();
  
      return data;
  }