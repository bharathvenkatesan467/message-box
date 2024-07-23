let arr=["how are you?","who are you?","what is your name","what about your skill?"];
function c(){
    const question=document.getElementById("text").value;
    console.log(question);
    if(arr.includes(question))
        {
            window.alert("accepted");
        }
        else{
            document.getElementById('decline').style="background-color:red;";
            window.alert("declined");
        }
}
