import React from 'react'
import styles from "./main.module.css"
import style from "./box.module.css"



export const Main = () => {

    const[player,Setpalyer] = React.useState("")
    const[value,Setvalue] = React.useState("")
    const[hard,Sethard] = React.useState("")
    const[playerValue,SetPlayerValue] = React.useState("")

    const hanldeSet=(value)=>{
        if(value==="player"){
            Setpalyer("player")
        }
        if(value==="ai"){
            Setpalyer("ai")
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
    

    const huPlayer = value;
    const aiPlayer = value==="X"?"X":"O";

    const symbols = {
    huPlayer: huPlayer,
    aiPlayer: aiPlayer
    }


    const board = [0,1,2,3,4,5,6,7,8]

    

    const [pBoard,SetPboard] = React.useState({0:"?",1:"?",2:"?",3:"?",4:"?",5:"?",6:"?",7:"?",8:"?"})
    const game=(number)=>{
        if(player==="player"){
            if(pBoard[number]!=="?") return
            SetPboard({...pBoard,[number]:playerValue})
            SetPlayerValue(playerValue==="X"?"O":"X")
        }
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
            <div className={styles.S_hard} >
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
        </div>
    )
}
