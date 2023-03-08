/*
    This file is part of the HeavenMS MapleStory Server
    Copyleft (L) 2016 - 2019 RonanLana

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* NPC: Agent E (9000036)
	Victoria Road : Henesys
	
	Refining NPC:
	* Accessories refiner
        * 
        * @author Ronan Lana
*/

var status = -1;
var selectedType = -1;
var selectedItem = -1;
var item;
var items;
var mats;
var matQty;
var cost;
var qty = 1;
var equip;
var maxEqp = 0;
var item = [5450000, 5360042, 5211048];

function start() {  
    status = -1;  
    action(1, 0, 0);  
} 

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }else if (mode == 0 && status == 0) {
        status--;
        cm.dispose();      
    }else
        if (mode == 1)
            status++;
        else 
            status--;
            if (status == 0) {
                //cm.getPlayer().setCS(true);
                var selStr = "Hello, I am your #bHomie#k! <3 #b";
                var options = ["Gosomewhere","Goto FM","Open Shop Xu","Shop mesos"/*,"#t4032496#"*/];
                for (var i = 0; i < options.length; i++)
                    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
                    cm.sendSimple(selStr);

                //cm.sendSimple("Ban muon lam gi? \r\n #L0##bDi den dau do #k#l \r\n #L1##bDi den FM#k#l");
            }else if (status == 1){               
                if (selection == 0){          
                    var selStr1 = "Di dau na`? <3 #b";
                    options0 = ["Henesys","Ellinia","Perion","Kerning City","Sleepywood"];
                    for (var i = 0; i < options0.length; i++)
                    {
                    selStr1 += "\r\n#L" + i + "# " + options0[i] + "#l";   
                    }    
                    selected = 1;     
                    cm.sendSimple(selStr1); 

                }else if (selection == 1) {
                    cm.warp(910000000);
                    cm.dispose();   
                }else if (selection == 2){
                    var selStr = "Pick one #b";
                    var optionsShopXu = ["Linh Tinh","2","3"/*,"#t4032496#"*/];
                    for (var i = 0; i < optionsShopXu.length; i++)
                        selStr += "\r\n#L" + i + "# " + optionsShopXu[i] + "#l";
                        selected = 2;
                        cm.sendSimple(selStr);                   
                }else if (selection == 3)
                    {
                        cm.openShopNPC(1338);
                        cm.dispose();
                    } 

            }else if (status == 2){     

                if (selected == 1)
                {
                    if (selection == 0){
                        cm.warp(100000000);
                    }else if (selection == 1){
                        cm.warp(101000000);
                    }else if (selection == 2){
                        cm.warp(102000000);
                    }else if (selection == 3){
                        cm.warp(103000000);
                    }else if (selection == 4){
                        cm.warp(105040300);
                    }
                }else if (selected == 2){ 

                    if (selection == 0)
                    {
                        selectedShopXu = 1;
                        cm.sendSimple(" What do you want? They all cost 100 mesos. \r\n#L0# Miu Miu #v5450000# \r\n#L1# X2 Drop   #v5360042# \r\n#L2# X2 Exp #v5211048# ");                      


                    }
                    if (selection == 1)
                    {
                        cm.sendSimple(" What do you want? They all cost 100 mesos. \r\n#L0# Miu Miu #v5450000# \r\n#L1# saw #v1302001# \r\n#L2# Viking Sword #v1302002# ");                      
                        selectedShopXu = 2;
                        cm.dispose();
                    }
                    if (selection == 2)
                    {
                        selectedShopXu = 3;
                        cm.sendOk(" 3___Not coded yet, f4."); 
                        cm.dispose();
                    }
                }    

            }else if (status == 3){
                if (selectedShopXu == 1)
                {

                    if (cm.getMeso() >= 100) {
                            cm.gainItem(item[selection], 1);
                            cm.gainMeso(-100);
                            cm.sendOk("Thank you for your 100 #donate points#k!");
                            cm.dispose();
                            } else {
                                cm.sendOk(" You do not have enough #bMesos#k. Please get some more then come back. ");
                                cm.dispose();
                            }

                    //cm.gainItem(item, qty);
                    //cm.sendOk("The item is done! Take and try this piece of art yourself.");
                } else {
                    cm.sendOk("You got no free slot on your inventory.");

                }
            }
            
}	


    


