const board_size=8;
const body = document.querySelector("body");

function print(data){
    const label = document.createElement("label");
    label.innerText=data;
    body.appendChild(label);
}
function newLine(){
    const label = document.createElement("label");
    label.innerHTML="<br>"
    body.appendChild(label);
}
let k=1;
for(let i=0;i<board_size;i++){
    for (let j=1;j<=board_size;j++){
        if((k+i)%2==1){
            print(`  *  `);
        }
        else {
            print("  #  ");
        }
        k++;
    }
    newLine();
}
