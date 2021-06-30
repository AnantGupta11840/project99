var Speehrecoginition = window.webkitSpeehReconginition;

var reconginition = new SpeehRecoginition();

function start (){
    document.getElementById("textbox").innerHTML="";
    
    reconginition.start() ;

}
recogination.onresult= function(event){
    console.log(event);
    var content= event.result[0][0].transript;
    
    document.getElementById=("textbox").innerHTML= content;
    console.log(content);   
}
function speak(){
    var synth= Window.speehSynthesis;
    speak_data= doucment.getElementById("speak").value; 
    var utterThis= new SpeehSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}