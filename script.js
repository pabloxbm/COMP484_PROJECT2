$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.wash-button').click(clickedWashButton);
  
    // When image is hovered over, it will "call" function for hovering and leaving hover (functions are below)
    $('.pet-image').mouseover(hoveringPet);
    $('.pet-image').mouseout(leaveHoverPet);
  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Waddles", weight:8, happiness:10, hygiene: 75};
    var mood = "Hi I'm Waddles!";

    // function Pet(name, weight, happiness, hygiene) {
    //   this.name = name;
    //   this.weight = weight;
    //   this.happiness = happiness;
    //   this.hygiene = hygiene;
    //   setWeight = function(weight) {
    //     this.weight = weight;
    //   }
    //   setHappiness = function(happiness) {
    //     this.happiness = happiness;
    //   }
    //   setHygiene = function(hygiene) {
    //     this.hygiene = hygiene;
    //   }
      
    // }

    function updateMood(text) {
      mood = text;
    }
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness += 3;
      // Increase pet weight
      pet_info.weight += 2;
      // Decrease pet hygiene
      pet_info.hygiene -= 1;
      updateMood("Yummy! :D");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness += 2;
      // Decrease pet weight
      pet_info.weight -= 2;
      // Decrease pet hygiene
      pet_info.hygiene -= 5;
      updateMood("Fun! :)");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness -= 3;
      // Decrease pet weight
      pet_info.weight -= 5;
      // Decrease pet hygiene
      pet_info.hygiene -= 10;
      updateMood("Tiring :(")
      checkAndUpdatePetInfoInHtml();
    }

    
    function clickedWashButton() {
      // Decrease pet happiness
      pet_info.happiness -= 5;
      // reset pet hygiene
      pet_info.hygiene = 100;
      updateMood("Cold and Wet :(");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }
      
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }

      if (pet_info.hygiene < 0) {
        pet_info.hygiene = 0;
      }else if (pet_info.hygiene > 100) {
        pet_info.hygiene = 100;
      }

      updatePetImage();
    }

    function updatePetImage() {
      if(pet_info.weight >= 35){
        if (pet_info.hygiene >= 55) {
          $('.pet-image').attr('src', 'images/gigapig_big_br.png');
        }else if (pet_info.hygiene >= 25) {
          $('.pet-image').attr('src', 'images/gigapig_bigd1_br.png');
        }else {
          $('.pet-image').attr('src', 'images/gigapig_bigd2_br.png');
        }
      }else if (pet_info.weight >= 4) {
        if (pet_info.hygiene >= 55) {
          $('.pet-image').attr('src', 'images/gigapig_normc_br.png');
        }else if (pet_info.hygiene >= 25) {
          $('.pet-image').attr('src', 'images/gigapig_normd1_br.png');
        }else {
          $('.pet-image').attr('src', 'images/gigapig_normd2_br.png');
        }
      }else{

        if (pet_info.hygiene >= 55) {
          $('.pet-image').attr('src', 'images/gigapig_skinc_br.png');
        }else if (pet_info.hygiene >= 25) {
          $('.pet-image').attr('src', 'images/gigapig_skind1_br.png');
        }else {
          $('.pet-image').attr('src', 'images/gigapig_skind2_br.png');
        }
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.mood').fadeIn('1000');
      $('.mood').text(mood);
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.hygiene').text(pet_info['hygiene']);
      if(mood!="Hi I'm Waddles!" && mood!="Hello There!"){     
        
        $('.mood').finish();
        $('.mood').fadeOut('10000');
      }
    }

    function hoveringPet() {
      updateMood("Hello There!");
      checkAndUpdatePetInfoInHtml();
    }

    function leaveHoverPet() {
      updateMood("...");
      checkAndUpdatePetInfoInHtml();
    }
  