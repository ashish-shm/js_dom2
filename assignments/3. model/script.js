
    let data = [
        {
            image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494464667397.png",
            name: "Carwash",
            category: "Painting"
        },
        {
            image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494528264937.png",
            name: "Muck Mouth",
            category: "Painting"
        },
        {
            image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494528646446.png",
            name: "Fishwall",
            category: "Painting"
        },
        {
            image: "http://data.mavo.io/portfolio/images/web-coffe-marilyn.jpg",
            name: "Web Coffe Marilyn",
            category: "Painting"
        },
        {
            image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494903924970.png",
            name: "Web 3 Jules",
            category: "Painting"
        },
        {
            image: "http://data.mavo.io/portfolio/images/web-electric3.jpg",
            name: "Web electric3",
            category: "Painting"
        }
    ];



    let ul = document.querySelector(".list");
    

    function createImageList(data) {
        
        data.forEach( (el, index) => {
            let li = document.createElement('li');
            li.setAttribute("data-id",index);
            li.classList.add("image_list");

            let img = document.createElement('img');
            img.setAttribute("src", el.image);
            
            img.classList.add("image");
            

            let btn = document.createElement('button');
            btn.classList.add("btn");
            btn.textContent = "Details"

            li.append(img);
            li.append(btn);

            ul.append(li);

            btn.addEventListener('click', displayItem);
        })
        
    }

    function displayItem(event) {
        let id = event.target.parentNode.dataset.id;
        

        data.forEach( (el, index) => {
            
            if(index == id) {
                let category = document.querySelector(".category");
                category.innerHTML = el.category;
                let name = document.querySelector(".name");
                name.innerHTML = el.name;
                let selected_image =document.querySelector(".selected_image");
                selected_image.setAttribute("src", el.image);
                  
            }
        }) 

    }

    createImageList(data);