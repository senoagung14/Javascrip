console.log("Nomor 5");
console.log();

for(var i = 0; i < 8; i++){
    var papan = "";
    for(var  j = 0; j < 4; j++){
        if(i % 2 == 1){
            papan+="# ";
        }

        else{
            papan+=" #"
        }
    }
    console.log(papan);
}