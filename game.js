let p1=document.querySelector('.p1')
let trump=document.querySelector(".trump")

let start=document.querySelector(".start")

let ok=document.querySelector(".ok")
let ok2=document.getElementById('ok2')
let alart1=document.querySelector(".alart1")
let alart2=document.querySelector(".alart2")

let card1=document.getElementById("card1")
let card2=document.getElementById("card2")
let card3=document.getElementById("card3")
let card4=document.getElementById("card4")
let card5=document.getElementById("card5")
let card6=document.getElementById("card6")
let card7=document.getElementById("card7")
let card8=document.getElementById("card8")
let card9=document.getElementById("card9")
let card10=document.getElementById("card10")
let card11=document.getElementById("card11")
let card12=document.getElementById("card12")
let card13=document.getElementById("card13")
let card14=document.getElementById("card14")
let card15=document.getElementById("card15")
let card16=document.getElementById("card16")
let card17=document.getElementById("card17")
let card18=document.getElementById("card18")
let card19=document.getElementById("card19")
let card20=document.getElementById("card20")
let card21=document.getElementById("card21")

let a1=document.getElementById('a1')
let a2=document.getElementById('a2')
let a3=document.getElementById('a3')
let a4=document.getElementById('a4')
let a5=document.getElementById('a5')
let a6=document.getElementById('a6')
let a7=document.getElementById('a7')
let a8=document.getElementById('a8')
let a9=document.getElementById('a9')
let a10=document.getElementById('a10')
let a11=document.getElementById('a11')
let a12=document.getElementById('a12')
let a13=document.getElementById('a13')
let a14=document.getElementById('a14')
let a15=document.getElementById('a15')
let a16=document.getElementById('a16')
let a17=document.getElementById('a17')
let a18=document.getElementById('a18')
let a19=document.getElementById('a19')
let a20=document.getElementById('a20')
let a21=document.getElementById('a21')

let subtrump=document.querySelector('.subtrump')

let p3=document.querySelector('.p3')
let card22=document.querySelector('.card22')
let a22=document.getElementById('a22')
let done=document.querySelector('.done')

let cointainer1=document.getElementById('cointainer1')
let cointainer2=document.getElementById('cointainer2')
let cointainer3=document.getElementById('cointainer3')

let textcon1=document.getElementById('textcon1')
let textcon2=document.getElementById('textcon2')
let textcon3=document.getElementById('textcon3')

let look=document.querySelector('.look')
let but=document.querySelector(".click")

// pg1 conent
start.addEventListener('click',() =>{
        p1.style.display="none"
        trump.style.display='block'
})
//trump content
ok.addEventListener('click',()=>{
        look.style.display="block"
        alart1.style.display="none"
})
ok2.addEventListener('click',() =>{
        alart2.style.display='none'
        cointainer1.style.display="block"
        cointainer2.style.display="block"
        cointainer3.style.display="block"
})
        but.addEventListener('click',() => {
                cointainer1.style.display="none"
                cointainer2.style.display="none"
                cointainer3.style.display="none"
                let num =Number(but.textContent)
                if(but.textContent>=1){
                        but.textContent=num-1
                        if(but.textContent==7){
                                card1.classList.remove('amcard');
                                card1.classList.add('dmcard');
                                card2.classList.remove('amcard2')
                                card2.classList.add('dmcard2')
                                card3.classList.remove('amcard3')
                                card3.classList.add('dmcard3')
                        }
                        if(but.textContent==6){
                                card4.classList.remove('amcard')
                                card4.classList.add('dmcard-2')
                                card5.classList.remove('amcard2')
                                card5.classList.add('dmcard22')
                                card6.classList.remove('amcard3')
                                card6.classList.add('dmcard32')
                        }
                        if(but.textContent==5){
                                card7.classList.remove('amcard')
                                card7.classList.add('dmcard-3')
                                card8.classList.remove('amcard2')
                                card8.classList.add('dmcard23')
                                card9.classList.remove('amcard3')
                                card9.classList.add('dmcard33')
                        }
                        if(but.textContent==4){
                                card10.classList.remove('amcard');
                                card10.classList.add('dmcard');
                                card11.classList.remove('amcard2')
                                card11.classList.add('dmcard2')
                                card12.classList.remove('amcard3')
                                card12.classList.add('dmcard3')
                        }
                        if(but.textContent==3){
                                card13.classList.remove('amcard')
                                card13.classList.add('dmcard-2')
                                card14.classList.remove('amcard2')
                                card14.classList.add('dmcard22')
                                card15.classList.remove('amcard3')
                                card15.classList.add('dmcard32')
                        }
                        if(but.textContent==2){
                                card16.classList.remove('amcard')
                                card16.classList.add('dmcard-3')
                                card17.classList.remove('amcard2')
                                card17.classList.add('dmcard23')
                                card18.classList.remove('amcard3')
                                card18.classList.add('dmcard33')
                        }
                        if(but.textContent==1){
                                card19.classList.remove('amcard');
                                card19.classList.add('dmcard');
                                card20.classList.remove('amcard2')
                                card20.classList.add('dmcard2')
                                card21.classList.remove('amcard3')
                                card21.classList.add('dmcard3')
                        
                        }


                        if(but.textContent==1 && (cointainer1.style.display="none")&& (cointainer2.style.display="none"&& (cointainer3.style.display="none"))){
                                cointainer1.classList.add("dmcard-2")
                                textcon1.textContent="select";
                                cointainer2.classList.add("dmcard22")
                                textcon2.textContent="select";
                                cointainer3.classList.add("dmcard32")
                                textcon3.textContent="select";
                                but.style.display='none'
                                look.style.display='none'
                                let round1num=document.querySelector(".round1num")
                                if(parseInt(round1num.textContent)==1) {
                                        
                                        alart2.style.display="block"
                                }
                                if(parseInt(round1num.textContent)==2) {
                                        
                                        alart2.style.display="block"
                                }
                                if(parseInt(round1num.textContent)==3){
                                        alart2.style.display="block"
                                
                                }
                        }
                }      
        });
        cointainer1.addEventListener('click',() => {
                let round1num=document.querySelector(".round1num")
                if(parseInt(round1num.textContent) < 4) {
                        round1num.textContent=parseInt(round1num.textContent)+1
                }
                let b1=a1.textContent
                let b2=a2.textContent
                let b3=a3.textContent
                let b4=a4.textContent
                let b5=a5.textContent
                let b6=a6.textContent
                let b7=a7.textContent
                let b8=a8.textContent
                let b9=a9.textContent
                let b10=a10.textContent
                let b11=a11.textContent
                let b12=a12.textContent
                let b13=a13.textContent
                let b14=a14.textContent
                let b15=a15.textContent
                let b16=a16.textContent
                let b17=a17.textContent
                let b18=a18.textContent
                let b19=a19.textContent
                let b20=a20.textContent
                let b21=a21.textContent
                
                a1.textContent=b21
                a2.textContent=b18
                a3.textContent=b15
                a4.textContent=b12
                a5.textContent=b9
                a6.textContent=b6
                a7.textContent=b3
                a8.textContent=b19
                a9.textContent=b16
                a10.textContent=b13
                a11.textContent=b10
                a12.textContent=b7
                a13.textContent=b4
                a14.textContent=b1
                a15.textContent=b20
                a16.textContent=b17
                a17.textContent=b14
                a18.textContent=b11
                a19.textContent=b8
                a20.textContent=b5
                a21.textContent=b2  
                
                look.style.display="block"
                but.style.display='block'
                but.textContent=8
                cointainer1.style.display="none";
                cointainer2.style.display="none";
                cointainer3.style.display="none";
                card1.classList.add('amcard');
                card1.classList.remove('dmcard');
                card2.classList.add('amcard2')
                card2.classList.remove('dmcard2')
                card3.classList.add('amcard3')
                card3.classList.remove('dmcard3')
                card4.classList.add('amcard')
                card4.classList.remove('dmcard-2')
                card5.classList.add('amcard2')
                card5.classList.remove('dmcard22')
                card6.classList.add('amcard3')
                card6.classList.remove('dmcard32')
                card7.classList.add('amcard')
                card7.classList.remove('dmcard-3')
                card8.classList.add('amcard2')
                card8.classList.remove('dmcard23')
                card9.classList.add('amcard3')
                card9.classList.remove('dmcard33')
                card10.classList.add('amcard');
                card10.classList.remove('dmcard');
                card11.classList.add('amcard2')
                card11.classList.remove('dmcard2')
                card12.classList.add('amcard3')
                card12.classList.remove('dmcard3')
                card13.classList.add('amcard')
                card13.classList.remove('dmcard-2')
                card14.classList.add('amcard2')
                card14.classList.remove('dmcard22')
                card15.classList.add('amcard3')
                card15.classList.remove('dmcard32')
                card16.classList.add('amcard')
                card16.classList.remove('dmcard-3')
                card17.classList.add('amcard2')
                card17.classList.remove('dmcard23')
                card18.classList.add('amcard3')
                card18.classList.remove('dmcard33')
                card19.classList.add('amcard');
                card19.classList.remove('dmcard');
                card20.classList.add('amcard2')
                card20.classList.remove('dmcard2')
                card21.classList.add('amcard3')
                card21.classList.remove('dmcard3')

                if(parseInt(round1num.textContent)==4){
                        console.log(a11.textContent)
                }
               
                if((parseInt(round1num.textContent))==4){
                        subtrump.style.display="none"
                        a22.textContent=a11.textContent
                        p3.style.display="block"
                        done.style.display="block"
                }
        })
        cointainer2.addEventListener('click',() => {
                let round1num=document.querySelector(".round1num")

                if(parseInt(round1num.textContent) < 4) {
                        round1num.textContent=parseInt(round1num.textContent)+1
                        
                }
                let b1=a1.textContent
                let b2=a2.textContent
                let b3=a3.textContent
                let b4=a4.textContent
                let b5=a5.textContent
                let b6=a6.textContent
                let b7=a7.textContent
                let b8=a8.textContent
                let b9=a9.textContent
                let b10=a10.textContent
                let b11=a11.textContent
                let b12=a12.textContent
                let b13=a13.textContent
                let b14=a14.textContent
                let b15=a15.textContent
                let b16=a16.textContent
                let b17=a17.textContent
                let b18=a18.textContent
                let b19=a19.textContent
                let b20=a20.textContent
                let b21=a21.textContent
                
                a1.textContent=b19
                a2.textContent=b16
                a3.textContent=b13
                a4.textContent=b10
                a5.textContent=b7
                a6.textContent=b4
                a7.textContent=b1
                a8.textContent=b20
                a9.textContent=b17
                a10.textContent=b14
                a11.textContent=b11
                a12.textContent=b8
                a13.textContent=b5
                a14.textContent=b2
                a15.textContent=b21
                a16.textContent=b18
                a17.textContent=b15
                a18.textContent=b12
                a19.textContent=b9
                a20.textContent=b6
                a21.textContent=b3  

                look.style.display="block"
                but.style.display='block'
                but.textContent=8
                cointainer1.style.display="none";
                cointainer2.style.display="none";
                cointainer3.style.display="none";
                card1.classList.add('amcard');
                card1.classList.remove('dmcard');
                card2.classList.add('amcard2')
                card2.classList.remove('dmcard2')
                card3.classList.add('amcard3')
                card3.classList.remove('dmcard3')
                card4.classList.add('amcard')
                card4.classList.remove('dmcard-2')
                card5.classList.add('amcard2')
                card5.classList.remove('dmcard22')
                card6.classList.add('amcard3')
                card6.classList.remove('dmcard32')
                card7.classList.add('amcard')
                card7.classList.remove('dmcard-3')
                card8.classList.add('amcard2')
                card8.classList.remove('dmcard23')
                card9.classList.add('amcard3')
                card9.classList.remove('dmcard33')
                card10.classList.add('amcard');
                card10.classList.remove('dmcard');
                card11.classList.add('amcard2')
                card11.classList.remove('dmcard2')
                card12.classList.add('amcard3')
                card12.classList.remove('dmcard3')
                card13.classList.add('amcard')
                card13.classList.remove('dmcard-2')
                card14.classList.add('amcard2')
                card14.classList.remove('dmcard22')
                card15.classList.add('amcard3')
                card15.classList.remove('dmcard32')
                card16.classList.add('amcard')
                card16.classList.remove('dmcard-3')
                card17.classList.add('amcard2')
                card17.classList.remove('dmcard23')
                card18.classList.add('amcard3')
                card18.classList.remove('dmcard33')
                card19.classList.add('amcard');
                card19.classList.remove('dmcard');
                card20.classList.add('amcard2')
                card20.classList.remove('dmcard2')
                card21.classList.add('amcard3')
                card21.classList.remove('dmcard3')
               
                if(parseInt(round1num.textContent)==4){
                        console.log(a11.textContent)
                
                }
                
                if((parseInt(round1num.textContent))==4 ){
                        subtrump.style.display="none"
                        a22.textContent=a11.textContent
                        p3.style.display="block"
                }
        })
        cointainer3.addEventListener('click',() => {
                let round1num=document.querySelector(".round1num")
                if(parseInt(round1num.textContent) < 4) {
                        round1num.textContent=parseInt(round1num.textContent)+1
                }
                let b1=a1.textContent
                let b2=a2.textContent
                let b3=a3.textContent
                let b4=a4.textContent
                let b5=a5.textContent
                let b6=a6.textContent
                let b7=a7.textContent
                let b8=a8.textContent
                let b9=a9.textContent
                let b10=a10.textContent
                let b11=a11.textContent
                let b12=a12.textContent
                let b13=a13.textContent
                let b14=a14.textContent
                let b15=a15.textContent
                let b16=a16.textContent
                let b17=a17.textContent
                let b18=a18.textContent
                let b19=a19.textContent
                let b20=a20.textContent
                let b21=a21.textContent

                a1.textContent=b20
                a2.textContent=b17
                a3.textContent=b14
                a4.textContent=b11
                a5.textContent=b8
                a6.textContent=b5
                a7.textContent=b2
                a8.textContent=b21
                a9.textContent=b18
                a10.textContent=b15
                a11.textContent=b12
                a12.textContent=b9
                a13.textContent=b6
                a14.textContent=b3
                a15.textContent=b19
                a16.textContent=b16
                a17.textContent=b13
                a18.textContent=b10
                a19.textContent=b7
                a20.textContent=b4
                a21.textContent=b1  

                look.style.display="block"
                but.style.display='block'
                but.textContent=8
                cointainer1.style.display="none";
                cointainer2.style.display="none";
                cointainer3.style.display="none";
                card1.classList.add('amcard');
                card1.classList.remove('dmcard');
                card2.classList.add('amcard2')
                card2.classList.remove('dmcard2')
                card3.classList.add('amcard3')
                card3.classList.remove('dmcard3')
                card4.classList.add('amcard')
                card4.classList.remove('dmcard-2')
                card5.classList.add('amcard2')
                card5.classList.remove('dmcard22')
                card6.classList.add('amcard3')
                card6.classList.remove('dmcard32')
                card7.classList.add('amcard')
                card7.classList.remove('dmcard-3')
                card8.classList.add('amcard2')
                card8.classList.remove('dmcard23')
                card9.classList.add('amcard3')
                card9.classList.remove('dmcard33')
                card10.classList.add('amcard');
                card10.classList.remove('dmcard');
                card11.classList.add('amcard2')
                card11.classList.remove('dmcard2')
                card12.classList.add('amcard3')
                card12.classList.remove('dmcard3')
                card13.classList.add('amcard')
                card13.classList.remove('dmcard-2')
                card14.classList.add('amcard2')
                card14.classList.remove('dmcard22')
                card15.classList.add('amcard3')
                card15.classList.remove('dmcard32')
                card16.classList.add('amcard')
                card16.classList.remove('dmcard-3')
                card17.classList.add('amcard2')
                card17.classList.remove('dmcard23')
                card18.classList.add('amcard3')
                card18.classList.remove('dmcard33')
                card19.classList.add('amcard');
                card19.classList.remove('dmcard');
                card20.classList.add('amcard2')
                card20.classList.remove('dmcard2')
                card21.classList.add('amcard3')
                card21.classList.remove('dmcard3')
                if(parseInt(round1num.textContent)==4){
                        console.log(a11.textContent)
                
                }
                
                if((parseInt(round1num.textContent))==4){
                        subtrump.style.display="none"
                        a22.textContent=a11.textContent
                        p3.style.display="block"
                }
        })
        
        
        