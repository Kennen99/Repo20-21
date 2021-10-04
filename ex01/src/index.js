        var display = document.getElementById("display");
        /*
        var dugme = [B1,B2,B3,B4,B5,B6,B7,B8,B9,B9,B0];
        var unos = [1,2,3,4,5,6,7,8,9,0];
        function BF(x){
            display.innerHTML = temp + x;
            temp += x;
        }
        dugme[i].onclick = function(){
            BF(unos[i];)
        }
        */
        var temp = "";
        var capslock = false;
        var shift = false;
        // realizacija unosa brojeva
        
        function brojevi(x){
            display.innerHTML = temp + x;
            temp += x;
        }

        B1.onclick = function(){
            brojevi(1);
        };
        B2.onclick = function(){
            brojevi(2);
        };
        B3.onclick = function(){
            brojevi(3);
        };
        B4.onclick = function(){
            brojevi(4);
        };
        B5.onclick = function(){
            brojevi(5);
        };
        B6.onclick = function(){
            brojevi(6);
        };
        B7.onclick = function(){
            brojevi(7);
        };
        B8.onclick = function(){
            brojevi(8);
        };
        B9.onclick = function(){
            brojevi(9);
        };
        B0.onclick = function(){
            brojevi(0);
        };
        // function for letters
        function slova(x){
            if(shift===true && capslock===true){
                shift=false;
            }
            else if(shift===true || capslock===true){
                shift=false;
                x = x.toUpperCase();
            }
            display.innerHTML = temp + x;
            temp += x;
        }
        // first row letters and backspace
        Bq.onclick = function(){
            slova("q");
        };
        Bw.onclick = function(){
            slova("w");
        };
        Be.onclick = function(){
            slova("e");
        };
        Br.onclick = function(){
            slova("r");
        };
        Bt.onclick = function(){
            slova("t");
        };
        By.onclick = function(){
            slova("z");
        };
        Bu.onclick = function(){
            slova("u");
        };
        Bi.onclick = function(){
            slova("i");
        };
        Bo.onclick = function(){
            slova("o");
        };
        Bp.onclick = function(){
            slova("p");
        };
        function BBackSpaceF(){
            temp = temp.substring(0, temp.length-1);
            display.innerHTML = temp;
        }
        BBackSpace.onclick = function(){
            BBackSpaceF();
        };
        // second row letters and capslock
        Ba.onclick = function(){
            slova("a");
        };
        Bs.onclick = function(){
            slova("s");
        };
        Bd.onclick = function(){
            slova("d");
        };
        Bf.onclick = function(){
            slova("f");
        };
        Bg.onclick = function(){
            slova("g");
        };
        Bh.onclick = function(){
            slova("h");
        };
        Bj.onclick = function(){
            slova("j");
        };
        Bk.onclick = function(){
            slova("k");
        };
        Bl.onclick = function(){
            slova("l");
        };
        BCapsLock.onclick = function(){
            if(capslock===true){
                capslock=false;
            } else{
                capslock=true;
            }
        };
        // third row letters and -, _, Shift
        Bz.onclick = function(){
            slova("z");
        };
        Bx.onclick = function(){
            slova("x");
        };
        Bc.onclick = function(){
            slova("c");
        };
        Bv.onclick = function(){
            slova("v");
        };
        Bb.onclick = function(){
            slova("b");
        };
        Bn.onclick = function(){
            slova("n");
        };
        Bm.onclick = function(){
            slova("m");
        };
        Bline.onclick = function(){
            display.innerHTML = temp + "-";
            temp += "-";
        };
        Bunderline.onclick = function(){
            display.innerHTML = temp + "_";
            temp += "_";
        };
        BShift.onclick = function(){
            if(shift===true){
                shift=false;
            } else{
                shift=true;
            }
        };
        // space and ok
        BSpace.onclick = function(){
            display.innerHTML = temp + " ";
            temp += " ";
            if(shift===true){
                shift=false;
            }
        }
        BOk.onclick = function(){
            
        }