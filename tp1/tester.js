'use strict'

let ex1=require("./exercice1"),ex2=require("./exercice2"),ex3=require("./exercice3"),ex4=require("./exercice4"),note=0;try{120===ex1.factorielIt(5)&&3628800===ex1.factorielIt(10)?(note+=1,console.log("ex1a1 ok")):console.log("factorielIt est fausse"),ex1.factorielIt.toString().indexOf("for")>0?(note+=1,console.log("ex1a2 ok")):console.log("ex1a pas fait avec un for")}catch(e){console.log("error in ex1a"),console.log(e)}try{720===ex1.factorielRec(6)&&3628800===ex1.factorielRec(10)?(note+=1,console.log("ex1b1 ok")):console.log("factorielRec est fausse"),ex1.factorielRec.toString().substring(25).indexOf("factorielRec")>0?(note+=1,console.log("ex1b2 ok")):console.log("factorielRec n'est pas récursive")}catch(e){console.log("error in ex1b"),console.log(e)}try{const e=ex1.factorielTableau([2,4,6],ex1.factorielRec);3===e.length&&2===e[0]&&24===e[1]&&720===e[2]?(note+=1,console.log("ex1c1 ok")):console.log("factorielTableau est fausse"),ex1.factorielTableau.toString().indexOf("map")<0?(note+=1,console.log("ex1c2 ok")):console.log("factorielTableau est faite avec un map")}catch(e){console.log("error in ex1c"),console.log(e)}try{const e=ex1.factorielMap([2,4,6],ex1.factorielRec);3===e.length&&2===e[0]&&24===e[1]&&720===e[2]?(note+=1,console.log("ex1d1 ok")):console.log("factorielMap est fausse"),ex1.factorielMap.toString().indexOf("map")>0?(note+=1,console.log("ex1d2 ok")):console.log("factorielMap n'est pas faite avec un map")}catch(e){console.log("error in ex1d"),console.log(e)}try{const e=ex2.countWords("que jaime a faire apprendre ce nombre utile au sage que jaime a faire jaime a faire");e&&2===e.que&&3===e.jaime&&1===e.ce?(note+=2,console.log("ex2a ok")):console.log("countWords est fausse")}catch(e){console.log("error in ex2a"),console.log(e)}try{const e=new ex2.WordList("que jaime a faire apprendre ce nombre utile au sage ce nombre utile au sage que jaime a faire jaime a faire faire");e&&e instanceof ex2.WordList?(note+=1,console.log("ex2b1 ok")):console.log("erreur sur le new WordList"),1===e.getCount("apprendre")?(note+=1,console.log("ex2b2 ok")):console.log("erreur sur WordList.getCount"),'["que","jaime","a","faire","apprendre","ce","nombre","utile","au","sage"]'===JSON.stringify(e.getWords())?(note+=1,console.log("ex2b3 ok")):console.log("erreur sur WordList.getWords"),"faire"===e.maxCountWord()?(note+=1,console.log("ex2b4 ok")):console.log("erreur sur WordList.maxCountWord"),"apprendre"===e.minCountWord()?(note+=1,console.log("ex2b5 ok")):console.log("erreur sur WordList.minCountWord")}catch(e){console.log("error in ex2b"),console.log(e)}try{const e=new ex2.WordList("que jaime a faire apprendre ce nombre utile au sage que jaime a faire jaime a faire").applyWordFunc(e=>e.length);"[3,5,1,5,9,2,6,5,2,4]"===JSON.stringify(e)?(note+=1,console.log("ex2c1 ok")):console.log("erreur sur WordList.applyWordFunc")}catch(e){console.log("error in ex2c"),console.log(e)}try{'{"name":"Dufourd","firstName":"Jean-Claude","id":4}'===JSON.stringify(new ex3.Student("Dufourd","Jean-Claude",4))?(note+=1,console.log("ex3a ok")):console.log("erreur sur new Student")}catch(e){console.log("error in ex3a"),console.log(e)}try{"student: Dufourd, Jean-Claude, 4"===new ex3.Student("Dufourd","Jean-Claude",4).print()?(note+=1,console.log("ex3b ok")):console.log("erreur sur Student.print")}catch(e){console.log("error in ex3b"),console.log(e)}try{"student: Dufourd, Jean-Claude, 5, french"===new ex3.ForeignStudent("Dufourd","Jean-Claude",5,"french").print()?(note+=1,console.log("ex3c ok")):console.log("erreur sur new ForeignStudent")}catch(e){console.log("error in ex3c"),console.log(e)}try{const e=new ex4.Promotion;note+=1,console.log("ex4a ok"),e.read('[{"name":"Dufourd","firstName":"Jean-Claude","id":4},{"name":"Bellot","firstName":"Patrick","id":5},{"name":"Poilane","firstName":"Yves","id":6},{"name":"Berbez","firstName":"Marie-Claude","id":7},{"name":"David","firstName":"Bertrand","id":8},{"name":"Benenson","firstName":"James","id":9,"nationality":"american"}]'),6===e.size()?(note+=1,console.log("ex4b ok")):console.log("erreur sur Promotion.read ou .size"),e.print(),note+=1,console.log("ex4c ok"),e.get(0)instanceof ex3.Student&&e.get(5)instanceof ex3.ForeignStudent?(note+=1,console.log("ex4d ok")):console.log("Promotion.read ne retrouve pas les classes des objets"),"function"==typeof e.saveToFile&&"function"==typeof e.readFromFile?(note+=1,console.log("ex4e ok")):console.log("erreur sur Promotion.saveToFile ou readFronFile")}catch(e){console.log("erreur dans ex4"),console.log(e)}console.log("========>"+5*note/6);
