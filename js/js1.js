window.onload=function() {
    // const btn=document.getElementById("si");
    var grid=[[1,2,3],[4,5,6],[7,8,0]];
    const art=(board) => {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                var i1 = Math.floor(Math.random() * (board.length));
                var j1 = Math.floor(Math.random() * (board.length));
    
                var temp = board[i][j];
                board[i][j] = board[i1][j1];
                board[i1][j1] = temp;
            }
        }
        return board;
    }
    function construct_block() {
        var gri=art(grid);
        var reart=[];
        for(var i=0;i<gri.length;i++) {
            for(var j=0;j<gri[0].length;j++) {
                    reart.push(gri[i][j]);
                }
            }
        var mai=document.getElementById("main");
        for(var i=0;i<reart.length;i++) {
            const bt=document.createElement("button");
            if(reart[i]==0) {
                bt.textContent="";
                bt.id="nul";
            }
            else {
            bt.textContent=reart[i];
            bt.id=reart[i];
            }
            mai.appendChild(bt);
        }

    }

    construct_block();

    function check_win(grid) {
        return (
            grid[0][0]===1 &&
            grid[0][1]===2 &&
            grid[0][2]===3 &&
            grid[1][0]===4 &&
            grid[1][1]===5 &&
            grid[1][2]===6 &&
            grid[2][0]===7 &&
            grid[2][1]===8 &&
            grid[2][2]===0
        );
    }
    function getCoordinates(list,v) {
        for (const[index, ele] of list.entries()) {
            for(i=0;i<ele.length;i++) {
                if(ele[i]==v) {
                    var it=parseInt(v);
                    return [
                        index,
                        ele.indexOf(it)
                    ];
                }
            }
        }
    }
    class Box {
        constructor(x,y) {
            this.x = parseInt(x);
            this.y = parseInt(y);
            console.log("x",this.x,"y",this.y);
        }
        getTopBox() {
            if(this.x==0){
                console.log("true");
                return [-1,-1];
            }    
            else {
            return [this.x-1,this.y];
            }
        }
        getRightBox() {
            if(this.y==2) 
            return [-1,-1]; 

            else
            return [this.x,this.y+1];
        }
        getBottomBox() {
            if(this.x==2) 
            return [-1,-1]; 
            
            else
            return [this.x+1,this.y];
        }
        getLeftBox() {
            if(this.y==0) 
            return [-1,-1];
            
            else
            return [this.x,this.y-1];
        }
        getNextdoorBoxes() {
            return [
                this.getTopBox(),
                this.getRightBox(),
                this.getBottomBox(),
                this.getLeftBox()
            ].filter(box => box!==null)
        }
    }
    var btn=document.querySelectorAll("button");
    btn.forEach(ele=> {
        ele.addEventListener("click",function(e) {
            var val=e.target.innerText;
            console.log(val);
            st=getCoordinates(grid,val);
            const blkbox = new Box(st[0],st[1]);
            console.log("st",st[0],st[1]);
            const n = blkbox.getNextdoorBoxes();
            var j,k,s,t;
            j=n[0];
            k=n[1];
            s=n[2];
            t=n[3];
            if(j[0]==-1) {
                console.log("top null");
            }
            else {
                console.log("top",grid[parseInt(j[0])][parseInt(j[1])]);
                v1=parseInt(grid[parseInt(j[0])][parseInt(j[1])]);
                if(v1===0) {
                    var el1=document.getElementById(val);
                    el1.innerText="";
                    var el2=document.getElementById("nul");
                    el2.innerText=val;
                    el1.id="nul";
                    el2.id=val;
                    var temp=grid[parseInt(st[0])][parseInt(st[1])];
                    grid[parseInt(st[0])][parseInt(st[1])]=grid[parseInt(j[0])][parseInt(j[1])];
                    grid[parseInt(j[0])][parseInt(j[1])]=temp;
                    console.log(grid);
                }
            }

            
            if(k[0]==-1) 
                console.log("right null");
            else {
                console.log("right",grid[parseInt(k[0])][parseInt(k[1])]);
                v1=parseInt(grid[parseInt(k[0])][parseInt(k[1])]);
                if(v1===0) {
                    var el1=document.getElementById(val);
                    el1.innerText="";
                    var el2=document.getElementById("nul");
                    el2.innerText=val;
                    el1.id="nul";
                    el2.id=val;
                    var temp=grid[parseInt(st[0])][parseInt(st[1])];
                    grid[parseInt(st[0])][parseInt(st[1])]=grid[parseInt(k[0])][parseInt(k[1])];
                    grid[parseInt(k[0])][parseInt(k[1])]=temp;
                    console.log(grid);
                }
            }

            if(s[0]==-1) 
                console.log("bottom null");
            else {
                console.log("bottom",grid[parseInt(s[0])][parseInt(s[1])]);
                v1=parseInt(grid[parseInt(s[0])][parseInt(s[1])]);
                if(v1===0) {
                    var el1=document.getElementById(val);
                    el1.innerText="";
                    var el2=document.getElementById("nul");
                    el2.innerText=val;
                    el1.id="nul";
                    el2.id=val;
                    var temp=grid[parseInt(st[0])][parseInt(st[1])];
                    grid[parseInt(st[0])][parseInt(st[1])]=grid[parseInt(s[0])][parseInt(s[1])];
                    grid[parseInt(s[0])][parseInt(s[1])]=temp;
                    console.log(grid);
                }
            }

            if(t[0]==-1) 
                console.log("left null");
            else {
                console.log("left",grid[parseInt(t[0])][parseInt(t[1])]);
                v1=parseInt(grid[parseInt(t[0])][parseInt(t[1])]);
                if(v1===0) {
                    var el1=document.getElementById(val);
                    el1.innerText="";
                    var el2=document.getElementById("nul");
                    el2.innerText=val;
                    el1.id="nul";
                    el2.id=val;
                    var temp=grid[parseInt(st[0])][parseInt(st[1])];
                    grid[parseInt(st[0])][parseInt(st[1])]=grid[parseInt(t[0])][parseInt(t[1])];
                    grid[parseInt(t[0])][parseInt(t[1])]=temp;
                    console.log(grid);
                }
            }
            if(check_win(grid)) {
                console.log("You win!!!!!!");
                var win_case=document.getElementById("win_case");
                win_case.textContent="You Win!!! Congratulations.";
                var nm=document.getElementById("main");
                nm.style["boxShadow"]="0 0 40px #ffccff";
            }
        })
    });
}
