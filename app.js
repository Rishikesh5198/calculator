function fun1()
{
    let a1=document.getElementsByClassName("num1")[0].value
    let a2=document.getElementsByClassName("num2")[0].value
    let a3=parseInt(a1)+parseInt(a2)
    document.getElementsByClassName("res")[0].value=a3;

}
function fun2()
{
    let a1=document.getElementsByClassName("num1")[0].value
    let a2=document.getElementsByClassName("num2")[0].value
    let a3=parseInt(a1)-parseInt(a2);
    document.getElementsByClassName("res")[0].value=a3;

}
function fun3()
{
    let a1=document.getElementsByClassName("num1")[0].value
    let a2=document.getElementsByClassName("num2")[0].value
    let a3=parseInt(a1)*parseInt(a2);
    document.getElementsByClassName("res")[0].value=a3;
}

function fun4()
{
    let a1=document.getElementsByClassName("num1")[0].value
    let a2=document.getElementsByClassName("num2")[0].value
    let a3=parseInt(a1)/parseInt(a2);
    document.getElementsByClassName("res")[0].value=a3;
}