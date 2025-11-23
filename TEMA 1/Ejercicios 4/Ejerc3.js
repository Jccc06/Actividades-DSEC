document.write("<table border =  "+ "0" +" cellspacing = " + "2" + " bgcolor = " + "black" + " width = " + "200" + ">");
document.write("<tr bgcolor = "+ "white"+ "  height =  " + "50" + " >");
for(var i = 0;i < 4;i++){
    if(i%2 != 0)
        document.write("<td width = " + "50" + " bgcolor = " + "black" +"> " + "&nbsp;" + " </td>");
    else
        document.write("<td width = " + "50" + "> " + "&nbsp;" + " </td>");
}
document.write("</tr>");
document.write("</table>");