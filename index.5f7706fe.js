var e={};e=JSON.parse('{"numbers":["000","019","028","037","046","055","064","073","082","091","109","118","127","136","145","154","163","172","181","190","199","208","217","226","235","244","253","262","271","280","307","316","325","334","343","352","361","370","389","398","406","415","424","433","442","451","460","479","488","497","505","514","523","532","541","550","569","578","587","596","604","613","622","631","640","659","668","677","686","695","703","712","721","730","749","758","767","776","785","794","802","811","820","839","848","857","866","875","884","893","901","910","929","938","947","956","965","974","983","992"],"words":["accept","affirmative","between","building","cancel","change","confirm","contact","coordinate","danger","evening","failed","frequency","locate","location","meeting","money","month","morning","night","problem","radio","rendezvous","success","today","tomorrow","unable to","week","within","yesterday","red","yellow","blue","green","black","orange","under","shirt","shoes","pants","newspaper","magazine","park bench","tree","Are you ok? Do you need anything?","Yes, we are ok.  No assistance needed.","Meet me at POINT A in 1 hour."]}'),document.addEventListener("DOMContentLoaded",()=>{var t,d;(function(e){let t=document.getElementById("dryadTables");for(let e=1;e<=8;e++){let d=`dryadTable${e}`,n=document.createElement("div");n.id=d,n.classList.add("grid-item"),t.appendChild(n),function(e){let t=document.getElementById(e);if(!t){console.error(`Element with ID ${e} not found.`);return}t.innerHTML="";let d=document.createElement("span");d.id="fromDate",d.className="first",d.innerText="From: ",t.appendChild(d),t.appendChild(document.createElement("br"));let n=document.createElement("span");n.id="untilDate",n.className="first",n.innerText="Until: ",t.appendChild(n),t.appendChild(document.createElement("br"));let r=document.createElement("span");r.id="tableId",r.className="first",r.innerText="Id: ",t.appendChild(r),t.appendChild(document.createElement("br"));let a=document.createElement("table");a.classList.add("dryadTable","border");let l=document.createElement("thead"),o=document.createElement("tr");["","0","1","2","3","4","5","6","7","8","9"].forEach(e=>{let t=document.createElement("th");t.innerText=e,o.appendChild(t)}),l.appendChild(o),a.appendChild(l);let c=document.createElement("tbody"),i=[4,3,3,2,2,3,2,2,2,2];"ABCDEFGHIJKLMNOPQRSTUVWXY".split("").forEach(e=>{let t=document.createElement("tr"),d=document.createElement("td");d.innerText=e,d.className="first",t.appendChild(d);let n="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");(function(e){for(let t=e.length-1;t>0;t--){let d=Math.floor(Math.random()*(t+1));[e[t],e[d]]=[e[d],e[t]]}})(n),i.forEach(e=>{let d=document.createElement("td"),r=n.splice(0,e).join("");d.innerText=r,t.appendChild(d)}),c.appendChild(t)}),a.appendChild(c),t.appendChild(a)}(d)}})(0),t="encodingTable",d=`
        <table class="encodingTable border">
            <tbody>
                <tr>
                    <td>CODE-0</td>
                    <td>B-70</td>
                    <td>P-80</td>
                    <td>FIG-90</td>
                </tr>
                <tr>
                    <td>A-1</td>
                    <td>C-71</td>
                    <td>Q-81</td>
                    <td>(.)-90</td>
                </tr>
                <tr>
                    <td>E-2</td>
                    <td>D-72</td>
                    <td>R-82</td>
                    <td>(:)-92</td>
                </tr>
                <tr>
                    <td>I-3</td>
                    <td>F-73</td>
                    <td>S-83</td>
                    <td>(')-93</td>
                </tr>
                <tr>
                    <td>N-4</td>
                    <td>G-74</td>
                    <td>U-84</td>
                    <td>( )-94</td>
                </tr>
                <tr>
                    <td>O-5</td>
                    <td>H-75</td>
                    <td>V-85</td>
                    <td>(+)-95</td>
                </tr>
                <tr>
                    <td>T-6</td>
                    <td>J-76</td>
                    <td>W-86</td>
                    <td>(-)-96</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>K-77</td>
                    <td>X-87</td>
                    <td>(=)-97</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>L-78</td>
                    <td>Y-88</td>
                    <td>REQ-98</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>M-79</td>
                    <td>Z-89</td>
                    <td>SPC-99</td>
                </tr>
            </tbody>
        </table>`,document.getElementById(t).innerHTML=d,function(t){let d=document.createElement("table");d.setAttribute("id","codeBookTable");let n=document.createElement("tbody");n.setAttribute("id","codeBookTableBody"),d.appendChild(n),document.getElementById(t).appendChild(d);let r=e.words.sort();for(let t=0;t<11;t++){let d=n.insertRow(),a=d.insertCell(0),l=a.appendChild(document.createElement("span"));l.setAttribute("class","upperCase"),l.appendChild(document.createTextNode(e.numbers[t]+" "+r[t])),(l=(a=d.insertCell(1)).appendChild(document.createElement("span"))).setAttribute("class","upperCase"),l.appendChild(document.createTextNode(e.numbers[t+11]+" "+r[t+11])),(l=(a=d.insertCell(2)).appendChild(document.createElement("span"))).setAttribute("class","upperCase"),l.appendChild(document.createTextNode(e.numbers[t+22]+" "+r[t+22])),(l=(a=d.insertCell(3)).appendChild(document.createElement("span"))).setAttribute("class","upperCase");let o=" ";o=void 0==e.words[t+33]?"":e.words[t+33],l.appendChild(document.createTextNode(e.numbers[t+33]+" "+o))}}("codeBook")});