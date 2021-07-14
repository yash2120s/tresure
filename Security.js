class Security {

    constructor(){

        // Add code to create the input and button elements
        if(score === 0){
    this.access1 = createInput("").attribute("placeholder", "Code1");
    this.access1.position(425,386) 
    this.access1.style('background','white');

    this.button1 = createButton("check")
    this.button1.position(425,423) 
    this.button1.style('background','lightgrey');
        }

       
      
    
    }

    display(){

        // Add code to make the buttons function as expected
 if (score === 0){
         this.button1.mousePressed(() => {
     if(system.authenticate(accessCode1,this.access1.value())){
       this.button1.hide()
       this.access1.hide()
        score++;
       
     }})
 }
     if(score === 1){
        
        this.access2 = createInput("").attribute("placeholder", "Code2");
        this.access2.position(425,386) 
        this.access1.style('background','white');
    
        this.button2 = createButton("check")
        this.button2.position(425,423) 
        this.button2.style('background','lightgrey'); 
    
    
   
    }

    if(score=== 1){
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
              this.button2.hide()
              this.access2.hide()
               score++;
              
          } })
    }
    if(score === 2){

        this.access3 = createInput("").attribute("placeholder", "Code3");
        this.access3.position(425,386) 
        this.access3.style('background','white');
    
        this.button3 = createButton("check")
        this.button3.position(425,423) 
        this.button3.style('background','lightgrey'); 
        
        

    }
   
   if(score === 2){
    this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.access3.value())){
          this.button3.hide()
          this.access3.hide()
           score++;
          
        }})
   }

        }
    
  

    
}