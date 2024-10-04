

let btnEl = document.getElementById("languageSelect")

btnEl.addEventListener("change" , function(){
   const selectedLang =btnEl.value;


if(selectedLang==="English" 
){
  document.querySelector(".center-text").innerHTML =  ` <h1>Unlimited movies, TV</h1>
          <h1>shows and more</h1>
          <p>Starts at ₹149. Cancel at any time.</p>
          <div>
            <p class="para">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>

          <div class="inputbox">
            <input type="text" placeholder="" name="" id="" />
            <label class="email" for="email">Email address</label>
            
            <button class="get-started">
              Get Started <span class="arrow"><i class="ri-arrow-right-s-line"></i></span>
            </button>
            
          </div>`

}
else{
    document.querySelector(".center-text").innerHTML =  `
    <h1>अनलिमिटेड फ़िल्में, टीवी शो,</h1>
    <h1>और बहुत कुछ</h1>
    <p>₹149 से शुरू होता है. कभी भी कैंसल करें.</p>
    <div>
      <p class="para">
      देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.
      </p>
    </div>
    
    <div class="inputbox">
      <input type="text" placeholder="" name="" id="" />
      <label class="email" for="email">Email address</label>
      
      <button class="get-started">
        Get Started <span class="arrow"><i class="ri-arrow-right-s-line"></i></span>
      </button>
      
    </div>
    `
}

})
