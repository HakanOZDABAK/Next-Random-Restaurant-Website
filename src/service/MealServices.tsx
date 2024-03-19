import axios from "axios"

export class MealServices{

    getAllMealCategory=async()=>{

        try{
        const result = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(result=>result.data)

        return result.categories
         
           
        }
    catch(err:any){
        console.log(err)
    }
}


getMealByCategory=async(categoryName:string)=>{

    try{
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`).then(result=>result.data)

    return result.meals
     
       
    }
catch(err:any){
    console.log(err)
}
}
}