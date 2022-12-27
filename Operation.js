function operator() 
{
    var numer1=parseInt(document.getElementById('n1').value);
    var numer2=parseInt(document.getElementById('n2').value);
    var box = document.getElementById('OperationName');
    var option = box.options[box.selectedIndex].text;
    
    if(option == "Addition")
    {
    var answer = numer1+numer2;
    document.getElementById('answerText').innerHTML=answer;
    }
    if(option == "Subtraction")
    {
    var answer = numer1-numer2;
    document.getElementById('answerText').innerHTML=answer;
    }
    if(option == "Multiplication")
    {
    var answer = numer1*numer2;
    document.getElementById('answerText').innerHTML=answer;
    }
    if(option == "Division")
    {
    var answer = numer1/numer2;
    document.getElementById('answerText').innerHTML=answer;
    }

 
}



