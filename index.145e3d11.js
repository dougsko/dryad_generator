var t={};t=JSON.parse('{"numbers":["000","019","028","037","046","055","064","073","082","091","109","118","127","136","145","154","163","172","181","190","199","208","217","226","235","244","253","262","271","280","307","316","325","334","343","352","361","370","389","398","406","415","424","433","442","451","460","479","488","497","505","514","523","532","541","550","569","578","587","596","604","613","622","631","640","659","668","677","686","695","703","712","721","730","749","758","767","776","785","794","802","811","820","839","848","857","866","875","884","893","901","910","929","938","947","956","965","974","983","992"],"words":[]}'),document.addEventListener("DOMContentLoaded",()=>{var e,d;(function(t){let e=document.getElementById("dryadTables");for(let t=1;t<=8;t++){let d=`dryadTable${t}`,n=document.createElement("div");n.id=d,n.classList.add("grid-item"),e.appendChild(n),function(t){let e=document.getElementById(t);if(!e){console.error(`Element with ID ${t} not found.`);return}e.innerHTML="";let d=document.createElement("span");d.id="fromDate",d.className="first",d.innerText="From: ",e.appendChild(d),e.appendChild(document.createElement("br"));let n=document.createElement("span");n.id="untilDate",n.className="first",n.innerText="Until: ",e.appendChild(n),e.appendChild(document.createElement("br"));let r=document.createElement("span");r.id="tableId",r.className="first",r.innerText="Id: ",e.appendChild(r),e.appendChild(document.createElement("br"));let l=document.createElement("table");l.classList.add("dryadTable","border");let a=document.createElement("thead"),o=document.createElement("tr");["","0","1","2","3","4","5","6","7","8","9"].forEach(t=>{let e=document.createElement("th");e.innerText=t,o.appendChild(e)}),a.appendChild(o),l.appendChild(a);let s=document.createElement("tbody"),p=[4,3,3,2,2,3,2,2,2,2];"ABCDEFGHIJKLMNOPQRSTUVWXY".split("").forEach(t=>{let e=document.createElement("tr"),d=document.createElement("td");d.innerText=t,d.className="first",e.appendChild(d);let n="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");(function(t){for(let e=t.length-1;e>0;e--){let d=Math.floor(Math.random()*(e+1));[t[e],t[d]]=[t[d],t[e]]}})(n),p.forEach(t=>{let d=document.createElement("td"),r=n.splice(0,t).join("");d.innerText=r,e.appendChild(d)}),s.appendChild(e)}),l.appendChild(s),e.appendChild(l)}(d)}})(0),e="encodingTable",d=`
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
        </table>`,document.getElementById(e).innerHTML=d,function(e){let d=document.createElement("table");d.setAttribute("id","codeBookTable");let n=document.createElement("tbody");n.setAttribute("id","codeBookTableBody"),d.appendChild(n),document.getElementById(e).appendChild(d),t.words.sort();for(let e=0;e<17;e++){let d=n.insertRow();for(let n=0;n<6;n++){let r=d.insertCell(n).appendChild(document.createElement("span"));r.setAttribute("class","upperCase");let l=e+17*n,a=" ";a=void 0===t.words[l]?"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;":t.words[l],t.numbers[l]&&(r.innerHTML=`${t.numbers[l]} ${a}`)}}}("codeBook")});