 let accordin = document.getElementsByClassName("faq-title")

 for (let i =0; i < accordin.length; i++) {
    accordin[i].addEventListener("click", function() {
        if (this.childNodes[1].classList.contains("fa-plus")) {
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-xmark");
        } else {
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-xmark"); 
        }

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
        }
    });
 }