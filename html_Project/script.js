// document.body.children[4].src='https://resources.travellocal.com/wp/uploads/2024/07/04145128/Canada-Mount-Assiniboine-un.jpg'


// Selectors
// const allImages = [...document.images]
// const allImages = document.getElementsByTagName("img")
// const cssImage  = document.getElementsByClassName("css-image")[0]
// const jsImages = document.getElementById("js-img")
// const jsImage = document.querySelector(".js-image")
// const jsImage = document.querySelector("#js-img")
// const jsImage = document.querySelector('[alt="html image"]')
// const jsImage = document.querySelectorAll(".js-image")



// const allImages = document.querySelectorAll('img')
// console.log(allImages)

// const ol = document.querySelector("ol");
// const listItem = ol.querySelector("li");


// const allImages = document.querySelectorAll("img")
// const imageUrl = [
//     'https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?semt=ais_hybrid&w=740&q=80',
//     'https://5.imimg.com/data5/SELLER/Default/2023/7/330483018/UU/FJ/LO/6461830/nature-wallpaper.jpg',
//     'https://static.vecteezy.com/system/resources/thumbnails/053/530/238/small/bright-yellow-bird-in-woven-basket-on-blooming-branch-in-nature-setting-photo.jpg'
// ]

// allImages[0].src = imageUrl[0]
// allImages[1].src = imageUrl[1]
// allImages[2].src = imageUrl[2]

//By for loop

// for(let i = 0 ;i<allImages.length;i++){
//     allImages[i].src= imageUrl[i]
// }


// // By For Each Array Method

// allImages.forEach((newImages,index)=>{
// // console.log(newImages)
// newImages.src = imageUrl[index]
  
// })




//difference between innerHTML,innerText and TextContent

// const paragraph = document.querySelector("p")  
// paragraph.innerHTML="<h3>Good job<h3/>"
// paragraph.innerText = "<h3>Innertext!!<h3/>"
// const textContent =  paragraph.textContent = "<h3>TextContent  !!<h3/>"
// console.log(textContent)


// document.querySelector('[amit="shadow"]')

// document.querySelector('h1').setAttribute('title','Developer')




//Dom manupulation -> style with js
const h1 = document.querySelector('h1')
h1.style.color='hotPink'
h1.style.backgroundColor='green'

const anchorColorChange = document.querySelectorAll('a')
// anchorColorChange.forEach((color)=>{
// // console.log(color)
// color.style.color='teal'
// })

for(const links of anchorColorChange){
    // links.style.color = 'teal '
    // links.style.textDecoration = 'none'
    // links.style.fontWeight=800
    // links.style.fontFamily='cursive'

    // links.style.cssText = `
    // color:teal;
    // font-size: 20px;
    // font-family: cursive;
    // font-weight: 800;
    // text-decoration: none;
    // `

    // links.className = 'links-styling'

    links.classList.add('links-styling')
    links.classList.remove('links-styling')
    links.classList.toggle('links-styling') 
}