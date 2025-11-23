document.write("<table border =  "+ "0" +" cellspacing = " + "2" + " bgcolor = " + "black" + " width = " + "200" + ">");
document.write("<tr bgcolor = "+ "white"+ "  height =  " + "50" + " >");
let i = 0;
do{
    i++;
    if(i%2 != 0)
        document.write("<td width = " + "50" + " bgcolor = " + "black" +"> " + "&nbsp;" + " </td>");
    else
        document.write("<td width = " + "50" + "> " + "&nbsp;" + " </td>");
}
while(i < 4);
document.write("</tr>");
document.write("</table>");