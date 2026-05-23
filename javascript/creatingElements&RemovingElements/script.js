// const h1 = document.querySelector("h1")

// const firstImage = document.querySelector("img")

// for(let i = 2;i<=100;i++){
//     const newImages = firstImage.cloneNode()
//     newImages.src=`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
//     container.append(newImages)
// }

// const paragraph = document.createElement("p")
// paragraph.innerText='Pokemon Pikacu'
// paragraph.id= 'para'
// paragraph.className='pokName'
// // paragraph.classList='helloPara'
// container.append(paragraph)



// for(let i =1;i<=100;i++){
// const image = document.createElement("img")
// image.src=`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
// container.append(image)
// }


// for(let i=1;i<=1000;i++){


// // 1.method ✔️
    
// // const imageContainer = document.createElement('div')
// // imageContainer.classList.add('image-container')

// // const newImage = document.createElement('img')
// // newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`

// // const imageNumber = document.createElement('p')
// // imageNumber.innerText = i
// // imageContainer.append(newImage,imageNumber)
// // container.append(imageContainer)

// // 2.method ✔️

// // const myHTML  = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png" >
// //     <p>${i}</p>`
// // imageContainer.innerHTML = myHTML

// }


// 3.method ✔️
const container = document.querySelector(".container")

let myHTML = ``
for(let i = 1 ; i<=100;i++){
myHTML+=`
<div class="image-container">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png" >
    <p>${i}</p>
</div>
`
container.innerHTML=myHTML
}

//✅Removing a element
const thirdImage = document.querySelector("body > div > div:nth-child(5)")
// thirdImage.remove()

thirdImage.parentElement.removeChild(thirdImage)

