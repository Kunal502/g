 var listg_arrays=[];
 var timegu_arrays=[];
 function submit()
 {
     var list_of_guest= document.getElementById("gname1").value;
     listg_arrays.push(list_of_guest+timegu_arrays);
     document.getElementById("output").innerHTML= listg_arrays ;
     var timeofguest= document.getElementById("timeg").value;
     timegu_arrays.push("<h5> Time="+timeofguest+"</h5>");
     document.getElementById("timeout").innerHTML=timegu_arrays;
 }
