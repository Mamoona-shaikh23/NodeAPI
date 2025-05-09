const employee_count_link = "https://solid-eureka-7vw65w9rp4x7hrrw-6006.app.github.dev/country";

fetch (country_link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fatch data from given URL");
    return response.json();
}).then(data=>{
    
document.get
       
}).catch(err=>{
    console.log(err.message);
});