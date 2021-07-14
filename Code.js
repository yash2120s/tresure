const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

function clues() {
    if(score === 0){
    fill("white")
    textSize(15)
    text("R E V B A I L A", 439,329)
    fill("blue")
    text("Hint: Always changing, not constant !!", 439,349)
   
    }
    if(score === 1){
    fill("white")
    textSize(15)
    text("C U T N I F O N", 439,329)
    fill("blue")
    text("Hint: Performs a particular task !!", 439,349)
    }
    if(score === 2){
    fill("white")
    textSize(15)
    text("A T E D A S B A", 439,329)
    fill("blue")
    text("Hint: Stores all information !!", 439,329)
    }
}