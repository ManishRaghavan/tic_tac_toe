import React from 'react'
import styles from "./main.module.css"
import style from "./box.module.css"
import Minimax from 'tic-tac-toe-minimax'



export const Main = () => {

    const[player,Setplayer] = React.useState("player")
    const[value,Setvalue] = React.useState("X")
    const[hard,Sethard] = React.useState("Easy")
    const[playerValue,SetPlayerValue] = React.useState("X")

    const hanldeSet=(value)=>{
        if(value==="player"){
            Setplayer(("player"))
        }
        if(value==="ai"){
            Setplayer(("ai"))
        }if(value==="x"){
            Setvalue("X")
            SetPlayerValue("X")
        }if(value==="o"){
            Setvalue("O")
            SetPlayerValue("O")
        }if(value==="Easy"){
            Sethard("Easy")
        }
        if(value==="Normal"){
            Sethard("Normal")
        }if(value==="Hard"){
            Sethard("Hard")
        }
    }
    


    
    const[winner,SetWinner] = React.useState("")

    const [pBoard,SetPboard] = React.useState({0:"?",1:"?",2:"?",3:"?",4:"?",5:"?",6:"?",7:"?",8:"?"})

    const winnerCheck=()=>{
        let b = pBoard
        let arr=[b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8]]
        if(arr[0]===arr[1]&&arr[1]===arr[2] && arr[0]!=="?"){
            return SetWinner(arr[0])
        } if(arr[3]===arr[4]&&arr[4]===arr[5] && arr[3]!=="?"){
            return SetWinner(arr[3])
        } if(arr[6]===arr[7]&&arr[7]===arr[8] && arr[8]!=="?"){
            return SetWinner(arr[6])
        } if(arr[0]===arr[4]&&arr[4]===arr[8] && arr[8]!=="?"){
            return SetWinner(arr[0])
        } if(arr[2]===arr[4]&&arr[4]===arr[6] && arr[6]!=="?"){
            return  SetWinner(arr[2])
        } if(arr[0]===arr[3]&&arr[3]===arr[6] && arr[6]!=="?"){
            return SetWinner(arr[0])
        }if(arr[1]===arr[4]&&arr[4]===arr[7] && arr[7]!=="?"){
            return SetWinner(arr[1])
        }if(arr[2]===arr[5]&&arr[5]===arr[8] && arr[8]!=="?"){
            return SetWinner(arr[2])
        }

        let count = 0
        for(let i=0;i<arr.length;i++){
            if(arr[i]==="?"){
                count++
            }
        }

        if(count===0){
            SetWinner("Draw")
        }

    }

    const { ComputerMove } = Minimax;
 

    const[prev,Setprev] = React.useState([0,1,2,3,4,5,6,7,8])
    
   


    const game=(number)=>{
        if(winner!=="") return
        if(player==="player"){
            if(pBoard[number]!=="?") return
            SetPboard({...pBoard,[number]:playerValue})
            SetPlayerValue(playerValue==="X"?"O":"X")
            
        }if(player==="ai"){
            
            if(winner!=="") return
            if(pBoard[number]!=="?"){return}
            SetPboard({...pBoard,[number]:value})
            return ai(number)
    }
}

const ai =(number)=>{
    winnerCheck()
    const huPlayer = value;
        const aiPlayer = value==="X"?"O":"X";
        const symbols = {
            huPlayer: huPlayer,
            aiPlayer: aiPlayer
        }
        
        const board = prev;
        board[number] = huPlayer
        let nextMove = ComputerMove( board, symbols, hard );
        board[nextMove] = aiPlayer
        let s = setTimeout(() => {
            SetPboard(prevState=>{return{...prevState,[nextMove]:aiPlayer}})
        }, 1000);
  
        Setprev(board)
        return s
}

    React.useEffect(()=>{
        if(winner!=="") return
        SetPboard(pBoard)
        return winnerCheck()
    },[pBoard])

    const hanldeReset=()=>{
        let dummy = {0:"?",1:"?",2:"?",3:"?",4:"?",5:"?",6:"?",7:"?",8:"?"}
        SetPboard(dummy)
        Setvalue("X")
        SetPlayerValue("X")
        Setplayer("player")
        Sethard("Easy")
        SetWinner("")
        Setprev([0,1,2,3,4,5,6,7,8])
    }

  
    return (
        <div className={styles.mainBox}>
            <div className={styles.selectBox}>
                <div id={player==="player"?styles.S_player:null} className={styles.S_player} onClick={()=>hanldeSet("player")}>
                    <h3>With Player</h3>
                </div>
                <div id={player==="ai"?styles.C_player:null} className={styles.C_player} onClick={()=>hanldeSet("ai")}>
                <h3>With Ai</h3>
                </div>
                <div className={styles.S_chc}>
                    <div className={styles.s}><h3>Select one : </h3></div>
                <div className={styles.S_x}  id={value==="X"?styles.S_x:null} onClick={()=>hanldeSet("x")}>
                   <h3>X</h3>
                </div>
                <div className={styles.S_o} id={value==="O"?styles.S_o:null} onClick={()=>hanldeSet("o")}>
                    <h3>O</h3>
                </div>
                </div>
            </div>
            <div className={styles.S_hard} id={player==="ai"?null:styles.s_hard} >
                <div id={hard==="Easy"?styles.S_hard:null} onClick={()=>hanldeSet("Easy")}>
                    <h4>Easy</h4>
                </div>
                <div id={hard==="Normal"?styles.S_hard:null} onClick={()=>hanldeSet("Normal")}>
                <h4>Normal</h4>
                </div >
                <div id={hard==="Hard"?styles.S_hard:null} onClick={()=>hanldeSet("Hard")}><h4>Hard</h4></div>
            </div>

            <div className={style.playBoardBox}>
                <div onClick={()=>game(0)}><h1>{pBoard[0]}</h1></div>
                <div onClick={()=>game(1)}><h1>{pBoard[1]}</h1></div>
                <div onClick={()=>game(2)}><h1>{pBoard[2]}</h1></div>
                <div onClick={()=>game(3)}><h1>{pBoard[3]}</h1></div>
                <div onClick={()=>game(4)}><h1>{pBoard[4]}</h1></div>
                <div onClick={()=>game(5)}><h1>{pBoard[5]}</h1></div>
                <div onClick={()=>game(6)}><h1>{pBoard[6]}</h1></div>
                <div onClick={()=>game(7)}><h1>{pBoard[7]}</h1></div>
                <div onClick={()=>game(8)}><h1>{pBoard[8]}</h1></div>
          
            </div>
            <div onClick={hanldeReset} className={styles.ResetBtn}>
            <h3>Reset</h3>
            </div>
            <div id={winner!==""?styles.gameWinner:null} className={styles.gameWinner}>
                <h1> {winner==="X"?"✌️ X won ✌️":winner==="O"?"✌️ O won ✌️":winner==="Draw"?"💪 Draw 💪":null}  </h1>
            </div>
        </div>
    )
}
