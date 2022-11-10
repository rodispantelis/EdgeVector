var temp=Array(0);
var nodes=0;
var ev;             //graph in Edge Vector format
var evind;          //graph in Edge Vector indexing format
var dimac;          //graph in edge list DIMACS format

if (document.getElementById('inputfile') !=null) {
document.getElementById('inputfile')
        .addEventListener('change', 
           function() {
                var fr=new FileReader();
                fr.onload=function(){
                    dimac = fr.result.split("\n");
                };   
                fr.readAsText(this.files[0]);
            });
    }
            
function dim2ev(){
    for(i1=0;i1<dimac.length;i1++){
        var t=dimac[i1].split(" ");
        if(t[0]==='e'){
            nodes=Math.max(nodes,t[1], t[2]);
            var temp1=coder((t[1]-1), (t[2]-1));
            temp.push(temp1);
        }
    }

    var edges=nodes*(nodes-1)/2;
    ev=Array(edges).fill(0);
    
    for(i2=0;i2<temp.length;i2++){
        ev[temp[i2]]=1;
    }
    document.getElementById('thelink').style.display = 'block';
    ev2evin();
}

function ev2evin(){
    evind=[];
    for(i3=0;i3<ev.length;i3++){
        if(ev[i3]>0){
            evind.push(i3);
        }
    }
    document.getElementById('thelink2').style.display = 'block';    
}

function txt() {
    var textFile = null;
    makeTextFile = function (ev) {
        var data = new Blob([ev], {type: 'text/plain'});
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        return textFile;
    };

var link = document.getElementById('thelink');
document.getElementById('thelink').download='graph.ev';
link.href = makeTextFile(ev);
}

function txt2() {
    var textFile = null;
    makeTextFile = function (evind) {
        var data = new Blob([evind], {type: 'text/plain'});
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        return textFile;
    };

var link = document.getElementById('thelink2');
document.getElementById('thelink2').download='graph.evind';
link.href = makeTextFile(evind);
}