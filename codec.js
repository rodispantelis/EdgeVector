/*
    The Edge Vector codec is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
	https://www.gnu.org/licenses/agpl-3.0.txt
	
	Published by Pantelis Rodis, 2021
*/	

function coder(a, b){
var res=0;
//on input of two nodes, you get the place of their edge on the vector
var k=0;
if((b-a)===0){
}else{
    if((b-a)<0){
        k=((a-1)*(1+(a-1)))/2;
        res=Number(k)+Number(b);
    }else{
        k=((b-1)*(1+(b-1)))/2;
        res=Number(k)+Number(a);
    }
}
a=0;
b=0;
return res;
}

function coder1(){
var a0=document.getElementById("coda").value;
var b0=document.getElementById("codb").value;
document.getElementById("resultcod").innerHTML="";
coder2(a0, b0);
}

function coder2(a, b){
var res=0;
//on input of two nodes, you get the place of their edge on the vector
var k=0;
if((b-a)===0){
    document.getElementById("resultcod").innerHTML=("same node error > "+a+" | "+b);
    document.getElementById("coda").value=null;
    document.getElementById("codb").value=null;
}else{
    if((b-a)<0){
        k=((a-1)*(1+(a-1)))/2;
        res=Number(k)+Number(b);
    }else{
        k=((b-1)*(1+(b-1)))/2;
        res=Number(k)+Number(a);
    }
    document.getElementById("resultcod").innerHTML='edge ('+a+', '+b+')'+' is denoted in symbol '+res;
    document.getElementById("coda").value=null;
    document.getElementById("codb").value=null;
}
a=0;
b=0;
}

function decoder(q){
//on input of one place of the vector that denotes one edge of the graph
//you get the two nodes that define the edge
//x<y
var x=0;
var y=0;
var res;

y=Math.floor(Math.sqrt((2*q)));
//y=Math.sqrt((2*q));
y++;
x=q-(((y*y)-y)/2);
if(x<0){
	y--;
	x=q-(((y*y)-y)/2);
}		

res=[x,y];
x=0;
y=0;
q=0;
return res;
}

function decoder1(){
var q0=document.getElementById("decod").value;
document.getElementById("resultdecod").innerHTML="";
decoder2(q0);
}

function decoder2(q){
//on input of one place of the vector that denotes one edge of the graph
//you get the two nodes that define the edge
//x<y
var x=0;
var y=0;

y=Math.floor(Math.sqrt((2*q)));
//y=Math.sqrt((2*q));
y++;
x=q-(((y*y)-y)/2);
if(x<0){
	y--;
	x=q-(((y*y)-y)/2);
}		
document.getElementById("resultdecod").innerHTML='symbol '+q+' denotes edge'+'('+x+', '+y+')';
document.getElementById("decod").value=null;
x=0;
y=0;
q=0;
}
